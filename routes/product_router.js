const express = require('express');
const router = express.Router();
const {getProducts} = require('../controllers/product_controller');
const {getUsers,createUser} = require('../controllers/user_controller')

router.get('/Products',getProducts);
router.get('/user',getUsers);

module.exports = router;