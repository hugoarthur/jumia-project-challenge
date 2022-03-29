const mongoose = require('mongoose');
const OrderModel = require('../models/orders');
const { getCountryByPhoneNumber } = require('../../helper/country-helper');

const create = async (orders) => {
    try {
        if (Array.isArray(orders)) {
            for (let i = 0; i < orders.length; i++) {
                setCountry(orders[i]);
            }
        } else if (typeof orders === 'object') {
            setCountry(orders);
        }
        const res = await OrderModel.create(orders);
        console.log(res);
        return res;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const deleteMany = async (orders) => {
    try {
        const res = await OrderModel.deleteMany(orders);
        console.log(res);
        return res;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getCargoManifest = async () => {
    // TODO Select from database
    /**
     * group by country and limit to weight sum to be 500kg
     */
    const orders = await OrderModel.aggregate([
        {
            $group: {
                _id: {
                    id: '$id',
                    country: 'country'
                },
                total: { sum: '$parcel_weight' }
            }
        },
        {
            $match: { total: { $lt: 500 } }
        }
    ]);

    return orders;
}

module.exports = {
    create,
    deleteMany,
    getCargoManifest
}

function setCountry(order) {
    const country = getCountryByPhoneNumber(order['phone_number']);
    order['country'] = country;
}