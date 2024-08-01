import mongoose from 'mongoose';


const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    message:{
        type:String,
        ref:'User',
        required:true
    }
// created at ,,, updateat
},{timestamps:true});

export const Message = mongoose.model("Message",messageSchema)