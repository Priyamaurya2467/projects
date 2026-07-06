const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    phone: String,
    role: {
        type: String,
        enum: [
            "Citizen",
            "Volunteer",
            "Admin",
            "Government",
            "NGO"
        ],
        default: "Citizen"
    },

    location: {
        longitude: Number,
        latitude: Number
    }

},{
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)