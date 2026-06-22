const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static("public"));

let students = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/register", (req, res) => {

  const {

    name,

    email,

    phone,

    course,

    gender

  } = req.body;

  if (

    !name ||

    !email ||

    !phone ||

    !course ||

    !gender

  ) {

    return res.status(400).json({

      message: "Fill all fields"

    });

  }

  students.push({

    name,

    email,

    phone,

    course,

    gender

  });

  res.json({

    message: "Student Registered"

  });

});

app.listen(3000, () => {

  console.log(

    "Server Running on Port 3000"

  );

});