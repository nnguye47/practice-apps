const db = require('./db.js');


module.exports = {
  createAccount: () => {
    console.log('hello from models.createAccount');
  },

  getCard: (cardID) => {
    var queryString = 'SELECT * FROM cards WHERE id = 1'
    db.query(queryString, (err, result) => {
      console.log('result from query: ', result)
    })
  }
}