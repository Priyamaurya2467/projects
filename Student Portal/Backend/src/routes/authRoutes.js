const express = require('express');

const router = express.Router();



const {register,login, UserRegistration, UserLogin} = require('../controllers/authController')

router.post("/register",UserRegistration)
router.post("/login",UserLogin)

module.exports = router;