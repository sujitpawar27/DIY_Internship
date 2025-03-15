const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Record a new order
router.post('/orders', async (req, res) => {
    try {
        const { userId, items, totalAmount, status } = req.body;
        const order = new Order({ userId, items, totalAmount, status });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Retrieve order history with pagination and filtering
router.get('/orders', async (req, res) => {
    try {
        const { userId, page = 1, limit = 10, status } = req.query;
        const filter = { userId };
        if (status) filter.status = status;

        const orders = await Order.find(filter)
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .sort({ createdAt: -1 });

        const totalOrders = await Order.countDocuments(filter);

        res.json({
            orders,
            totalOrders,
            totalPages: Math.ceil(totalOrders / limit),
            currentPage: parseInt(page)
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
