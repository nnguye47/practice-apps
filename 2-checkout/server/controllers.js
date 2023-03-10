const models = require('./models.js');

module.exports = {
  createAccount: () => {
    console.log('hello from controllers create account');
    models.createAccount();
  },

  getCard: (location) => {
    models.getCard(1);
  }
}