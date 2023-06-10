let expect = require("chai").expect;
let request = require("request");
let url = "http://localhost:3000/api/cats";
let cat = {
  title: "title-test-live1",
  link: "title-test-live1",
  path: "title-test-live1",
  description: "title-test-live1",
};

describe("test get all cats", function () {
  it("return status code of 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statuscode).to.equal(200);
      done();
    });
  });

  it("return successful message", function (done) {
    request(url, function (error, response, body) {
      console.log(body);
      body = JSON.parse(body);
      expect(body.message).to.contain("success");
      done();
    });
  });

  it("returns an array", function (done) {
    request(url, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.data).to.be.a("array");
      done();
    });
  });
});

describe("test post a cat", function () {
  it("insert a cat to database", function (done) {
    request.post({ url: url, form: cat }, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.message).to.contain("added");
      done();
    });
  });
});
