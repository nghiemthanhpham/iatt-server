const { orderModel } = require('~/model');
const { ObjectId } = require("mongodb");

async function getAllOrders() {
  return orderModel.find({});
}

async function updateOrder(id, data) {
  return orderModel.updateOne({ _id: new ObjectId(id) }, data);
}

async function createOrder(data) {
  return await orderModel.insertOne(data);
}

module.exports = {
  getAllOrders,
  createOrder,
  updateOrder,
};
