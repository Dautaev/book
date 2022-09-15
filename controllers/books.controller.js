const Book = require("../models/Book.model");

module.exports.booksController = {
  // добавление книги
  addBook: async (req, res) => {
    const { name, author, _genreId, _authorId } = req.body;
    try {
      await Book.create({ name, author, _genreId, _authorId});
      res.json("Книга добавлена");
    } catch (error) {
      res.json(error);
    }
  },

    // удаление книги
    deleteBook: async (req, res) => {
      try {
        await Book.findOneAndRemove(req.params.id);
        res.json("Книга удалена");
      } catch (error) {
        res.json(`${error.message}: Ошибка при удалении книги`);
      }
    },
  
    // изменение книги
    patchBook: async (req, res) => {
      const { name, author, _genreId } = req.body;
      try {
        const patchedBook = await Book.findByIdAndUpdate(req.params.id, {
          $set: { name, author, _genreId }
        });
        res.json(patchedBook);
      } catch (error) {
        res.json(`${error.message}: Ошибка при изменении книги`);
      }
    },
  
    // вывод всех книг   
    getBooks: async (req, res) => {
      try {
          const bookList = await Book.find()
          res.json(bookList)
      } catch (error) {
        res.json(`${error.message}: Ошибка при выводе всех книг`);
      }
    },
  
    // вывод определенной книги
    getBook: async (req, res) => {
      try {
        const book = await Book.findById(req.params.id).populate("_authorId").populate("_genreId")
        res.json(book);
      } catch (error) {
        res.json(`${error.message}: Ошибка при выводе книги`);
      }
    },
  
    // вывод всех книг из определенного жанра
    getBooksByGenre: async (req, res) => {
      try {
          const booksByGenre = await Book.find({_genreId: req.params.id})
          res.json(booksByGenre)
      } catch (error) {
        res.json(`${error.message}: Ошибка при выводе книги из определенного жанра`);
      }
    }
  };

