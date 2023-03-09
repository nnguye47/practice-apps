require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require('axios');
const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


//get all
axios.get('/getAll', (req, res) => {
  console.log('testing from getall');
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
// console.log(process.env);
