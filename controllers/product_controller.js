const mongoose = require('mongoose')
const Product = mongoose.model('Product')

const getProducts = async (req,res) => {
    try{
        const products = await Product.find();
        if (products.length === 0){
            return res.status(400).json({
                message: 'Error',
                detail: 'No hay registros'
            });
        }

        return res.status(200).json({
            message: 'Ok',
            detail: products
        });
    

    } catch(err){
        return res.status(400).json({
            message: 'Error',
            detail: err
        });
    }

}

module.exports = {
    getProducts
}