var fs=require('fs')
let intervalId;
let count=0;
intervalId=setInterval(()=>{
    console.log(count);
    count++;
},1000)
setTimeout(()=>{
    clearInterval(intervalId);
    console.log(fs.readFileSync("input.txt","utf-8"));
},1000)