import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { isAdmin } from '../controllers/AuthController.js';
import {
  NewUser,
  getAllQuestion,
  removeQuestion,
  removeUser,
  updatedQuestionByAdmin,
  updatedUserByAdmin,
} from '../controllers/IsAdminController.js';

const router = express.Router();

router.post('/admin/users', verifyToken, isAdmin, NewUser);
router.delete('/admin/users/:id', verifyToken, isAdmin, removeUser);
router.patch('/admin/users/:id', verifyToken, isAdmin, updatedUserByAdmin);

// ROUTE ADMIN QUESTION
router.get('/admin/questions', verifyToken, isAdmin, getAllQuestion);
router.patch(
  '/admin/questions/:id',
  verifyToken,
  isAdmin,
  updatedQuestionByAdmin
);
router.delete('/admin/questions/:id', verifyToken, isAdmin, removeQuestion);

export default router;
