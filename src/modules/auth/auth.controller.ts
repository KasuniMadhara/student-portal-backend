import { Request, Response } from 'express';
import {
  getAllUsers,
  loginUser,
  registerUser
} from './auth.service';
import { success } from 'zod';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: user
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Registration failed',
      error
    });

  }
};

export const login = async (req: Request, res: Response) => {

  try{
    const user = await loginUser(req.body);

    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      data: user
    });

  }catch(error) {
    res.status(401).json({
      success: false,
      message: 'Login failed',
      error
    });

  }
};

export const getUsers = async (
  req: Request,
  res: Response
) => {

  try {

    const users = await getAllUsers();

    res.status(200).json({
      success: true,
      data: users
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Failed to get users'
    });

  }
};