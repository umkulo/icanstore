const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
  prac_ID: {
    type: Number
  },
  user_Name: {
    type: String
  },
  user_Surname: {
    type: String
  },
  user_Email: {
    type: String
  },
  user_Cellphone: {
    type: String
  },
  user_Password: {
    type: String
  },
  role_Descrip: {
    type: String
  },
  user_Active: {
    type: Number
  },
  user_MPNumber: {
    type: String
  }
});

// User.methods.encryptPassword(function (user_Password) {
//     return bcrypt.hashSync(user_Password, bcrypt.genSaltSync(5), null);
// });

// User.addHook("beforeCreate", function (user) {
// user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
// });
// User.methods.validPassword(function (user_Password) {
//     return bcrypt.compareSync(user_Password, this.user_Password);
// });
// User.prototype.validPassword = function (password) {
// return bcrypt.compareSync(password, this.password);
// };

module.exports = mongoose.model('User', userSchema);
