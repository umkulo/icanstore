const express = require('express');
const router = express.Router();
const csrf = require('csurf');

const csrfProtection = csrf();
router.use(csrfProtection);

/* GET Landing page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Landing Page' });
});

/* GET add users page. */
router.get('/user/signup', (req, res, next) => {
  res.render('user/signup', {
    title: 'New User',
    csrfToken: req.csrfToken()
  });
});

/* GET open carts. */
// router.get('/carts/', function (req, res, next) {
// res.render('carts/', {
// title: 'Carts',
// csrfToken: req.csrfToken()
// });
// });

module.exports = router;
