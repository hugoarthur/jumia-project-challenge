const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    country: { type: String },
    parcel_weight: { type: Number, required: true }
});

const model = mongoose.model('OrderModel', OrderSchema);

module.exports = model;
