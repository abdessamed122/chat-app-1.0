import jwt from "jsonwebtoken";
import {JWT_SECRET} from '../db/config.js'


 export const genrateTokenANDcookie = (userId,res) =>{
    const token = jwt.sign({userId},JWT_SECRET,
        {expiresIn:'15d',
        });
        res.cookie("jwt",token,{
            maxAge: 15 *24*60*60*1000,//MS
            httpOnly:true, // XSS attacks
            sameSite:"strict", //  CSRF attacks
        });
};