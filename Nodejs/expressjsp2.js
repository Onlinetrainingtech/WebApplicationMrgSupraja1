const e1=require('express')
const app=e1()
const PORT=3000
app.get("/view",(req,res)=>{
    res.send("Hello World")
})
app.listen(PORT,(error)=>{
    if(!error) console.log(`Server is running on port ${PORT}`)
    else console.log(`Error occured while starting the server:${error}`)
})