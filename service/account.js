const { accountModel } = require('~/model');

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
  return accountModel.updateOne({ _id: id }, data);
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
