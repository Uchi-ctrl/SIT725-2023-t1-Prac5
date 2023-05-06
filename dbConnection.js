const { MongoClient } = require("mongodb");
var uri =
  "mongodb+srv://admin:admin@cluster0.xgptdlo.mongodb.net/?retryWrites=true&w=majority";
var client = new MongoClient(uri);

client.connect((err) => {
  if (!err) {
    console.log("DB Connected");
  } else {
    console.error(err);
  }
});
