const {getProducts} = require('./product_controller')
const {getUsers,createUser} = require('./user_controller')

module.exports = {
    getProducts,
    getUsers,
    createUser
}