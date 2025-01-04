const { productService } = require("~/service");

async function getAllProducts(request, reply) {
  try {
    const data = await productService.getAllProducts()
    return reply.status(200).send({ data: data, message: 'Successfully' });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

async function getProductByID(request, reply) {
  try {
    return reply.status(200).send({ message: 'Successfully' });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

async function createProduct(request, reply) {
  try {
    const body = request.body
    await productService.createProduct(body)
    return reply.status(200).send({ message: 'Successfully' });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

async function updateProduct(request, reply) {
  try {
    const body = request.body
    const id = request.params.id;
    await productService.updateProduct(id, body)
    return reply.status(200).send({ message: 'Successfully' });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

async function deleteProduct(request, reply) {
  try {
    const id = request.params.id;
    await productService.deleteProduct(id)
    return reply.status(200).send({ message: 'Successfully' });
  } catch (err) {
    console.log(err);
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

module.exports = {
  getAllProducts,
  getProductByID,
  createProduct,
  updateProduct,
  deleteProduct,
};
