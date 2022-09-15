const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema({
    text: String,
    username: String, 
    bookId: {
        ref: 'Book',
        type: mongoose.SchemaTypes.ObjectId
    }
})
const Review = mongoose.model('Review', reviewSchema)
module.exports = Review
