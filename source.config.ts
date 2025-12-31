import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const posts = defineDocs({
  dir: "content/posts",
});

export default defineConfig();
