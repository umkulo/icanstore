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
    type: String,
    required: true
  },
  user_Cellphone: {
    type: String
  },
  user_Password: {
    type: String,
    required: true
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

userSchema.methods.encryptPassword = user_Password => {
  return bcrypt.hashSync(user_Password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = user_Password => {
  return bcrypt.compareSync(user_Password, this.user_Password);
};

module.exports = mongoose.model('User', userSchema);
