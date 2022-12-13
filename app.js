const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

//Template engine
app.set("view engine", "ejs");

app.use(express.static("public"));

//Routes
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/abilities", (req, res) => {
  res.render("abilities");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.post("/contact", (req, res) => {
  res.render("contact");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
