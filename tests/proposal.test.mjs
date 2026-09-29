import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import handler, { validSession } from '../api/proposal.js';
if (!process.env.ACC_PROPOSAL_SECRET || !process.env.ACC_PROPOSAL_PASSWORD) throw new Error('Run tests with the proposal environment variables.');
async function request(url, {method='GET', body, cookie, origin}={}) {
  const headers={host:'www.stayobservant.com'}; if(cookie)headers.cookie=cookie; if(origin)headers.origin=origin;
  const response={headers:{},setHeader(k,v){this.headers[k]=v;},end(data){this.data=data;}};
  await handler({url,method,body,headers},response); return response;
}
test('all protected assets require authorization and do not leak content', async()=>{
  for(const url of ['/proposals/angel-city-chorale','/proposals/angel-city-chorale/proposal.pdf','/api/proposal?asset=proposal.pdf','/proposals/angel-city-chorale/portfolio.png']){
    const res=await request(url);assert.match(String(res.data),/Proposal password/);assert.doesNotMatch(String(res.data),/\$10,000/);assert.match(res.headers['Cache-Control'],/no-store/);
  }
});
test('bad password and cross-origin posts fail',async()=>{
  assert.equal((await request('/api/proposal',{method:'POST',body:{password:'no'}})).statusCode,401);
  assert.equal((await request('/api/proposal',{method:'POST',body:{password:process.env.ACC_PROPOSAL_PASSWORD},origin:'https://other.example'})).statusCode,403);
});
test('correct password unlocks HTML, thumbnail and downloadable PDF; tampering fails',async()=>{
  const login=await request('/api/proposal',{method:'POST',body:{password:process.env.ACC_PROPOSAL_PASSWORD}});assert.equal(login.statusCode,303);
  const cookie=login.headers['Set-Cookie'].split(';')[0];assert.match(login.headers['Set-Cookie'],/HttpOnly; Secure; SameSite=Strict/);
  const page=await request('/proposals/angel-city-chorale',{cookie});assert.equal(page.statusCode,200);assert.match(String(page.data),/\$10,000/);assert.doesNotMatch(String(page.data),/__NONCE__/);
  const pdf=await request('/api/proposal?asset=proposal.pdf',{cookie});assert.equal(pdf.statusCode,200);assert.match(pdf.headers['Content-Disposition'],/^attachment/);assert.equal(pdf.data.subarray(0,4).toString(),'%PDF');
  assert.equal((await request('/api/proposal?asset=../../.env',{cookie})).statusCode,404);
  assert.equal((await request('/api/proposal?asset=proposal.pdf',{cookie:cookie+'x'})).statusCode,401);
  const logout=await request('/api/proposal',{method:'POST',body:{action:'logout'},cookie});assert.match(logout.headers['Set-Cookie'],/Max-Age=0/);
});
test('expired sessions and missing credentials fail closed',async()=>{
  const time=String(Date.now()-1);const sig=createHmac('sha256',process.env.ACC_PROPOSAL_SECRET).update(time).digest('base64url');assert.equal(validSession(`${time}.${sig}`,process.env.ACC_PROPOSAL_SECRET),false);
  const old=process.env.ACC_PROPOSAL_PASSWORD;delete process.env.ACC_PROPOSAL_PASSWORD;assert.equal((await request('/api/proposal')).statusCode,503);process.env.ACC_PROPOSAL_PASSWORD=old;
});
