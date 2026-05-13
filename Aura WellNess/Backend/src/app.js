const express = require('express')
const connectDb = require('./db/db')
const userRoute = require('./Routes/user')
const cors = require('cors')
const burnoutRoute = require('./Routes/burnoutRoutes')
connectDb()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth',userRoute)
app.use('/api/burnout', burnoutRoute)


module.exports = app