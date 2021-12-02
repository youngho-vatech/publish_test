const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const treatGpms = new Schema({
  id: {type: String, unique: true},
  name: String,
  category: String,
  fee: Number,
  content: String, 
});

export default treatGpms;
