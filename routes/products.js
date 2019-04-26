// /*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

/* LIST all products */
router.get('/', (req, res) => {
  console.log('Getting all products');
  Product.find({}).exec(function(err, products) {
    if (err) {
      res.send('An error occured');
    } else {
      console.log(products);
      res.render('products/', { products: products });
      // res.json(products);
    }
  });
});

/* LIST a product by id */
router.get('/:id', function(req, res) {
  console.log('Getting a product by ID');
  Product.findOne({
    _id: req.params.id
  }).exec(function(err, products) {
    if (err) {
      res.send('An error occured');
    } else {
      console.log(products);
      res.json(products);
    }
  });
});

// router.post('/product', function(req, res) {
//   var newProduct = new Product();

//   newProduct.title = req.body.title;
//   newProduct.author = req.body.author;
//   newProduct.category = req.body.category;

//   newProduct.save(function(err, product) {
//     if (err) {
//       res.send('Error saving product');
//     } else {
//       console.log(product);
//       res.send(product);
//     }
//   });
// });

/* ADD a new product */
router.post('/', function(req, res) {
  Product.create(req.body, function(err, product) {
    if (err) {
      res.send('Error saving product');
    } else {
      console.log(product);
      res.send(product);
    }
  });
});

/* UPDATE a product by id */
router.put('/:id', function(req, res) {
  Product.findOneAndUpdate(
    {
      _id: req.params.id
    },
    { $set: { prod_Code: req.body.prod_Code } },
    { upsert: true },
    function(err, newProduct) {
      if (err) {
        res.send('Error updating product');
      } else {
        console.log(newProduct);
        res.send(newProduct);
      }
    }
  );
});

/* DELETE a product by id */
router.delete('/:id', function(req, res) {
  Product.findOneAndRemove(
    {
      _id: req.params.id
    },
    function(err, product) {
      if (err) {
        res.send('Error removing product');
      } else {
        console.log(product);
        res.status(204);
      }
    }
  );
});

module.exports = router;
