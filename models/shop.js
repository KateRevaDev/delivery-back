const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  }
})

module.exports = mongoose.model('Shop', shopSchema)