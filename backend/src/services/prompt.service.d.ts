import { Prompt } from '@prisma/client';
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
export declare const promptService: {
    getAllPrompts: () => Promise<Prompt[]>;
    getPromptById: (id: string) => Promise<Prompt | null>;
    createPrompt: (data: CreatePromptDto) => Promise<Prompt>;
    updatePrompt: (id: string, data: UpdatePromptDto) => Promise<Prompt>;
    deletePrompt: (id: string) => Promise<Prompt>;
};
//# sourceMappingURL=prompt.service.d.ts.map