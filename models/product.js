const Sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('product', {
    prod_ID : {
        type: Sequelize.INTEGER, primaryKey: true
    },
    prod_Name : {
        type: Sequelize.STRING
    },
    prod_Code : {
        type: Sequelize.STRING
    },
    prod_Description : {
        type: Sequelize.STRING
    },
    prod_Qty : {
        type: Sequelize.INTEGER
    },
    prod_Price : {
        type: Sequelize.FLOAT
    },
    prod_Disc : {
        type: Sequelize.FLOAT
    },
    prod_Category : {
        type: Sequelize.INTEGER
    },
    prod_Active : {
        type: Sequelize.BOOLEAN
    },
    createdAt : {
        type: Sequelize.DATE
    },
    updatedAt : {
        type: Sequelize.DATE
    }
});

module.exports = Product








