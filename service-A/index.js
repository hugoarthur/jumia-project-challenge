const express = require('express');
const bb = require('express-busboy');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '.env') });

const fileRoutes = require('./app/routes/file');

const PORT = process.env.PORT || 3000;

const app = express();
bb.extend(app, { upload: true });

app.use(fileRoutes);

app.listen(PORT, () => {
    console.log(`Service A running in the ${PORT}`);
});
