//require ('dotenv').config({path: './env'});
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
import { app } from "./app.js"

import dotenv from "dotenv"


import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
});







connectDB()

.then(() =>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!", err)
})










/*
import express from 'express'
const app = express()
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME }`)
        app.on("error",(error)=>{
            console.log('ERRR:',error)
        })
    }
    catch (error) {
        console.error("ERROR: ",error)
        throw err
    }
})()
    */