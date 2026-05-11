const mongoose = require('mongoose')

const mongooseSchema = new mongoose.Schema({
    fullName : {
        type: String,
        required: true
    },
    universityName : {
        type: String,
        required: true
    },
    studentEmail : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

const mongooseModel = new mongoose.model("HealthModel",mongooseSchema)

module.exports = mongooseModel