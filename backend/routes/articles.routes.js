const express = require('express')
const { listArticles } = require('../controllers/articles.controller')

const router = express.Router()

router.get('/', listArticles)

module.exports = router
