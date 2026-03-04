import { type Request, type Response } from 'express';
export declare const promptController: {
    getPrompts: (req: Request, res: Response) => Promise<void>;
    getPromptById: (req: Request, res: Response) => Promise<void>;
    createPrompt: (req: Request, res: Response) => Promise<void>;
    updatePrompt: (req: Request, res: Response) => Promise<void>;
    deletePrompt: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=prompt.controller.d.ts.map