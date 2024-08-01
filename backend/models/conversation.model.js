import mongoose from 'mongoose';


const ConversationSchema = new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message',
        default:[]
    }],
    
// created at ,,, updateat
},{timestamps:true});

export const Conversation = mongoose.model("Conversation",ConversationSchema)