const express = require('express')
const router = express.Router()
const Order = require('../models/order')

// Getting orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
    res.json(orders)
  } catch (err) {
    res.status(500).json({ error: err })
  }
})

// Adding orders
router.post('/', async (req, res) => {
  const order = new Order({
    goods: req.body.goods,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  })
  try {
    const newOrder = await order.save()
    res.status(201).json(newOrder)
  } catch (err) {
    res.status(400).json({ error: err })
  }
})

// Deleting orders
router.delete('/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.status(201).json({ message: 'Order removed'})

  } catch (err) {
    res.status(400).json({ error: err })
  }
})

module.exports = router