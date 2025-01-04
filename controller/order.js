const { orderService } = require("~/service");

async function getAllOrders(request, reply) {
  try {
    const data = await orderService.getAllOrders()
    return reply.status(200).send({ data: data, message: 'Successfully' });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

async function createOrder(request, reply) {
  try {
    const body = request.body
    await orderService.createOrder(body)
    return reply.status(200).send({ message: 'Successfully' });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

async function updateOrder(request, reply) {
  try {
    const body = request.body
    const id = request.params.id;
    await orderService.updateOrder(id, body)
    return reply.status(200).send({ message: 'Successfully' });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

module.exports = {
  getAllOrders,
  createOrder,
  updateOrder,
};
