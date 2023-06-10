let client = require("../dbConnection");
let collection = client.db("test").collection("Cats");

const insertCat = (cat, callback) => {
  Collection.insertOne(cat, callback);
};

const getAllCats = (callback) => {
  Collection.find().toArray(callback);
};

module.exports = { insertCat, getAllCats };
