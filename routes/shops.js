var express = require('express');
var router  = express.Router();
var db      = require('../config/database');
var Product = require('../models/Product');

//GET all products for shop
router.get('/', (req, res) => {
        Product.findAll()
        .then(products => res.render('shop/index', {
            products
        }))
        .catch(err => console.log(err))});

router.get('/grid', (req, res) => {
    Product.findAll()
    .then(products => res.render('shop/grid', {
        products
    }))
    .catch(err => console.log(err))});        

module.exports = router;