import express from "express"
import { loginUser,signup,logout } from "../controllers/auth.controller.js"

const router =express.Router()

router.post("/login",loginUser)

router.post("/signup",signup)

router.post("/logout",logout);


export default router