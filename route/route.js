var express = require("express");
let router = express.Router();

router.get("/api/cats", (req, res) => {
  //getAllCats((err, result) => {
  //if (err) {
  //res.json({statusCode:400, message: err});
  //} else {
  //res.json({statusCode:200, data: result, message: "Successfull"});
  //}
  //});
});

router.post("/api/cats", (req, res) => {
  //let cat = req.body;
  //console.log(cat);
  //insert(cat, (err, result) => {
  //if (err) {
  //res.json({ statusCode: 400, message: err });
  //} else {
  //res.json({statusCode: 200, data: result, message: "Cat Successfully Added"});
  //}
  //});
});

module.exports = router;
