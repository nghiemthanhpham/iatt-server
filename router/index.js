const productRoute = require('./product');
const blogRoute = require('./blog');

async function routes(fastify) {
  fastify.register(productRoute, { prefix: '/product' });
  fastify.register(blogRoute, { prefix: '/blog' });
}

module.exports = routes;
