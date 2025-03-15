const express = require('express');
const router = express.Router();
const db = require('../db'); // Assuming a database module is used

// ...existing code...

// Optimized query for fetching cart items
router.get('/cart', async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user ID is available in the request
        const cartItems = await db.query(
            'SELECT product_id, quantity, price FROM cart WHERE user_id = $1',
            [userId]
        );
        res.json(cartItems.rows);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).send('Internal Server Error');
    }
});

// ...existing code...
