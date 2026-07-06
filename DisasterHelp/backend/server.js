const express = require('express')

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("first")
})


app.listen("5000",(
    console.log("running on port")
))





