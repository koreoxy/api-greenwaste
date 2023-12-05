import Question from '../models/QuestionModel.js';
import { errorHandler } from '../utils/error.js';

// GET ALL QUESTION
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET QUESTION BY ID
export const getQuestionById = async (req, res, next) => {
  try {
    const questions = await Question.findById(req.params.id);
    if (!questions) {
      return next(errorHandler(404, 'Question not found'));
    }
    res.status(200).json(questions);
  } catch (error) {
    next(error);
  }
};

// CREATED NEW QUESTION
export const createQuestion = async (req, res, next) => {
  try {
    const question = await Question.create(req.body);
    return res.status(201).json(question);
  } catch (error) {
    next(error);
  }
};

// UPDATED QUESTION
export const updatedQuestion = async (req, res, next) => {
  const question = await Question.findById(req.params.id);
  if (!question) {
    return next(errorHandler(404, 'Question not found'));
  }

  if (req.user.id !== question.userRef) {
    return next(errorHandler(401, 'You can only update your own Question'));
  }

  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedQuestion);
  } catch (error) {
    next(error);
  }
};

//DELETED QUESTION
export const deletedQuestion = async (req, res, next) => {
  const question = await Question.findById(req.params.id);
  if (!question) {
    return next(errorHandler(404, 'Question not found'));
  }

  if (req.user.id !== question.userRef) {
    return next(errorHandler(401, 'You can only delete your own question'));
  }

  try {
    await Question.findByIdAndDelete(req.params.id);
    res.status(200).json('Question has been deleted');
  } catch (error) {
    next(error);
  }
};
