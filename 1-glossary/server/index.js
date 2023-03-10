require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require('axios');
const app = express();
const Word = require('./db.js');

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());


//get all
app.get('/getAll', (req, res) => {
  console.log('testing from getall');
  Word.find({})
    .exec()
    .then((data) => {
      console.log('data from find', data);
      res.json(data)
    })
})

app.post('/getOne', (req, res) => {
  console.log('hello from getONe');
  console.log(req.body);

  Word.findOne(req.body)
    .exec()
    .then((data) => {
      console.log('response from getONe', data);
      res.send(data);
    })
})

app.post('/editWord', (req, res) => {
  console.log('hello from editWord');
  var find = {word: 'testing'};
  var update = {definition: 'updated testing'};
  Word.findOneAndUpdate(find, update, {new: true})
    .exec()
    .then(updatedWord => {
      console.log('updated word: ', updatedWord);
      res.send(updatedWord);
    })
})

app.post('/addWord', (req, res) => {
  console.log('post made it to serv: ', req.body);

  Word.create(req.body)
    .then(data => {
      console.log('data from addword: ', data);
      res.sendStatus(201);
    })
})

app.post('/deleteWord', (req, res) => {
  console.log('hello from delete');
})




app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
// console.log(process.env);
