const models = require('./models.js');

module.exports = {
  createAccount: (data) => {
    console.log('hello from controllers create account');
    models.createAccount();
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