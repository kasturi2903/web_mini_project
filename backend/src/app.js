import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true

}))

app.use(express.json({limit:"16kb"}))
 app.use(express.urlencoded({extended:true, limit:'1mb'}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(bodyParser.json());


//routes

// import router from "./routes/user.routes.js"
import userRouter from "./routes/user.routes.js"

app.use("/users",userRouter)


export {app}