"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.promptService = {
    getAllPrompts: async () => {
        return prisma.prompt.findMany({
            orderBy: { createdAt: 'desc' }
        });
    },
    getPromptById: async (id) => {
        return prisma.prompt.findUnique({
            where: { id }
        });
    },
    createPrompt: async (data) => {
        return prisma.prompt.create({
            data,
        });
    },
    updatePrompt: async (id, data) => {
        return prisma.prompt.update({
            where: { id },
            data,
        });
    },
    deletePrompt: async (id) => {
        return prisma.prompt.delete({
            where: { id }
        });
    }
};
//# sourceMappingURL=prompt.service.js.map