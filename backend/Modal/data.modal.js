const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  gender: String,
  name: {},
  location: {},
  email: String,
  login: {},
  dob: {},
  registered: {},
  phone: String,
  cell: String,
  id: {},
  picture: {},
  nat: String,
});

const DataModal = mongoose.model("coin", dataSchema);

module.exports = DataModal;
