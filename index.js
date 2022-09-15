const express = require('express')
const mongoose = require('mongoose')
const port = 2000
const app = express()
app.use(express.json)

app.use(require("./routes/books.route"))
app.use(require("./routes/genres.route"))
app.use(require("./routes/author.route"))
app.use(require("./routes/review.route"))


mongoose.connect("mongodb+srv://adam:pasiman1100@cluster0.qnwzrrm.mongodb.net/book?retryWrites=true&w=majority", {
}).then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(port, () => {
    console.log('сервер запущен')
});