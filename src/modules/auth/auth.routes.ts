import express from 'express';
import {updateSingleUser,getUser, getUsers, login, register } from './auth.controller';
import auth from '../../middlewares/auth.middleware';

const router = express.Router();

router.patch('/users/:id', auth, updateSingleUser); // Update user by ID (Protected Route)

router.get('/user/:id', auth,getUser); // Get single user by ID (Protected Route)

router.get('/users', auth, getUsers); // Get all users (Protected Route)

router.post('/register', register); // User registration route

router.post('/login', login); // User login route

router.get(
  '/profile',
  auth,
  (req, res) => {

    res.status(200).json({
      success: true,
      message: 'Protected Route Accessed',
      user: (req as any).user
    });

  }
);

export default router;