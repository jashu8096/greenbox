const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')
const Product = require('../models/PProduct')

router.post('/add-product',productController.createProduct)
router.get('/allproducts',productController.getProducts)

module.exports =router