const express=require("express");

const cors=require("cors");

const app=express();

app.use(cors());

app.use(express.json());

app.use(express.static(__dirname));

let students=[];

app.get("/students",(req,res)=>{

res.json(students);

});

app.post("/students",(req,res)=>{

students.push(req.body);

res.json({

message:"Student Added"

});

});

app.delete("/students/:id",(req,res)=>{

students.splice(req.params.id,1);

res.json({

message:"Deleted"

});

});

app.listen(3000,()=>{

console.log("Server Running");

});