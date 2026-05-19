import { Request, Response } from 'express';
import { registerUser } from './auth.service';

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