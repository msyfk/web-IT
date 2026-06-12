const express = require('express')
const authRoutes = require('./auth.routes')
const articleRoutes = require('./articles.routes')
const lecturerRoutes = require('./lecturers.routes')
const documentRoutes = require('./documents.routes')
const innovationRoutes = require('./innovations.routes')

const router = express.Router()

router.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'web-it-api',
    timestamp: new Date().toISOString(),
  })
})

router.use('/auth', authRoutes)
router.use('/articles', articleRoutes)
router.use('/lecturers', lecturerRoutes)
router.use('/documents', documentRoutes)
router.use('/innovations', innovationRoutes)

module.exports = router
