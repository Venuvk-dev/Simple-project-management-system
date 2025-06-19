const { model } = require("mongoose");
const taskModel=require("../Models/taskModel");

//to create task -post method
const createTask=async (req,res)=>{
    const {title, description} = req.body;
    
    try{
        const task =await taskModel.create({title, description});
        res.status(200).json(task);
    }
    catch(e){
        res.status(400).json("Error : "+e);
    }
}

//to get all tasks
const getTasks = async (req,res)=>{
    try{
        const tasks=await taskModel.find({});
        res.status(200).json(tasks);
    }
    catch(e){
        res.status(400).json("Error: "+e);
    }
}

module.exports={createTask,getTasks};