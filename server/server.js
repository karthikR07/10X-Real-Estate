const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const PostController= require("./routes/posts")

const app = express()

const port = process.env.port||8000

app.use("/posts",PostController)

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors())


let URL = "mongodb://localhost:27017/Real-Estate"

mongoose.connect(URL,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>app.listen(port,()=>{console.log(`connected to ${port}`);}))
.catch((err)=>console.log(err))