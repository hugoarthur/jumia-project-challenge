const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '.env') });

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const mongoose = require('mongoose');
mongoose.connect(MONGO_HOST)
    .then(()=>console.log('mongo connected'))
    .catch(e=>console.error(e));

const orderRoutes = require('./app/routes/orders');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use('/service-b/api', orderRoutes);

app.listen(PORT, () => {
    console.log(`Service A running in the ${PORT}`);
});
