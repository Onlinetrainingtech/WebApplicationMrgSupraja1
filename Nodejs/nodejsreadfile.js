var fs=require('fs')
//Asynchronous read
// fs.readFile('sample1.txt',function(err,d1){
//     if(err)
//     {
//         return console.log("Error Occurred");
//     }
//     console.log('Asynchrounous read::'+d1.toString());
// })


var data=fs.readFileSync('sample1.txt')
console.log('Synchronus Read::'+data.toString());