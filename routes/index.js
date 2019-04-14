var express = require('express');
var router = express.Router();
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET Landing page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Landing Page' });
});

/* GET add product page. */
router.get('/product/add', function(req, res, next) {
  res.render('products/add', { title: 'Add Product' });
});

/* GET add users page. */
router.get('/user/add', function(req, res, next) {
  res.render('users/add', { title: 'New User' , csrfToken: req.csrfToken()});
});

/* GET login user page. */
router.get('/user/login', function(req, res, next) {
  res.render('users/login', { title: 'Login' , csrfToken: req.csrfToken()});
});

/* GET open carts. */
router.get('/carts/', function(req, res, next) {
  res.render('carts/', { title: 'Carts' , csrfToken: req.csrfToken()});
});

module.exports = router;
