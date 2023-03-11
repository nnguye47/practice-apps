const models = require('./models.js');

module.exports = {
  createAccount: (data) => {
    models.createAccount(data);
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