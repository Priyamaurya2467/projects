const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    email : {
        type: String,
        required:true
    },
    studentCategory : {
        type : String,
        required: true,
        enum: ["Gate Aspirant" , "Placement Seeker" , "Both GATE & Placement" , "General Learing"]
    },
    password : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)