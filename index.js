require('dotenv').config();


const express=require("express");
const app=express();

const port=8080;

app.listen(process.env.PORT,()=>
{
    console.log(`your code will run on ${port}`);
})

app.get("/",(req,res)=>
{
    res.send("hello world");
})