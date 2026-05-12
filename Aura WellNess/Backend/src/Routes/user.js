const express = require('express')
const userController = require('../Controller/user.Controller')


const route = express.Router()

route.post('/register', userController.userRegister)
route.post('/login', userController.userLogin)

module.exports = route

