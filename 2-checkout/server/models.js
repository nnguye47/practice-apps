const db = require('./db.js');

module.exports = {
  createAccount: (data, callback) => {
    console.log('from models: ', data);
    queryString = `INSERT INTO users (username, email, pw, cookie) VALUES ('${data.username}', '${data.email}', '${data.password}', '${data.id}')`;
    db.connection.query(queryString, (err, result) => {
      if (err) {
        console.log('error in models: ', err);
        callback(err);
      } else {
        callback(null);
      }

    })
  },

  updateLocation: (data, callback) => {
    console.log('made it to models', data);
    queryString = `UPDATE users SET line1 = '${data.line1}', line2 = '${data.line2}', city ='${data.city}', zipcode = ${data.zipcode}, currentState='${data.currentState}' WHERE cookie = '${data.cookie}'`;
    db.connection.query(queryString, (err, result) => {
      if (err) {
        console.log('err in modesls', err);
      } else {
        console.log('result form update location: ', result);
      }
    });
  },

  updateCard: (data, callback) => {
    console.log('made it to updateCard models: ', data);
    queryString = `UPDATE users SET num = '${data.cardnum}', cvv = '${data.cvv}', expiration ='${data.expiration}', zipcode = ${data.cardZipcode} WHERE cookie = '${data.cookie}'`;
    db.connection.query(queryString, (err, result) => {
      if (err) {
        console.log('err in models update card: ', err);
      } else {
        callback(null, result);
      }
    })
  },

  getInfo: (userInfo, callback) => {
    var queryString = `SELECT * FROM users WHERE id = ${userInfo.id}`;
    db.query(queryString, (err, data) => {
      if (err) {
        console.log('err in getInfo mode;s', err);
      } else {
        callback(null, data);
      }
    })
  }
}