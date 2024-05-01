var fs=require('fs')
var data="java"

fs.appendFile('input.txt',data,'utf-8',function(err){
    if (err) throw err;
    console.log("Data has been appended to file");
});

//Reading the contents of a file 
fs.readFile('input.txt','utf-8', function(err,data){
   if (err) throw err;
   //console log shows that the data from input.txt is displayed here
   console.log("The content of input.txt file is : "+data);
})