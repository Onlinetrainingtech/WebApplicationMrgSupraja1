const express=require('express')
const app=express()

app.use(express.raw())

app.post("/",function(req,res){
    console.log("Received POST request")
    let data = req.body;
    console.log(data)
}).listen(3000)
console.log("Server is Runnning..")