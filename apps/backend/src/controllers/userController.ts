import { NextFunction, Request, RequestHandler, Response } from 'express';
import { findUserById, createUser } from '../models/userModel';
import { BadRequest } from '../middleware/errorHandler';

export const registerUser: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, email, given_name, picture, posts, friends } = req.body;

    if (!id || !email) {
      throw BadRequest('ID and Email are required');
    }

    const userExists = findUserById(id);

    // Check if user exists
    if (userExists) {
      throw BadRequest('User already exists');
    }

    // Create user
    createUser({ id, email, given_name, picture, posts, friends });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    next(error);
  }
};
