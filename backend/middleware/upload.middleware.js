const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, path.join(__dirname, '../public/uploads'))
  },
  filename: (_req, file, callback) => {
    const uniqueName = `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`
    callback(null, uniqueName)
  },
})

const upload = multer({ storage })

module.exports = upload
