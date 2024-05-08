const express=require('express')
const app=express()
const PORT=3000

//Multiple Routing

const r1=express.Router();
const r2=express.Router();
const r3=express.Router();

r1.get('/',(req,res)=>{
    res.send("Hello from Router 1")
})

r2.get("/",(req,res)=>{
    res.send("Hello From Router 2")
});

 r3.use((req,res,next)=> {
     console.log("Middleware for Router 3");
     next();
 });
 r3.get("/",(req,res)=>{
     res.send("Hello World from Router 3")
 })

app.use("/r1",r1)
app.use("/r2",r2)
app.use("/r3",r3);

 app.listen(PORT, ()=>{
     console.log(`Server is running on port ${PORT}`)
 })

 