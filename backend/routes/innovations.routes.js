const express = require('express')
const { listInnovations } = require('../controllers/innovations.controller')

const router = express.Router()

router.get('/', listInnovations)

module.exports = router
