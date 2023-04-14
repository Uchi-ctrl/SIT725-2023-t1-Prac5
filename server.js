var express = require("express");
var app = express();
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://admin:<password>@cluster0.xgptdlo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
let dbCollection;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cardList = [
  {
    title: "Kitten 2",
    image: "images/pexels-pixabay-45201.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "images/pexels-pixabay-416160.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3",
  },
];

app.get("/api/cats", (req, res) => {
  res.json({ statusCode: 200, data: cardList, message: "Success" });
});

function dbConnection(collectionName) {
  client.connect((err) => {
    dbCollection = client.db().collection(collectionName);
    if (!err) {
      console.log("DB Connected");
      console.log(dbCollection);
    } else {
      console.error(err);
    }
  });
}

var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
  dbConnection("Cats");
});