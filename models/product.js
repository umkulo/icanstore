const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  prod_Name: {
    type: String
  },
  prod_Code: {
    type: String
  },
  prod_NAPI: {
    type: String
  },
  prod_Description: {
    type: String
  },
  prod_Pk_Qty: {
    type: Number
  },
  prod_Price: {
    type: Number
  },
  prod_Disc: {
    type: Number
  },
  prod_Category: {
    type: String
  },
  prod_Active: {
    type: String
  },
  prod_Img_Path: {
    type: String
  }
});

module.exports = mongoose.model('Product', ProductSchema);
