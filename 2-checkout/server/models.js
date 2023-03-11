const db = require('./db.js');

module.exports = {
  createAccount: (data) => {
    console.log('from models: ', data);
    queryString = `INSERT INTO users (username, email, pw, cookie) VALUES ('${data.username}', '${data.email}', '${data.password}', '${data.id}')`;
    db.connection.query(queryString, (err, result) => {
      if (err) {
        console.log('the error', err);
      } else {
        console.log('result from create account', result);
      }

    })
  },

  getInfo: (userInfo) => {
    var queryString = `SELECT * FROM users WHERE id = ${userInfo.id}`
    db.query(queryString, (err, result) => {
      console.log('result from query: ', result)
    })
  }
}