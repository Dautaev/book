const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controllers");
const route = Router();

route.post("/reviews", reviewsController.addReview);
route.get("/reviews/books/:id", reviewsController.getReviewsByBook);
route.delete("/reviews/:id", reviewsController.deleteReview);

module.exports = route

