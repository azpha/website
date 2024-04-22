import { postRouter } from "@/server/api/routers/post";
import { linksRouter } from "./routers/links";
import { blogRouter } from "./routers/blog";
import { miscRouter } from "./routers/misc";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  links: linksRouter,
  blog: blogRouter,
  misc: miscRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
