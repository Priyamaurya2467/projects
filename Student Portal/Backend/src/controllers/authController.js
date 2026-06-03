const User = require('../Model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const UserRegistration = async(req,res)=>{
    try{
        const {name,email,studentCategory,password} = req.body;

        const userExists = await User.findOne({
            email
        })

        if(userExists) {
            return res.status(400).json({
                message : "User Already exists",
            })
        }

        const hashedPassword = await bcrypt.hash(password,await bcrypt.genSalt(10))

        const userP = await User.create({
            name,email,studentCategory,
            password: hashedPassword
        })

        res.status(201).json({
            message : "User Registered",
            userP
            
        })


    }catch(err){
        res.status(500).json({
            message : err.message
        });
    }
};


const UserLogin = async(req,res) => {
    try{
        const {email , password} = req.body


        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                message: "Invalid Credentials"
            })
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({
                message: "Invalid Credentials",
            })
        }

        const token = jwt.sign({
            id: user._id,
        },process.env.JWT_SECRET)

        res.status(200).json({
            token,
            user : {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        })
    }catch(err){
        res.status(500).json({
            message : err.message
        })
    }
};

module.exports = {UserRegistration,UserLogin}