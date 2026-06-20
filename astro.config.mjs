// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

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
    plugins: [tailwindcss()]
  }
});
