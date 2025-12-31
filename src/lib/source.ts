import { posts } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: "/",
  source: posts.toFumadocsSource(),
});
