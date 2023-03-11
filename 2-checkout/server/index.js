require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const controllers = require('./controllers.js');

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

//parse the body of the request
app.use(express.json());

//controllers
app.post('/account', (req, res) => {
  req.body.id = req.session_id
  controllers.createAccount(req.body, (err, data) => {
    if (err) {
      console.log('err in /account', err);
    } else {
      res.sendStatus(201);
    }
  });
});

app.patch('/updateLocation', (req, res) => {
  console.log('made it to app.patch');
  req.body.cookie = req.session_id;
  controllers.updateLocation(req.body, (err, data) => {
    if (err) {
      console.log('err in app.patch: ', err);
    } else {
      res.sendStatus(204);
    }
  })
});

app.post('/card', (req, res) => {
  controllers.createCard();
});

app.get('/checkout', (req, res) => {
  controllers.getInfo(req.body);
});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
