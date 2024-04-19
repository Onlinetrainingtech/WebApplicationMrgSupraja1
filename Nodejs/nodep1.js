var h1=require('http')
h1.createServer(function(req,res){
    res.writeHead(500)
    res.end("Welcome to the Application")
}).listen(8081);
console.log("server is running at http://localhost:8081");