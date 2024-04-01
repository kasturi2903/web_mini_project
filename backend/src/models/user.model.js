import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    username: {
        type: String,
        required: false,  // Allow username to be null
        unique: false      // Ensure username is unique if provided
    }

},{timestamps:true});

export const User= mongoose.model("User",UserSchema)