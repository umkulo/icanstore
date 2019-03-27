const express = require('express');
const router  = express.Router();
const db      = require('../config/database');
const Product = require('../models/Product');

//GET all products for shop
router.get('/', (req, res) => {
        Product.findAll()
        .then(products => res.render('shop/index', {
            products
        }))
        .catch(err => console.log(err))});

module.exports = router;