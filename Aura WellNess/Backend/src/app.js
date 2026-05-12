const express = require('express')
const connectDb = require('./db/db')
const userRoute = require('./Routes/user')
const burnoutRoute = require('./Routes/burnoutRoutes')
const app = express()

app.use(express.json())
connectDb()

app.use('/api/auth',userRoute)
app.use('/api/burnout', burnoutRoute)


module.exports = app