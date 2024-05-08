const express=require('express')
const app = express();

app.locals.email="azartechnet@gmail.com";

console.log(app.locals.email)

app.locals.domain="www.sample.com"
app.locals.age='24';
app.locals.company='ABC Ltd'

console.log(app.locals)