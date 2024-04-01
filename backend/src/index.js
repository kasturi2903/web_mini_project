import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import express from "express"
 

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed ",err)
})