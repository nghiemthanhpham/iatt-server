const { orderController } = require('~/controller');

function orderRoute(fastify, options, done) {
    fastify.get('/get-all', orderController.getAllOrders);
    fastify.post('/create', orderController.createOrder);
    fastify.put('/update/:id', orderController.updateOrder);
    done();
}

module.exports = orderRoute;
