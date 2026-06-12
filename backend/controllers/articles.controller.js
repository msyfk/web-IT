function listArticles(_req, res) {
  return res.json({
    data: [],
    message: 'Endpoint berita siap dihubungkan ke database',
  })
}

module.exports = { listArticles }
