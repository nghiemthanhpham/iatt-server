const { accountModel } = require('~/model');
const { ObjectId } = require("mongodb");

async function getAllAccounts() {
  return accountModel.find({});
}

async function getAccountByEmail(email) {
  return accountModel.findOne({ email });
}

async function getAccountById(id) {
  return accountModel.findOne({ _id: new ObjectId(id) });
}

async function updateProfileById(id, data) {
  console.log(id);
  console.log(data);
  return accountModel.updateOne({ _id: new ObjectId(id) }, data);
}

async function createAccount(data) {
  console.log(data);
  return await accountModel.insertOne(data);
}

module.exports = {
  getAccountByEmail,
  updateProfileById,
  createAccount,
  getAccountById,
  getAllAccounts,
};
