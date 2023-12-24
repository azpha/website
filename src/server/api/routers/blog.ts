import {z} from 'zod';
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure
} from "@/server/api/trpc";

export const blogRouter = createTRPCRouter({
    create: protectedProcedure
        .input(
            z.object({
                name: z.string().min(1).max(100),
                contents: z.string().min(1),
                tagline: z.string().min(1).max(30),
                image: z.string().min(1)
            })
        )
        .mutation(async ({ ctx, input }) => {
            return ctx.db.blogPost.create({
              data: {
                name: input.name,
                contents: input.contents,
                tagline: input.tagline,
                image: input.image,
                createdBy: { connect: { id: ctx.session.user.id } },
              },
            });
          }),
    delete: protectedProcedure
        .input(
          z.string().min(1)
        )
        .mutation(async ({ctx, input}) => {
          return ctx.db.blogPost.delete({
            where: {
              id: input
            }
          })
        }),
    getOne: publicProcedure
      .input(String)
      .query(({ ctx, input }) => {
        return ctx.db.blogPost.findFirst({
          where: { id: input },
        });
    }),
    getAll: publicProcedure
      .query(({ctx}) => {
        return ctx.db.blogPost.findMany()
      }),
})