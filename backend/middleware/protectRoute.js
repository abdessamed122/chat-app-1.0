import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../db/config.js';
import { User } from '../models/user.models.js';

 export const protectRoute =  async (req,res, next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token){ return res.status(401).json({success:false, message:"Not authorized"})
    }
const decoded = jwt.verify(token,JWT_SECRET)
if (!decoded) {
    return res.status(401).json({error:" UNauthorized- Invalid Token"})
}
const user = await User.findById(decoded.userId).select("-password")
if (!user) {
    return res.status(404).json({error : "user not found"})
}
req.user = user
next()


            } catch (error) { 
                console.log("error in protectroute middleware :",error.message);
            res.status(500).json({error:"internal server error"})
    }


}