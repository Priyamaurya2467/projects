const BurnoutRecord = require("../model/burnoutRecord")

const createBurnOutRecords = async(req,res) => {
    const {study_hours,sleep,academic_pressure_score,sleep_quality, burnout} = req.body

    const record = await BurnoutRecord.create({
        user: req.user.id,
        study_hours,
        sleep,
        academic_pressure_score,
        sleep_quality,
        burnout
    });

    res.status(201).json({
        message: "Created Successfully"
    })
}

const getBurnOutRecords = async(req,res)=>{
    const records = await BurnoutRecord.find({
        user: req.user.id,
    }).sort({createdAt: -1});

    res.status(200).json(records);
}

module.exports = {createBurnOutRecords,getBurnOutRecords}