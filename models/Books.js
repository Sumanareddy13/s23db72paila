const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
book_name: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/
  },
book_genre: String,
book_cost: {
    type: Number,
    min:1,
    max:10000
} 
})
module.exports = mongoose.model("Books",
bookSchema)