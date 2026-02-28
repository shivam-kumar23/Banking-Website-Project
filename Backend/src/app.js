const express = require("express")
const banking = require("./model/model")
const app = express()

app.get("/",(req,res)=>{
    res.send("hello world")
})



module.exports = app