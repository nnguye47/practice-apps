const models = require('./models.js');

module.exports = {
  createAccount:(data, callback) => {
    models.createAccount(data, (err, data) => {
      if (err) {
        console.log('err in controller: ', err)
        callback(err);
      } else {
        callback(null)
      }
    });
  },

  createCard: (card) => {
    models.createCard();
  },

  createLocation: (location) => {
    models.createLocation();
  },

  getInfo: (userID) => {
    models.getInfo(userID);
  }
}