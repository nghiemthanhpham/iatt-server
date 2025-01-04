const database = require('~/database/connection');

async function find(query) {
  return database.accountCol().find(query).toArray();
}
async function insertOne(data) {
  return database.accountCol().insertOne({
    ...data,
    created_at: new Date(),
  });
}

async function findOne(query) {
  return database.accountCol().findOne(query);
}

async function updateOne(query, data) {
  return database.accountCol().updateOne(query, { $set: data });
}

async function findproductWithPagination(
  query,
  paginate,
  { projection = { password: 0 } } = {}
) {
  const {
    sort = { created_at: -1 },
    skip = 0,
    parsedPageSize = 10,
  } = paginate;
  return await database
    .accountCol()
    .find(query, { projection })
    .sort(sort)
    .skip(skip)
    .limit(parsedPageSize)
    .toArray();
}

async function countDocument(query) {
  return await database.accountCol().count(query);
}

module.exports = {
  find,
  insertOne,
  findOne,
  updateOne,
  findproductWithPagination,
  countDocument,
};
