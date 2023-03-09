const mongoose = require("mongoose");
require("dotenv").config();

console.log(process.env.PORT, process.env.DB_NAME);
mongoose.connect(`mongodb://127.0.0.1:${process.env.PORT}/${process.env.DB_NAME}`);

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

const glossarySchema = new mongoose.Schema({
  word: String,
  definition: String
});

const Word = mongoose.model('Word', glossarySchema);

module.exports = Word;
