const { nanoid } = require('nanoid')
const Url = require('../models/url.model')
const { stringValidUrl } = require('../untils/valid-url.until')
const { handleError, ErrorHandler } = require('../untils/error.until')

exports.getLongUrlByCode = async (req, res) => {
    try {
        const url = await Url.findOne({
            shortUrl: req.params.code
        })

        if (!url) throw new ErrorHandler(500, "No URL Found")
        res.status(200).json(url.longUrl)
    } catch (err) {
        return handleError(err, res)
    }
}

exports.urlShorten = async (req, res) => {
    const { longUrl } = req.body

    try {
        if (!stringValidUrl(longUrl)) throw new ErrorHandler(500, "URL Invalid")

        let url = new Url({
            longUrl: longUrl,
            shortUrl: nanoid(7)
        })
        await url.save()

        res.status(200).send(url);
    } catch (err) {
        return handleError(err, res)
    }
}