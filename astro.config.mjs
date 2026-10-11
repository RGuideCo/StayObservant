// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';
import contactHandler from './api/contact.js';

/** @returns {import('vite').Plugin} */
function contactApi() {
  return {
    name: 'stay-observant-contact-api',
    apply: 'serve',
    configureServer(server) {
      const contactEnv = loadEnv(server.config.mode, server.config.envDir, '');
      server.middlewares.use((req, res, next) => {
        if (req.url?.split('?')[0] !== '/api/contact') return next();
        contactHandler(req, res, contactEnv).catch(() => {
          console.error('[contact] Unexpected contact handler error.');
          if (res.writableEnded) return;
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ error: 'Your message couldn’t be sent. Please try again or email me directly below.' }));
        });
      });
    },
  };
}

function rehypeImageLoading() {
  return (tree) => {
    const visit = (node) => {
      if (node?.type === "element" && node.tagName === "img") {
        node.properties = {
          ...node.properties,
          loading: node.properties?.loading ?? "lazy",
          decoding: node.properties?.decoding ?? "async",
        };
      }

      if (Array.isArray(node?.children)) {
        node.children.forEach(visit);
      }
    };

    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeImageLoading],
  },
  vite: {
    plugins: [tailwindcss(), contactApi()]
  }
});
