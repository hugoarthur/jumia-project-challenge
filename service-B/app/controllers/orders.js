
const service = require('../services/orders');

const listOrders = (req, res) => {

}

const getOrder = (req, res) => {
    
}

const createOrder = async (req, res) => {
    console.log('Creating order...');
    const order = await service.createOrder(req.body);
    res.status(201).send(order);
}

module.exports = {
    createOrder
}
