const express = require ("express") ;
require('dotenv').config();
// Using Node.js `require()`
const mongoose = require('mongoose');

const app =express();

app.use((req,res,next)=>{
    console.log("Path is " +req.path + "method is " +req.method);
    next();
});

app.get("/",(req,res)=>{
    res.send("Hello Venu , welcome to express js ")
});

mongoose
.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
        console.log("MongoDB connected successfully and listening to port "+ process.env.PORT)
        })
    })
    .catch((error)=>console.log(error));



