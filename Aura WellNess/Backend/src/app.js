const express = require('express')
const connectDb = require('./db/db')
const userRoute = require('./Routes/user')
const app = express()

app.use(express.json())
connectDb()

app.use('/api/auth',userRoute)


module.exports = app