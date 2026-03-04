import { type Request, type Response } from 'express';
import { promptService, type CreatePromptDto, type UpdatePromptDto } from '../services/prompt.service';

export const promptController = {
  getPrompts: async (req: Request, res: Response) => {
    try {
      const prompts = await promptService.getAllPrompts();
      res.json(prompts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch prompts' });
    }
  },

  getPromptById: async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id as string;
      const prompt = await promptService.getPromptById(id);
      
      if (!prompt) {
        res.status(404).json({ error: 'Prompt not found' });
        return;
      }
      
      res.json(prompt);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch prompt' });
    }
  },

  createPrompt: async (req: Request, res: Response) => {
    const { title, content, category } = req.body as CreatePromptDto;
    try {
      const newPrompt = await promptService.createPrompt({ title, content, category });
      res.status(201).json(newPrompt);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create prompt' });
    }
  },

  updatePrompt: async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id as string;
      const data = req.body as UpdatePromptDto;
      
      const updatedPrompt = await promptService.updatePrompt(id, data);
      res.json(updatedPrompt);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update prompt. It may not exist.' });
    }
  },

  deletePrompt: async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id as string;
      const deletedPrompt = await promptService.deletePrompt(id);
      res.json(deletedPrompt);
    } catch (error) {
      res.status(400).json({ error: 'Failed to delete prompt. It may not exist.' });
    }
  }
};

