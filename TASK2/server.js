const express=require("express");

const path=require("path");

const app=express();

app.use(express.json());

let students=[];

app.get("/",(req,res)=>{

res.sendFile(

path.join(__dirname,"index.html")

);

});

app.post("/submit",(req,res)=>{

const {name,email,mobile,age}

=req.body;

if(

!name ||

!email ||

mobile.length!==10 ||

age<18

){

return res.json({

message:"Invalid Data"

});

}

students.push({

name,

email,

mobile,

age

});

res.json({

message:"Data Saved Successfully"

});

});

app.listen(3000,()=>{

console.log("Server Running");

});