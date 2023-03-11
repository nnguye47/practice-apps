const db = require('./db.js');


module.exports = {
  createAccount: () => {
    console.log('hello from models.createAccount');
  },

  getInfo: (userInfo) => {
    var queryString = `SELECT * FROM users WHERE id = ${userInfo.id}`
    db.query(queryString, (err, result) => {
      console.log('result from query: ', result)
    })
  }
}