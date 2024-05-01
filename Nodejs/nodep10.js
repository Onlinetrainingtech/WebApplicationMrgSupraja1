var r1=function()
{
    console.log("Hello 1000 millisecond")
    setTimeout(r1,10000)
}
r1()
clearTimeout(r1,1000)