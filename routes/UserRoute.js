import express from 'express';
import {
  createUser,
  deletedUser,
  getUserById,
  getUserQuestion,
  getUsers,
  updatedUser,
} from '../controllers/UserController.js';
import { verifyToken } from '../utils/verifyUser.js';
import { isAdmin } from '../controllers/AuthController.js';

const router = express.Router();

router.get('/users', verifyToken, isAdmin, getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', verifyToken, updatedUser);
router.delete('/users/:id', verifyToken, deletedUser);
router.get('/users/question/:id', verifyToken, getUserQuestion);

export default router;
