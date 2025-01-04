const { accountController } = require('~/controller');

function accountRoute(fastify, options, done) {
    fastify.get('/get-all', accountController.getAllAccounts);
    fastify.put('/update/:id', accountController.updateAccount);
    done();
}

module.exports = accountRoute;
