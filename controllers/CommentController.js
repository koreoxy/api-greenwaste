import { errorHandler } from '../utils/error.js';

import Comment from '../models/CommentModel.js';

// GET ALL COMMENT
export const getComment = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET COMMENT BY ID
export const getCommentUser = async (req, res, next) => {
  try {
    const comments = await Comment.find({ questionRef: req.params.id });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

// CREATED NEW COMMENTS
export const createComment = async (req, res, next) => {
  try {
    const comments = await Comment.create(req.body);
    return res.status(201).json(comments);
  } catch (error) {
    next(error);
  }
};
