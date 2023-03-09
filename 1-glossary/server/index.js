require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require('axios');
const app = express();

const findAll = require('./models.js');

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


//get all
app.get('/getAll', (req, res) => {
  console.log('testing from getall');
  findAll();
})

app.get('/getOne', (req, res) => {
  console.log('hello from getONe');
})

app.post('/editWord', (req, res) => {
  console.log('hello from editWord');
})

app.post('/addWord', (req, res) => {
  console.log('hello from glossary');
})

app.post('/deleteWord', (req, res) => {
  console.log('hello from delete');
})




app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
// console.log(process.env);
