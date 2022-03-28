const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const orderRoutes = require('./app/routes/orders');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use('/service-b/api', orderRoutes);

app.listen(PORT, () => {
    console.log(`Service A running in the ${PORT}`);
});
