const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const mongooseModel = require('../model/user.model')
const jwt = require('jsonwebtoken')

async function userRegister(req,res){
    const {fullName, universityName, studentEmail,password} = req.body

    const ifUserExist = await mongooseModel.findOne({studentEmail});

    if(ifUserExist){
        return res.status(400).json({
            message: "User Already Exists"
        })
    }

    const hashPassword = await bcrypt.hash(password,10)

    const user = await mongooseModel.create({
        fullName,
        universityName,
        studentEmail,
        password:hashPassword
    })

     const token = jwt.sign({
        id : user._id
     },process.env.MONGO_URI)


     return res.status(202).json({
        message: "User registered Successfully",
        fullName,universityName,studentEmail
     })
    
}

async function userLogin(req,res){
    const {studentEmail,password}= req.body

    const user = await mongooseModel.findOne({studentEmail})
    if (!user){
        return res.status(202).json({
            message:"user not found"
        })
    }
    const matchPassword = await bcrypt.compare(password , user.password)

    if (!matchPassword){
        return res.status(404).json({
            message: "Invalid Credentials"
        })
    }

    const token = jwt.sign(
        {id: user._id}
        ,process.env.MONGO_URI)

    return res.status(202).json({
        message: "User logged in Successfully",
        studentEmail,
        token
    })
}

module.exports = {userRegister,userLogin}