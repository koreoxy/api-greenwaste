import Question from '../models/QuestionModel.js';
import User from '../models/UserModel.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';

// GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER BY ID
export const getUserById = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// CREATED NEW USER
export const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const createuser = await user.save();
    res.status(201).json(createuser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATED USER
export const updatedUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only update you own account'));

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

//DELETED USER
export const deletedUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only delete your own account'));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie('access_token');
    res.status(200).json('User has been deleted');
  } catch (error) {
    next(error);
  }
};

export const getUserQuestion = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const question = await Question.find({ userRef: req.params.id });
      res.status(200).json(question);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, 'You can only view your own question!'));
  }
};
