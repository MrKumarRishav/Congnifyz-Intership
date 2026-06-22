const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

let username = "";

app.get("/", (req, res) => {

res.render("index", { username });

});

app.post("/submit", (req, res) => {

username = req.body.name;

res.render("index", { username });

});

app.listen(3000, () => {

console.log("Server Running");

});