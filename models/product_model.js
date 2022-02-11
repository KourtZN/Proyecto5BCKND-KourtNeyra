const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        name: {type:String},
        price: {type:String},
        image: {type:String},
        desc: {type:String}
    }
)

mongoose.model('Product', ProductSchema, 'product')