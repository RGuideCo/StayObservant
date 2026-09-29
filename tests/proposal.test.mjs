import test from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/proposal.js';
if (!process.env.ACC_PROPOSAL_SECRET) throw new Error('Run tests with ACC_PROPOSAL_SECRET.');
async function request(url,method='GET') {
  const response={headers:{},setHeader(k,v){this.headers[k]=v;},end(data){this.data=data;}};
  await handler({url,method,headers:{}},response);return response;
}
test('proposal is accessible without a password but remains noindex',async()=>{
  const res=await request('/proposals/angel-city-chorale');assert.equal(res.statusCode,200);assert.match(String(res.data),/A website that/);assert.doesNotMatch(String(res.data),/Proposal password|Lock proposal|__NONCE__/);assert.match(res.headers['X-Robots-Tag'],/noindex/);assert.equal(res.headers['Set-Cookie'],undefined);
});
test('PDF is downloadable without authentication',async()=>{
  const res=await request('/api/proposal?asset=proposal.pdf');assert.equal(res.statusCode,200);assert.equal(res.data.subarray(0,4).toString(),'%PDF');assert.match(res.headers['Content-Disposition'],/^attachment/);
});
test('unknown files, unsafe paths, and unsupported methods are refused',async()=>{
  assert.equal((await request('/api/proposal?asset=../../.env')).statusCode,404);assert.equal((await request('/api/proposal','POST')).statusCode,405);assert.equal((await request('/api/proposal','HEAD')).data,undefined);
});
test('missing encryption configuration fails closed',async()=>{
  const secret=process.env.ACC_PROPOSAL_SECRET;delete process.env.ACC_PROPOSAL_SECRET;assert.equal((await request('/api/proposal')).statusCode,503);process.env.ACC_PROPOSAL_SECRET=secret;
});
