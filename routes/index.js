const express = require('express')
const router = express.Router()

const productRouter = require('./product_router')

router.get('/', (req,res) => {
    res.send(
        `<h1> Welcome to ecommerce API</h1>`
    )
})

router.use('/product',productRouter)

module.exports = router