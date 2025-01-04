const { blogModel } = require('~/model');
const { ObjectId } = require("mongodb");

async function getAllBlogs() {
  return blogModel.find({});
}

async function getBlogById(id) {
  return blogModel.findOne({ _id: new ObjectId(id) });
}

async function updateBlog(id, data) {
  return blogModel.updateOne({ _id: new ObjectId(id) }, data);
}

async function createBlog(data) {
  return await blogModel.insertOne(data);
}

async function deleteBlog(_id) {
  const dataUpdate = {
    deleted_at: new Date(),
  };
  return blogModel.updateOne({ _id: new ObjectId(_id) }, dataUpdate);
}

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
};
