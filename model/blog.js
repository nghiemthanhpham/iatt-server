const database = require('~/database/connection');

async function find(query) {
  return database.blogCol().find(query).toArray();
}
async function insertOne(data) {
  return database.blogCol().insertOne({
    ...data,
    created_at: new Date(),
  });
}

async function findOne(query) {
  return database.blogCol().findOne(query);
}

async function updateOne(query, data) {
  return database.blogCol().updateOne(query, { $set: data });
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
    .blogCol()
    .find(query, { projection })
    .sort(sort)
    .skip(skip)
    .limit(parsedPageSize)
    .toArray();
}

async function countDocument(query) {
  return await database.blogCol().count(query);
}

module.exports = {
  find,
  insertOne,
  findOne,
  updateOne,
  findproductWithPagination,
  countDocument,
};
