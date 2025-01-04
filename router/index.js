const authRoute = require('./auth');
const accountRoute = require('./account');
const productRoute = require('./product');
const blogRoute = require('./blog');
const orderRoute = require('./order');

async function routes(fastify) {
  fastify.register(authRoute, { prefix: '/auth' });
  fastify.register(accountRoute, { prefix: '/account' });
  fastify.register(productRoute, { prefix: '/product' });
  fastify.register(blogRoute, { prefix: '/blog' });
  fastify.register(orderRoute, { prefix: '/order' });
}

module.exports = routes;
