import express from 'express';
import { getProfile, updateProfile, getUsers, getUserById } from '../controllers/userController';
import authMiddleware from '../middlewares/authMiddleware';
const router = express.Router();

router.get('/profile', authMiddleware, getProfile);
router.put('/profile/edit', authMiddleware, updateProfile);
router.get('/users/:email', getUsers);
router.get('/users/:id', getUserById);

export default router;
