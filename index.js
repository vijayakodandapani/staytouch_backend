const express = require("express");
const app = new express();
const db = require("./db/config");
const dotenv = require("dotenv");
dotenv.config();
db.sequelize;
var router = require('./routes/routes');


//variable declaration
var port = 1010;

// Sample Api
app.get("/",(req,res)=>{
    res.send("Hello, I am working")
})

//Router intializtion
app.use('/api', router);

// Port Connection
app.listen(port,(err,data)=>{
    if(err) console.log(err);
    else console.log(`Listening to ${port} successfully`);
})