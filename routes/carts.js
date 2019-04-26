// var express = require('express');
// var router = express.Router();
// var db = require('../config/database').default;
// var Cart = require('../models/Cart');

// //GET all
// router.get('/', (req, res) => {
//     Cart.findAll({
//             where: {
//                 // user_ID: req.params.id,
//                 order_ID: null
//             }
//         })
//         .then(carts => res.render('carts/', {
//             carts
//         }))
//         .catch(err => console.log(err));
//     res.render('shop/');
// });

// // ADD to cart
// router.post('/add', (req, res) => {
//     let {
//         user_ID,
//         prod_ID,
//         prod_order_Qty,
//         prod_Price,
//         prod_Disc
//     } = req.body;
//     let errors = [];

//     Cart.create({
//             user_ID,
//             prod_ID,
//             prod_order_Qty,
//             prod_Price,
//             prod_Disc
//         })
//         //   .then(product => res.redirect('/products'))
//         .catch(err => console.log(err));
// });


// // EDIT cart
// router.get('/edit/(:id)', function (req, res, next) {
//     Product.findAll({
//             where: {
//                 user_ID: req.params.id,
//                 order_ID: null
//             }
//         })
//         .then(cart => res.render('cart/edit', {
//             cart
//         }))
//         .catch(err => console.log(err));
// });

// module.exports = router;