const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  goods: [],
  created: { type: Date, default: Date.now },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
})

module.exports = mongoose.model("Order", orderSchema)
