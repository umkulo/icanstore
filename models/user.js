var Sequelize = require('sequelize');
var db = require('../config/database');
var bcrypt = require('bcrypt-nodejs');

var User = db.define('user', {
    user_ID : {
        type: Sequelize.INTEGER, primaryKey: true
    },
    user_Name : {
        type: Sequelize.STRING
    },
    user_Surname : {
        type: Sequelize.STRING
    },
    user_Email : {
        type: Sequelize.STRING
    },
    user_Cellphone : {
        type: Sequelize.STRING
    },
    user_Password : {
        type: Sequelize.STRING
    },
    role_ID : {
        type: Sequelize.INTEGER
    },
    user_Active : {
        type: Sequelize.BOOLEAN
    },
    user_LastDate : {
        type: Sequelize.DATE
    },
    user_MPNumber : {
        type: Sequelize.STRING
    },
    user_PracticeNo : {
        type: Sequelize.STRING
    },
    createdAt : {
        type: Sequelize.DATE
    },
    updatedAt : {
        type: Sequelize.DATE
    }
});

// User.method.encryptPassword(function(user_Password) {
//     return bcrypt.hashSync(user_Password, bcrypt.genSaltSync(5), null);
// });

// User.method.validPassword(function(password){
//     return bcrypt.compareSync(user_Password, this.user_Password);
// });

module.exports = User