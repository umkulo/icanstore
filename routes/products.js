/*jshint esversion: 6 */
var express = require('express');
var router  = express.Router();
var db      = require('../config/database');
var Product = require('../models/Product');

//GET all
router.get('/', (req, res) => {
    Product.findAll()
        .then(products => res.render('products/', {
            products
        }))
        .catch(err => console.log(err));});

//GET display add form
router.get('/add', (req, res) => res.render('add'));

// ADD product
router.post('/add', (req, res) => {
    let { prod_Name, prod_Code, prod_Desc, 
        prod_Qty, prod_Price, prod_Disc
     } = req.body;
    let errors = [];
  
    Product.create({
        prod_Name, prod_Code, prod_Desc, 
        prod_Qty, prod_Price, prod_Disc
    })
      .then(product => res.redirect('/products'))
      .catch(err => console.log(err));
});

// EDIT product
router.get('/edit/(:id)', function(req, res, next){
    Product.findAll({
        where: {
          prod_ID: req.params.id
        }
      })
      .then(products => res.render('products/edit', {
          products
      }))
      .catch(err => console.log(err));
});

// UPDATE product
router.post('/update/(:id)', (req, res) => {
    var id = req.params.id;
    let { prod_Name, prod_Code, prod_Desc, 
        prod_Qty, prod_Price, prod_Disc } = req.body;
    let errors = [];
  
    // Validate Fields
    if(!prod_Name) {
      errors.push({ text: 'Please add at least a Pruct name' });
    }
 
    Product.update({
        prod_Name, prod_Code, prod_Desc, 
        prod_Qty, prod_Price, prod_Disc 
    }, { where: {prod_ID : id} })
      .then(products => res.redirect('/products'))
      .catch(err => console.log(err));
  });

//DELETE product
router.get('/delete/(:id)', function(req, res, next) {
    var user = { id: req.params.id };
    Product.destroy({
      where: {
        prod_ID: req.params.id
      }
    })
    .then(products => res.redirect('/products'))
    .catch(err => console.log(err));
    
  });

module.exports = router;