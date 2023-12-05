import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createComment,
  getComment,
  getCommentUser,
} from '../controllers/CommentController.js';

const router = express.Router();

// ENDPOINT COMMENT
router.get('/comments', getComment);
router.get('/comments/:id', getCommentUser);
router.post('/comments', verifyToken, createComment);

export default router;
