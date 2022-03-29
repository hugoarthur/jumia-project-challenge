
const service = require('../services/orders');

const listOrders = (req, res) => {

}

const getOrder = (req, res) => {
    
}

const createOrder = async (req, res) => {
    console.log('Creating order...');
    const order = await service.create(req.body);
    res.status(201).send(order);
}

const getCargoManifest = async (req, res) => {
    res.status(200).send(await service.getCargoManifest());
}

module.exports = {
    createOrder,
    getCargoManifest
}
