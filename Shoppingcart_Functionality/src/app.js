const express = require('express');
const bodyParser = require('body-parser');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/api/cart', cartRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});