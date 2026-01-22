//require ('dotenv').config({path: './env'});
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import dotenv from "dotenv"


import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
});

console.log("MONGODB_URI:", process.env.MONGODB_URI);







connectDB()








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