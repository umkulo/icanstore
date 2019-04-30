const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CartSchema = new Schema({
  user_ID: {
    type: Number
  },
  prod_ID: {
    type: Number
  },
  order_Qty: {
    type: Number
  },
  prod_Price: {
    type: Number
  },
  prod_Disc: {
    type: Number
  },
  line_Total: {
    type: Number
  },
  order_ID: {
    type: Number
  }
});

module.exports = mongoose.model('Cart', CartSchema);
