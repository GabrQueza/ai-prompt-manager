"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prompt_controller_1 = require("../controllers/prompt.controller");
const router = (0, express_1.Router)();
router.get('/', prompt_controller_1.promptController.getPrompts);
router.post('/', prompt_controller_1.promptController.createPrompt);
router.get('/:id', prompt_controller_1.promptController.getPromptById);
router.put('/:id', prompt_controller_1.promptController.updatePrompt);
router.delete('/:id', prompt_controller_1.promptController.deletePrompt);
exports.default = router;
//# sourceMappingURL=prompt.routes.js.map