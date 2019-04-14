const Sequelize = require('sequelize');
const db = require('../config/database');

const Cart = db.define('carts', {
    cart_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    user_ID: {
        type: Sequelize.INTEGER
    },
    prod_ID: {
        type: Sequelize.INTEGER
    },
    order_Qty: {
        type: Sequelize.INTEGER
    },
    prod_Price: {
        type: Sequelize.FLOAT
    },
    prod_Disc: {
        type: Sequelize.FLOAT
    },
    line_Total: {
        type: Sequelize.FLOAT
    },
    order_ID: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});

module.exports = Cart;