const axios = require('axios');

const ORDER_API_BASE_URL = process.env.ORDER_API_BASE_URL || 'http://localhost:3001/service-b';

const request = axios.create({
    baseURL: ORDER_API_BASE_URL
});

const createOrder = async(order) => {
    try {
        const url = '/api/orders';
        const result = await request.post(url, order);

        return result.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createOrder
}
