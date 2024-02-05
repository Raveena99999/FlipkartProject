const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT
const {userRouter} = require("./routes/useroutes")
const { connection } = require("./database/db")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const {auth} = require("./middlewares/Authmiddleware")
app.use(express.json())
app.use(cors({
    origin:"http://127.0.0.1:5173",
    credentials: true,
    httpOnly:true
}))
app.use(cookieParser())
app.use("/user",userRouter)
app.get("/data",auth,(req,res)=>{
    res.send(`data...`)
})
app.listen(port,async()=>{
    try {
        await connection
        console.log(`express server is running on port ${port} and mongoDB is also connected`)

    } catch (error) {
       console.log({"msg":error}) 
    }
})