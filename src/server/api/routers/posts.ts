import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postsRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }): any => {
        return ctx.prisma.post.findMany();
    }),
});
