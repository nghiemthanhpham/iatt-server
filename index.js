require('dotenv').config();
const path = require('path');
const moduleAlias = require('module-alias');
const fastify = require('fastify')({ logger: true });
const fastifyCors = require('@fastify/cors');
const fastifyCookie = require('@fastify/cookie');
const fastifyStatic = require('@fastify/static');

moduleAlias({ base: path.resolve(__dirname, '.') });

const database = require('~/database/connection');
const router = require('~/router/index');

const PORT = process.env.PORT || 8000;

database.connection(async () => {
  try {
    await fastify.register(fastifyCors, {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      credentials: true,
    });
    await fastify.register(fastifyCookie);
    await fastify.register(fastifyStatic, {
      root: path.join(__dirname, 'website'),
    });
    await fastify.register(require('@fastify/formbody'), { bodyLimit: 0 });
    await fastify.register(require('@fastify/multipart'), {
      limits: {
        fieldSize: 5 * 1024 * 1024,
        fileSize: 5 * 1024 * 1024,
        files: 10,
      },
    });
    fastify.register(router, { prefix: '/api/v1' });
    fastify.listen({ host: '0.0.0.0', port: PORT });
    fastify.log.info(`App is listening at port ${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
