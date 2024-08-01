import path from "path";
import express from "express"
import {PORT} from "./db/config.js";
import cookieParser from 'cookie-parser'
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connect_to_mongodb from "./db/connecttomongodb.js";
import userRoutes from "./routes/user.routes.js"
import {app, server} from './socket/socket.js'

// const app = express();
// const PORT = process.env.PORT;

const __dirname = path.resolve();


app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get((req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

app.use(express.json())

app.use(cookieParser())
app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)




server.listen(PORT,()=> {       
    connect_to_mongodb();

       console.log(`server works on port ${PORT}`)
}); 

