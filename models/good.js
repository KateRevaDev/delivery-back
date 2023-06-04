const mongoose = require('mongoose')

const goodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: Buffer,
  },
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  }
})

module.exports = mongoose.model('Good', goodSchema)