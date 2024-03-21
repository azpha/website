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
                url: z.string().min(1),
                orderNumber: z.number().optional()
            })
        )
        .mutation(async ({ctx, input}) => {
            return ctx.db.socialLink.create({
                data: {
                    name: input.name,
                    url: input.url,
                    orderNumber: input.orderNumber
                }
            })
        }),
    update: protectedProcedure
        .input(
            z.object({
                id: z.number(),
                name: z.string().min(1).optional(),
                url: z.string().min(1).optional(),
                orderNumber: z.number().optional(),
            })
        )
        .mutation(async ({ctx, input}) => {
            return ctx.db.socialLink.update({
                data: {
                    name: input.name,
                    url: input.url,
                    orderNumber: input.orderNumber
                },
                where: {
                    id: input.id
                }
            })
        }),
    delete: protectedProcedure
        .input(
            z.number().min(1)
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