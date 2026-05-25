import express from 'express';
import {getUsers, login, register } from './auth.controller';
import auth from '../../middlewares/auth.middleware';

const router = express.Router();

router.get('/users', auth, getUsers);

router.post('/register', register);

router.post('/login', login);

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