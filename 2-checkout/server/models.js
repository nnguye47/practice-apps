const db = require('./db.js');

module.exports = {
  createAccount: (data, callback) => {
    console.log('from models: ', data);
    queryString = `INSERT INTO users (username, email, pw, cookie) VALUES ('${data.username}', '${data.email}', '${data.password}', '${data.id}')`;
    db.connection.query(queryString, (err, result) => {
      if (err) {
        console.log('error in models: ', err);
        callback('error in models: ', err);
      } else {
        callback(null);
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