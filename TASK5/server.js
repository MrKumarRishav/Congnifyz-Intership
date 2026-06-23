const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

let students = [];

app.get("/api/students",

(req,res)=>{

res.json(students);

});

app.post("/api/students",

(req,res)=>{

students.push(req.body);

res.json({

message:"Added"

});

});

app.put("/api/students/:id",

(req,res)=>{

students[req.params.id]

= req.body;

res.json({

message:"Updated"

});

});

app.delete("/api/students/:id",

(req,res)=>{

students.splice(

req.params.id,

1

);

res.json({

message:"Deleted"

});

});

app.listen(

3000,

()=>{

console.log(

"Server Running"

);

});