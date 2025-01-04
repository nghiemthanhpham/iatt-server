const { productController } = require('~/controller');

function productRoute(fastify, options, done) {
    fastify.get('/get-all', productController.getAllProducts);
    fastify.get('/:id', productController.getProductByID);
    fastify.post('/create', productController.createProduct);
    fastify.put('/update/:id', productController.updateProduct);
    fastify.delete('/delete/:id', productController.deleteProduct);
    done();
}

module.exports = productRoute;
