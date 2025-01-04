const { accountService } = require("~/service");

async function getAllAccounts(request, reply) {
  try {
    const data = await accountService.getAllAccounts()
    return reply.status(200).send({ data: data, message: 'Successfully' });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

async function updateAccount(request, reply) {
  try {
    const body = request.body
    const id = request.params.id;
    await accountService.updateProfileById(id, body)
    return reply.status(200).send({ message: 'Successfully' });
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}

module.exports = {
  getAllAccounts,
  updateAccount,
};
