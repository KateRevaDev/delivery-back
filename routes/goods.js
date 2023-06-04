const express = require('express')
const router = express.Router()
const Good = require('../models/good')

// Getting goods
router.get('/', async (req, res) => {
  try {
    const goods = await Good.find()
    res.json(goods)
  } catch (err) {
    res.status(500).json({ error: err })
  }
})

// Adding goods
router.post('/', async (req, res) => {
  const good = new Good({
    name: req.body.name,
    price: req.body.price,
    shopId: req.body.shopId,
  })
  try {
    const newGood = await good.save()
    res.status(201).json(newGood)
  } catch (err) {
    res.status(400).json({ error: err })
  }
})

// Deleting goods
router.delete('/:id', async (req, res) => {
  try {
    await Good.findByIdAndDelete(req.params.id)
    res.status(201).json({ message: 'Good removed'})

  } catch (err) {
    res.status(400).json({ error: err })
  }
})

module.exports = router