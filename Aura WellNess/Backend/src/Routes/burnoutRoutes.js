
const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { createBurnOutRecords, getBurnOutRecords } = require('../Controller/burnout.Controller')
const router = express.Router()

router.post('/',authMiddleware,createBurnOutRecords)
router.get('/', authMiddleware,getBurnOutRecords)


module.exports = router