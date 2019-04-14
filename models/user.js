const Sequelize = require('sequelize');
const db = require('../config/database');
const bcrypt = require('bcrypt-nodejs');

const User = db.define('user', {
    user_ID: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    user_Name: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    user_Surname: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    user_Email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    user_Cellphone: {
        type: Sequelize.STRING
    },
    user_Password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role_ID: {
        type: Sequelize.INTEGER
    },
    user_Active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    user_LastDate: {
        type: Sequelize.DATE
    },
    user_MPNumber: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});

// User.methods.encryptPassword(function(user_Password) {
// return bcrypt.hashSync(user_Password, bcrypt.genSaltSync(5), null);
// });
User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});
// User.methods.validPassword(function(user_Password){
// return bcrypt.compareSync(user_Password, this.user_Password);
// });

module.exports = User;