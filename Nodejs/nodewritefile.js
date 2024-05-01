var fs=require('fs')
fs.writeFile('input.txt',"welcome to session",function(err){
    if(err)throw err;
    console.log("file created");

    fs.readFile('input.txt',function(err,data){
        if (err) throw err;
        let str = data.toString();
        console.log(str);
    })
})