import { Router } from 'express';
import { promptController } from '../controllers/prompt.controller';

const router = Router();

router.get('/', promptController.getPrompts);
router.post('/', promptController.createPrompt);
router.get('/:id', promptController.getPromptById);
router.put('/:id', promptController.updatePrompt);
router.delete('/:id', promptController.deletePrompt);

export default router;

