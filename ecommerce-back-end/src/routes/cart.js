const express = require('express');
const router = express.Router();
const { userMiddleware, requireSignin } = require('../common-middleware');
const { addItemToCart } = require('../controller/cart');

router.post('/user/cart/add-to-cart', requireSignin, userMiddleware, addItemToCart)

module.exports = router;