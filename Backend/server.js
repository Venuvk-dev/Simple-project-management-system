const express = require ("express") ;
require('dotenv').config();
const mongoose = require('mongoose');// Using Node.js `require()`
const taskRoutes=require("./Routes/taskRoutes"); //importing taskroutes
const app =express();

app.use((req,res,next)=>{
    console.log("Path is " +req.path + ", method is " +req.method);
    next();
});

app.use(express.json());  //it allows the server to get the response as json format

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

app.use("/api/tasks",taskRoutes);

