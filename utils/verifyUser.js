import User from '../models/UserModel.js';
import { errorHandler } from './error.js';
import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, 'Unauthorized'));

  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_KEY);
  //   req.user = await User.findById(decoded._id);
  //   next();
  // } catch (error) {
  //   return next(errorHandler(401, 'You must login'));
  // }
  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) return next(errorHandler(403, 'Forbidden'));

    req.user = user;
    next();
  });
};
