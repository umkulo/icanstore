const User = require('../models/user');
const mongoose = require('mongoose');

const db = 'mongodb://localhost:27017/icanstore';

mongoose.connect(db, { useNewUrlParser: true });

var users = [
  new User({
    prac_ID: 0,
    user_Name: 'Herman',
    user_Surname: 'le Roux',
    user_Email: 'h@h.com',
    user_Cellphone: '0735958459',
    user_Password: '',
    role_Descrip: 'Super-user',
    user_Active: 1,
    user_MPNumber: ''
  })
];

var done = 0;
for (var i = 0; i < users.length; i++) {
  users[i].save(function(err, result) {
    done++;
    if (err) {
      console.log(err);
    }
    if (done === users.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
