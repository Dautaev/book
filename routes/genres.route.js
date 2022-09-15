const { Router } = require("express");
const { genresController } = require("../controllers/genres.controllers");
const route = Router();

route.post("/genres", genresController.createGenre);
route.delete("/genres/:id", genresController.deleteGenre);
route.get("/genres", genresController.getGenres);
module.exports = route;