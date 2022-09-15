const Genre = require("../models/Genre.model");
module.exports.genresController = {
  // добавить жанр
  createGenre: async (req, res) => {
    const { name, description } = req.body;
    try {
      const addedGenre = await Genre.create({ name, description });
      res.json(addedGenre);
    } catch (error) {
      res.json(`${error.message}: Ошибка при добавлении жанра`);
    }
  },

  // удалить жанр
  deleteGenre: async (req, res) => {
    try {
      await Genre.findByIdAndRemove(req.params.id);
      res.json("Жанр удален");
    } catch (error) {
      res.json(`${error.message}: Ошибка при удалении жанра`);
    }
  },

  // вывод всех жанров
  getGenres: async (req, res) => {
    try {
      const genres = await Genre.find();
      res.json(genres);
    } catch (error) {
      res.json(`${error.message}: Ошибка при выводе всех жанров`);
    }
  },
};

