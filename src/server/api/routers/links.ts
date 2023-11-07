import {z} from "zod";
import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure
} from "@/server/api/trpc";

export const linksRouter = createTRPCRouter({
    create: protectedProcedure
        .input(
            z.object({
                name: z.string().min(1),
                url: z.string().min(1)
            })
        )
        .mutation(async ({ctx, input}) => {
            return ctx.db.socialLink.create({
                data: {
                    name: input.name,
                    url: input.url
                }
            })
        }),
    delete: protectedProcedure
        .input(
            z.string().min(1)
        )
        .mutation(async ({ctx, input}) => {
            return ctx.db.socialLink.delete({
                where: {
                    id: input
                }
            })
        }),
    getAll: publicProcedure
        .query(async ({ctx}) => {
            return ctx.db.socialLink.findMany()
        })
})