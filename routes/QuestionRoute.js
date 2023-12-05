import express from 'express';
import {
  createQuestion,
  deletedQuestion,
  getQuestionById,
  getQuestions,
  updatedQuestion,
} from '../controllers/QuestionController.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// ENDPOINT
router.get('/questions', getQuestions);
router.get('/questions/:id', getQuestionById);
router.post('/questions', verifyToken, createQuestion);
router.patch('/questions/:id', verifyToken, updatedQuestion);
router.delete('/questions/:id', verifyToken, deletedQuestion);

export default router;
