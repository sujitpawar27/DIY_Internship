const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./Shoppingcart_Functionality/src/routes/orderRoutes');

const app = express();
app.use(express.json());

app.use('/api', orderRoutes);

module.exports = app;
