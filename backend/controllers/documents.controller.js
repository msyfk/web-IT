function listDocuments(_req, res) {
  return res.json({
    data: [],
    message: 'Endpoint dokumen siap dihubungkan ke database',
  })
}

module.exports = { listDocuments }
