import Question from '../models/QuestionModel.js';
import User from '../models/UserModel.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';

// CREATED NEW USER
export const NewUser = async (req, res, next) => {
  const { username, email, password, role } = req.body;

  //HASH PASSWORD
  const hashedPassword = bcryptjs.hashSync(password, 10);

  // CREATE NEW USER
  const newUser = new User({ username, email, password: hashedPassword, role });

  try {
    //SAVE NEW USER TO DATABASE
    await newUser.save();
    res.status(201).json('User created succesfully');
  } catch (error) {
    // next(errorHandler(550, 'error from the function'));
    next(error);
  }
};

//DELETED USER
export const removeUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted');
  } catch (error) {
    next(error);
  }
};

// UPDATED USER
export const updatedUserByAdmin = async (req, res, next) => {
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

// GET ALL QUESTION
export const getAllQuestion = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATED QUESTION
export const updatedQuestionByAdmin = async (req, res, next) => {
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

//REMOVE QUESTION
export const removeQuestion = async (req, res, next) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.status(200).json('Question has been deleted');
  } catch (error) {
    next(error);
  }
};
