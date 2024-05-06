const express=require('express')
const app=express()
app.use(express.json());
app.post("/",(req,res)=>{
  const {name}=req.body;
  res.send(`Welcome ${name}`)
}).listen(3000)
console.log("Server is Running..")