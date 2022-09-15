const { Router } = require("express");
const { autorsController } = require("../controllers/authors.controllers");
const route = Router()

route.post("/authors", autorsController.addAuthor)

module.exports = route