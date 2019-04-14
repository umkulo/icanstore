const Sequelize = require('sequelize');
const db = require('../config/database');

const Practice = db.define('practice', {
  prac_ID: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  prac_Name: {
    type: Sequelize.STRING,
    notEmpty: true
  },
  prac_Address1: {
    type: Sequelize.STRING,
    notEmpty: true
  },
  prac_Address2: {
    type: Sequelize.STRING,
    notEmpty: true
  },
  prac_Address3: {
    type: Sequelize.STRING,
    notEmpty: true
  },
  prac_City: {
    type: Sequelize.STRING,
    notEmpty: true
  },
  prac_Active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  prac_PracticeNo: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = Practice;