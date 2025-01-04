const { productModel } = require('~/model');
const { ObjectId } = require("mongodb");

async function getAllProducts() {
  return productModel.find({});
}

async function getProductById(id) {
  return productModel.findOne({ _id: new ObjectId(id) });
}

async function updateProduct(id, data) {
  return productModel.updateOne({ _id: new ObjectId(id) }, data);
}

async function createProduct(data) {
  return await productModel.insertOne(data);
}

async function deleteProduct(_id) {
  const dataUpdate = {
    deleted_at: new Date(),
  };
  return productModel.updateOne({ _id: new ObjectId(_id) }, dataUpdate);
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
