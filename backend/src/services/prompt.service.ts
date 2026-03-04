import { PrismaClient, Prompt } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreatePromptDto {
  title: string;
  content: string;
  category: string;
}

export interface UpdatePromptDto {
  title?: string;
  content?: string;
  category?: string;
}

export const promptService = {
  getAllPrompts: async (): Promise<Prompt[]> => {
    return prisma.prompt.findMany({
      orderBy: { createdAt: 'desc' }
    });
  },

  getPromptById: async (id: string): Promise<Prompt | null> => {
    return prisma.prompt.findUnique({
      where: { id }
    });
  },

  createPrompt: async (data: CreatePromptDto): Promise<Prompt> => {
    return prisma.prompt.create({
      data,
    });
  },

  updatePrompt: async (id: string, data: UpdatePromptDto): Promise<Prompt> => {
    return prisma.prompt.update({
      where: { id },
      data,
    });
  },

  deletePrompt: async (id: string): Promise<Prompt> => {
    return prisma.prompt.delete({
      where: { id }
    });
  }
};

