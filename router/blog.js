const { blogController } = require('~/controller');

function blogRoute(fastify, options, done) {
    fastify.get('/get-all', blogController.getAllBlogs);
    fastify.get('/:id', blogController.getBlogByID);
    fastify.post('/create', blogController.createBlog);
    fastify.put('/update/:id', blogController.updateBlog);
    fastify.delete('/delete/:id', blogController.deleteBlog);
    done();
}

module.exports = blogRoute;
