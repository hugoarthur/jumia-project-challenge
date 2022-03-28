const express = require('express');
const router = express.Router();

const controller = require('../controllers/orders');

// router.route('/orders').get(controller.listOrders);
// router.route('/orders/:id').get(controller.getOrder);
router.route('/orders').post(controller.createOrder);
// router.route('/orders/:id').delete(controller.deleteOrder);

module.exports = router;