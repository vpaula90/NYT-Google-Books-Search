const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaForBooks = new Schema({
  title: { type: String, required: true },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

const Books = mongoose.model("Book", schemaForBooks);

module.exports = Books;
