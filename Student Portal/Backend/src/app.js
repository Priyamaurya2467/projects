const express = require('express')

const cors = require('cors')
const dotenv = require('dotenv')

const connectDb = require("./config/db")

dotenv.config();

connectDb();

const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/auth",require('./routes/authRoutes'))

app.get('/',(req,res)=>{
    res.send("API Running...")
})


module.exports=app