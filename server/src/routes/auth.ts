import express from 'express';
import { register, login } from '../controllers/authController';

const router = express.Router();

// Use consistent paths for the API routes
router.post('/register', register);
router.post('/login', login);

export default router;
