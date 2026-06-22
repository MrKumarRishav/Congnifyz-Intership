const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

let users = [];

app.get("/", (req, res) => {

res.render("index", {

users

});

});

app.post("/register", (req, res) => {

const {

name,

email,

phone

} = req.body;

if (

!name ||

!email ||

!phone

) {

return res.send(

"All fields are required"

);

}

users.push({

name,

email,

phone

});

res.redirect("/");

});

app.listen(3000, () => {

console.log(

"Server Running on Port 3000"

);

});