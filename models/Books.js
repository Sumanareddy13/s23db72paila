const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
book_name: String,
book_genre: String,
book_cost: Number
})
module.exports = mongoose.model("book",
bookSchema)