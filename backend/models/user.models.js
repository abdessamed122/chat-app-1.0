import mongoose from "mongoose";
const userschema= new mongoose.Schema({
    fullname:{type:String,
        required:true,
    },
    username:{type:String,
        required:true,
          unique:true,
    },
    password:{type:String,
        required:true,
          minlength:6,
    },
    gender:{type:String,
        required:true,
        enum:["male","female"],
    },
    profilepic:{
        type:String,
        default:"",
    },
    // created at ,,, updateat
},{timestamps:true})
export const User = mongoose.model("User",userschema)
