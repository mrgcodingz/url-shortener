const mongoose = require('mongoose');
const { Schema } = mongoose;

let urlSchema = new Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

module.exports = mongoose.model('Url', urlSchema);