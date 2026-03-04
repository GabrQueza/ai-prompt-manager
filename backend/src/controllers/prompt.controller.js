"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptController = void 0;
const prompt_service_1 = require("../services/prompt.service");
exports.promptController = {
    getPrompts: async (req, res) => {
        try {
            const prompts = await prompt_service_1.promptService.getAllPrompts();
            res.json(prompts);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch prompts' });
        }
    },
    getPromptById: async (req, res) => {
        try {
            const id = req.params.id;
            const prompt = await prompt_service_1.promptService.getPromptById(id);
            if (!prompt) {
                res.status(404).json({ error: 'Prompt not found' });
                return;
            }
            res.json(prompt);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch prompt' });
        }
    },
    createPrompt: async (req, res) => {
        const { title, content, category } = req.body;
        try {
            const newPrompt = await prompt_service_1.promptService.createPrompt({ title, content, category });
            res.status(201).json(newPrompt);
        }
        catch (error) {
            res.status(400).json({ error: 'Failed to create prompt' });
        }
    },
    updatePrompt: async (req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            const updatedPrompt = await prompt_service_1.promptService.updatePrompt(id, data);
            res.json(updatedPrompt);
        }
        catch (error) {
            res.status(400).json({ error: 'Failed to update prompt. It may not exist.' });
        }
    },
    deletePrompt: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedPrompt = await prompt_service_1.promptService.deletePrompt(id);
            res.json(deletedPrompt);
        }
        catch (error) {
            res.status(400).json({ error: 'Failed to delete prompt. It may not exist.' });
        }
    }
};
//# sourceMappingURL=prompt.controller.js.map