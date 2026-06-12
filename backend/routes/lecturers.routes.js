const express = require('express')
const { listLecturers } = require('../controllers/lecturers.controller')

const router = express.Router()

router.get('/', listLecturers)

module.exports = router
