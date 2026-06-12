require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const apiRoutes = require('./routes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }))
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')))
app.use('/api', apiRoutes)

app.use((_req, res) => {
  res.status(404).json({ message: 'Endpoint tidak ditemukan' })
})

app.use((error, _req, res, _next) => {
  console.error(error)
  res.status(error.status || 500).json({ message: error.message || 'Terjadi kesalahan server' })
})

app.listen(PORT, () => {
  console.log(`Web IT API berjalan di http://localhost:${PORT}`)
})
