const Review = require("../models/Review.model");

module.exports.reviewsController = {
    // добавить рецензию
    addReview: async (req, res) => {
        const { text, username, _bookId} = req.body
        try {
            const addedReview = await Review.create({text, username, _bookId});
            res.json(addedReview)
        } catch (error) {
            res.json(`${error.message}: Ошибка при добавлении рецензии`)
        }
    },

    // вывод всех рецензий к определенной книге
    getReviewsByBook: async (req, res) => {
        try {
        const reviewsByBook = await Review.find({_bookId: req.params.id});
        res.json(reviewsByBook)
        } catch (error) {
            res.json(`${error.message}: Ошибка при выводе всех рецензий к определенной книге`)
        }
    },

    // удаление рецензии
    deleteReview: async (req, res) => {
        try {
            await Review.findByIdAndRemove(req.params.id);
            res.json("рецензия удалена")
        } catch (error) {
            res.json(`${error.message}: Ошибка при удалении рецензии`)
        }
    }
}