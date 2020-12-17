import express from 'express'
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js'
const router = express.Router()

// @desc  Feth All Products
// @route  GET /api/products
// @access  Public
router.get('/', getProducts)

// @desc  Feth single Products
// @route  GET /api/products/:id
// @access  Public
router.get('/:id', getProductById)

export default router
