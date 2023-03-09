const mongoose = require("mongoose");
require("dotenv").config();

console.log(process.env.PORT, process.env.DB_NAME);
mongoose.connect(`mongodb://127.0.0.1/${process.env.DB_NAME}`);

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

let glossarySchema = new mongoose.Schema({
  word: String,
  definition: String
});

let Word = mongoose.model('Word', glossarySchema);

//create a function to save things to the server
let save = (words) => { //words should be an array of objetcs
  //for every word in the array
  //create a new documet
  //save it
  return Word.create(words);
}

module.exports = Word;
