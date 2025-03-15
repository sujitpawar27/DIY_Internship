const express = require('express');
const CartController = require('../controllers/cartController');

const router = express.Router();
const cartController = new CartController();

router.post('/cart/items', cartController.addItem.bind(cartController));
router.get('/cart', cartController.viewCart.bind(cartController));
router.put('/cart/items/:id', cartController.updateItem.bind(cartController));
router.delete('/cart/items/:id', cartController.removeItem.bind(cartController));

module.exports = router;