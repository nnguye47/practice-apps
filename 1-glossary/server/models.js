const { Word }= require('./db.js');

//create a function that will get all
const findAll = () => {
  //use model.find() to get the array of word objects
  //return it so that it can be used
  console.log('hello from findAll');
  return Word.find({});
}

module.exports = findAll;