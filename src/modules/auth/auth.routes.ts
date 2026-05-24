import express from 'express';
import { login, register } from './auth.controller';
import auth from '../../middlewares/auth.middleware';

const router = express.Router();

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