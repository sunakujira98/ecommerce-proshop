import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/', protect, admin, getUsers)
router.post('/', registerUser)
router.post('/login', authUser)
router.get('/', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)

export default router
