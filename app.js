const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.get("/pullRequests", function (req, res) {
  res.render("pages/pullRequests");
});

app.listen(3000, function () {
  console.log("our first app is up and running");
});
