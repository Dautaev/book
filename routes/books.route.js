const { Router } = require("express");
const { booksController } = require("../controllers/Books.controller");
const route = Router();

route.post("/books", booksController.addBook);
route.delete("/books/:id", booksController.deleteBook);
route.patch("/books/:id", booksController.patchBook);
route.get("/books/:id", booksController.getBook);
route.get("/books", booksController.getBooks);
route.get("/books/genres/:id", booksController.getBooksByGenre);

module.exports = route;