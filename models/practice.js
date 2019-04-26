const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PracticeSchema = new Schema({
  prac_Name: {
    type: String,
    required: true
  },
  prac_Address1: {
    type: String,
    required: true
  },
  prac_Address2: {
    type: String
  },
  prac_Address3: {
    type: String
  },
  prac_City: {
    type: String
  },
  prac_PCode: {
    type: String
  },
  prac_Active: {
    type: Number
  },
  prac_PracticeNo: {
    type: String
  }
});

module.exports = mongoose.model('Practice', PracticeSchema);
