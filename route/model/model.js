let client = require("../dbConnection");
let collection = client.db("test").collection("Cats");

function insertCat(cat, callback) {
  Collection.insertOne(cat, callback);
}

function getAllCats(callback) {
  Collection.find().toArray(callback);
}

module.exports = { insertCat, getAllCats };
