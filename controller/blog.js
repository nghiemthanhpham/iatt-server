const { blogService } = require("~/service");

async function getAllBlogs(request, reply) {
  try {
    const data = await blogService.getAllBlogs()
    return reply.status(200).send({ data: data, message: 'Successfully' });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

async function getBlogByID(request, reply) {
  try {
    return reply.status(200).send({ message: 'Successfully' });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

async function createBlog(request, reply) {
  try {
    const body = request.body
    await blogService.createBlog(body)
    return reply.status(200).send({ message: 'Successfully' });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

async function updateBlog(request, reply) {
  try {
    const body = request.body
    const id = request.params.id;
    await blogService.updateBlog(id, body)
    return reply.status(200).send({ message: 'Successfully' });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

async function deleteBlog(request, reply) {
  try {
    const id = request.params.id;
    await blogService.deleteBlog(id)
    return reply.status(200).send({ message: 'Successfully' });
  } catch (err) {
    console.log(err);
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

module.exports = {
  getAllBlogs,
  getBlogByID,
  createBlog,
  updateBlog,
  deleteBlog,
};
