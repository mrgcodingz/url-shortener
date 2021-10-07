const express = require('express')
const router = express.Router()

const urlController = require('../controllers/url.controller')

router.get('/:code', urlController.getLongUrlByCode)
router.post('/url-shorten',urlController.urlShorten)

module.exports = router