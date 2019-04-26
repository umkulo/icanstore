// /*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

/* LIST all products for shop */
router.get('/', (req, res) => {
  console.log('Getting all products');
  Product.find({}).exec(function(err, products) {
    if (err) {
      res.send('An error occured');
    } else {
      console.log(products);
      res.render('shop/', { products: products });
      // res.json(products);
    }
  });
});

// //GET all products for shop
// router.get('/', (req, res) => {
//     Product.findAll()
//         .then(products => res.render('shop/index', {
//             products
//         }))
//         .catch(err => console.log(err));
// });

// //GET promotion products for landing
// router.get('/promo', (req, res) => {
//     Product.findAll({
//             where: {
//                 prod_Disc: {
//                     [Op.gt]: 0
//                 }
//             }
//         })
//         .then(products => res.render('shop/promo', {
//             products
//         }))
//         .catch(err => console.log(err));
// });

// router.get('/grid', (req, res) => {
//     Product.findAll()
//         .then(products => res.render('shop/grid', {
//             products
//         }))
//         .catch(err => console.log(err));
// });

module.exports = router;
