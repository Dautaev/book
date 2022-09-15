const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    genre: String,

    genreId: {
        ref: 'Genre',
        type: mongoose.SchemaTypes.ObjectId
    },

    authorId: {
        ref: 'Author',
        type: mongoose.SchemaTypes.ObjectId
    }
})
module.exports = mongoose.model('Book', bookSchema)
