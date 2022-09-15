const Author = require("../models/Author.model");

module.exports.autorsController = {
  // добавление автора
  addAuthor: async (req, res) => {
    const { name, description } = req.body;
    try {
      const Author = await Author.create({ name, description });
      res.json(Author);
    } catch (error) {
        res.json(error)
    }
  },
};