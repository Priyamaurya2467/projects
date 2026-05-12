const mongoose = require('mongoose')

const BurnoutRecordSchema = new mongoose.Schema({
    

    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,  
    },
    study_hours : {
        type: Number,
        required:true,
    },
    sleep : {
        type: Number,
        required:true,
    },
    academic_pressure_score: {
        type: Number,
        required:true,
    },
    sleep_quality : {
        type: String,
        required:true,
    },
    burnout : {
         type: String,
        required:true,
    }
},{
    timestamps: true,
});

const BurnoutRecordModel =  mongoose.model("BurnoutRecord",BurnoutRecordSchema)


module.exports = BurnoutRecordModel