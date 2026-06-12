function listInnovations(_req, res) {
  return res.json({
    data: [],
    message: 'Endpoint inovasi siap dihubungkan ke database',
  })
}

module.exports = { listInnovations }
