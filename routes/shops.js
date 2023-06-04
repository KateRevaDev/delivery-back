const express = require('express')
const router = express.Router()
const Shop = require('../models/shop')

// Getting shops
router.get('/', async (req, res) => {
  try {
    const shops = await Shop.find()
    res.json(shops)
  } catch (err) {
    res.status(500).json({ error: err })
  }
})

// Adding shops
router.post('/', async (req, res) => {
  const shop = new Shop({
    name: req.body.name,
  })
  try {
    const newShop = await shop.save()
    res.status(201).json(newShop)
  } catch (err) {
    res.status(400).json({ error: err })
  }
})

// Deleting shops
router.delete('/:id', async (req, res) => {
  try {
    await Shop.findByIdAndDelete(req.params.id)
    res.status(201).json({ message: 'Shop removed'})

  } catch (err) {
    res.status(400).json({ error: err })
  }
})

module.exports = router