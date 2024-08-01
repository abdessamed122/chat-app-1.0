 import mongoose from 'mongoose';
import {mongoDB_URL} from "./config.js"

 const connect_to_mongodb = async ()=>{
    try {
        await mongoose.connect(mongoDB_URL);   
        console.log("connected to mongodb");
     }
        catch(error){
            console.log("error connecting to database",error.message);
        }
 };
 export default connect_to_mongodb;