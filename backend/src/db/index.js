import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const  connectDB = async()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log("MongoDB Connected:",connectionInstance.connections[0].host);
       console.log("MongoDB Connected:",process.env.MONGODB_URI,DB_NAME);

    } catch (error) {
        console.log("MONGODB connection error ",error)
        process.exit(1);
    }
}

export default connectDB