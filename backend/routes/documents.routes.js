const express = require('express')
const { listDocuments } = require('../controllers/documents.controller')

const router = express.Router()

router.get('/', listDocuments)

module.exports = router
