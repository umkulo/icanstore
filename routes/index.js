const express = require('express');
const router = express.Router();
const csrf = require('csurf');

const csrfProtection = csrf();
router.use(csrfProtection);

/* GET Landing page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Landing Page' });
});

/* GET add users page. */
// router.get('/user/add', function (req, res, next) {
// res.render('users/add', {
// title: 'New User',
// csrfToken: req.csrfToken()
// });
// });

/* GET open carts. */
// router.get('/carts/', function (req, res, next) {
// res.render('carts/', {
// title: 'Carts',
// csrfToken: req.csrfToken()
// });
// });

module.exports = router;
