require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors =require('cors')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database'))


app.use(express.json({limit: '20mb'}))
app.use(express.urlencoded({limit: '20mb', extended: true}))
app.use(cors())

const goodsRoute = require('./routes/goods')
const shopsRoute = require('./routes/shops')
const ordersRoute = require('./routes/orders')

app.use('/goods', goodsRoute)
app.use('/shops', shopsRoute)
app.use('/orders', ordersRoute)

app.listen(3333, () => console.log('Server is ready to requests'))