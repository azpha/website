import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        reviewContents: z.string().min(1),
        type: z.string().min(1),
        image: z.string().min(1)
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          reviewContents: input.reviewContents,
          type: input.type,
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
      return ctx.db.post.delete({
        where: {
          id: input
        }
      })
    }),

  getOne: publicProcedure
  .input(String)
  .query(({ ctx, input }) => {
    return ctx.db.post.findFirst({
      where: { name: input },
    });
  }),

  getAll: publicProcedure
  .query(({ctx}) => {
    return ctx.db.post.findMany()
  }),

  getAllOfType: publicProcedure
  .input(String)
  .query(({ctx, input}) => {
    return ctx.db.post.findMany({
      where: { type: input }
    })
  })
});
