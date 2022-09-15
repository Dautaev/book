const mongoose = require('mongoose')
const genreSchema = mongoose.Schema({
    name: String,
    description: String
})

module.exports = mongoose.model('Genre', genreSchema)