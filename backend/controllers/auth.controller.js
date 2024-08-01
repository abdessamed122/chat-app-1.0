import {User} from "../models/user.models.js"
import bcrypt  from "bcryptjs";
import { genrateTokenANDcookie } from '../utils/generteToken.js';


export const signup = async(req,res)=>{

    try{
     const {fullname,username,password,confirmpassword,gender}=req.body;

    if ( password !== confirmpassword ){
        return res.status(400).json({error:"password don't match "})
    }
    const user = await User.findOne({username})
    if (user){
        return res.status(400).json({error:"username already exist "})
    }
    // HASH PASSWORD 
    const salt = await bcrypt.genSalt(10);
    const hashedoassword =await bcrypt.hash(password,salt);

    // 
    const boyprofilepic =`https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlprofilepic =`https://avatar.iran.liara.run/public/girl?username=${username}`
    const newUser = new User({
        fullname,
        username,
        password:hashedoassword,
        gender,
        profilepic: gender === "male" ? boyprofilepic : girlprofilepic
    })
if (newUser){
    // genrate JWT token here
 genrateTokenANDcookie (newUser._id,res)
    await newUser.save();

res.status(201).json({
    _id:newUser._id,
    fullname:newUser.fullname,
    username:newUser.username,
    profilepic:newUser.profilepic,

})
}else{
    res.status(400).json({error:"Invalid user data "})
}
    }
    catch (error){
        console.log("error in signup controller ",error.message);
        res.status(500).json({error: error.message})
    }
}

export const loginUser =async(req,res)=>{
 try{
 const {username,password} = req.body;
 // check if user exist
 const user = await User.findOne({username})
 const ispasswordcorrect = await bcrypt.compare(password,user?.password || "");

 if (!user || !ispasswordcorrect){
    return res.status(400).json({error:"invalid username or password"});
 }  genrateTokenANDcookie(user._id,res);
 res.status(200).json({
    _id:user._id,
    fullname:user.fullname,
    username:user.username,
    profilepic:user.profilepic,

});
}catch (error){
        console.log("error in signup controller ",error.message);
        res.status(500).json({error: error.message})
    }

}
export const logout = async (req,res)=>{
   try{
    res.cookie("jwt","",{maxAge:0});
   res.status(200).json({message:"logged out successfully"})

   }catch{
    console.log("error in logout controller ",error.message);
    res.status(500).json({error: error.message})

   }

}

