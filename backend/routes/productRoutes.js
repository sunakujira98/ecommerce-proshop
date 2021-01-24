import express from 'express'
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProductById)
router.delete('/:id', protect, admin, deleteProduct)
router.post('/', protect, admin, createProduct)
router.put('/:id', protect, admin, updateProduct)
router.post('/:id/reviews', protect, createProductReview)

export default router
