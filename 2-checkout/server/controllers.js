const models = require('./models.js');

module.exports = {
  createAccount:(data, callback) => {
    models.createAccount(data, (err, data) => {
      if (err) {
        console.log('err in controller: ', err)
        callback(err);
      } else {
        callback(null);
      }
    });
  },

  updateLocation: (data, callback) => {
    console.log('made it tocontroller');
    models.updateLocation(data, (err, res) => {
      if (err) {
        console.log('err in controllers updateLocation: ', err);
      } else {
        callback(null, res);
      }
    });
  },

  getInfo: (userID) => {
    models.getInfo(userID);
  }
}