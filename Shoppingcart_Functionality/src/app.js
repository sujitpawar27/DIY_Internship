const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/api/cart', cartRoutes);
app.use('/api', orderRoutes);

// Endpoint to create a payment intent
const stripe = Stripe('your-secret-key-here'); // Replace with your Stripe secret key

app.post('/create-payment-intent', async (req, res) => {
    try {
        const { amount, currency } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });

        res.status(200).send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});