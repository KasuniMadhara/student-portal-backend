import { Request, Response } from 'express';
import {
  deleteUser,
  updateUser,
  getSingleUser,
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

export const getUser = async (
  req: Request,
  res: Response
) => {

  try {

    const { id } = req.params;

    const user = await getSingleUser(id as string);

    res.status(200).json({
      success: true,
      data: user
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Failed to get user'
    });

  }
};

export const updateSingleUser = async (
  req: Request,
  res: Response
) => {

  try {

    const { id } = req.params;

    const updatedUser = await updateUser(
      id as string,
      req.body
    );

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: updatedUser
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Failed to update user'
    });

  }
};

export const deleteSingleUser = async (
  req: Request,
  res: Response
) => {

  try {

    const { id } = req.params;

    const deletedUser = await deleteUser(
      id as string,
    );

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: deletedUser
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Failed to delete user'
    });

  }
};