const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
dotenv.config();
app.use(express.json());
app.use('/api/products', productRoutes);
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(5000, () => console.log('Server running'));
});