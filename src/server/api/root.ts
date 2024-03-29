import { postRouter } from "@/server/api/routers/post";
import { linksRouter } from "./routers/links";
import { miscRouter } from "./routers/misc";
import { blogRouter } from "./routers/blog";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  links: linksRouter,
  misc: miscRouter,
  blog: blogRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
