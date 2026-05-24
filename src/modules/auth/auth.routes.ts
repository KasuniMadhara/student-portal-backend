import express from 'express';
import { login,register } from './auth.controller';
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
            message: 'User profile accessed',
            user: req.user
        });
    }
)

export default router;