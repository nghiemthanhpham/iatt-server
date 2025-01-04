const database = require('~/database/connection');

async function find(query) {
  return database.productCol().find(query).toArray();
}
async function insertOne(data) {
  return database.productCol().insertOne({
    ...data,
    created_at: new Date(),
  });
}

async function findOne(query) {
  return database.productCol().findOne(query);
}

async function updateOne(query, data) {
  return database.productCol().updateOne(query, { $set: data });
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
    .productCol()
    .find(query, { projection })
    .sort(sort)
    .skip(skip)
    .limit(parsedPageSize)
    .toArray();
}

async function countDocument(query) {
  return await database.productCol().count(query);
}

module.exports = {
  find,
  insertOne,
  findOne,
  updateOne,
  findproductWithPagination,
  countDocument,
};
