// /*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const User = require('../models/user');

var csrf = require('csurf');
var passport = require('passport');
var flash = require('connect-flash');

/* LIST all users */
router.get('/', (req, res) => {
  console.log('Getting all users');
  User.find({}).exec(function(err, users) {
    if (err) {
      res.send('An error occured');
    } else {
      console.log(users);
      res.render('user/', { users: users });
      // res.json(users);
    }
  });
});

router.get('/logout', (req, res) => {
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

/* Show ADD user */
router.get('/signup', (req, res, next) => {
  var errMsg = req.flash('error');
  res.render('user/signup', {
    csrfToken: req.csrfToken(),
    messages: errMsg,
    hasErrors: errMsg.length > 0,
    title: 'New User'
    // {users: users}
  });
});

/* ADD user */
router.post(
  '/signup',
  passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
  })
);

/* EDIT user */
router.get('/edit/(:id)', (req, res, next) => {
  User.findOne({
    where: {
      user_ID: req.params.id
    }
  })
    .then(users =>
      res.render('/user/edit', {
        users
      })
    )
    .catch(err => console.log(err));
});

/* User Profile */
router.get('/profile', (req, res, next) => {
  res.render('/user/profile');
});

/* GET login user page. */
router.get('/login', (req, res, next) => {
  var errMsg = req.flash('error');
  res.render('user/login', {
    csrfToken: req.csrfToken(),
    messages: errMsg,
    hasErrors: errMsg.length > 0,
    title: 'Login'
  });
});

/*POST Login user */
router.post(
  '/login',
  passport.authenticate('local.login', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/login',
    failureFlash: true
  })
);

// /* Logout */
// router.get('/logout', (req, res, next) => {
//   req.logout();
//   res.redirect('/');
// });

module.exports = router;

// /* SEARCH users */
// router.get('/search', (req, res) => {
//   User.findAll({
//       where: {
//         user_Surname: {
//           [Op.like]: '%' + term + '%'
//         }
//       }
//     })
//     .then(users => res.render('users', {
//       users
//     }))
//     .catch(err => console.log(err));
// });

// /* UPDATE user */
// router.post('/update/(:id)', isLoggedIn, (req, res) => {
//   var id = req.params.id;
//   let {
//     user_Name,
//     user_Surname,
//     user_Email,
//     user_Cellphone,
//     user_Password,
//     role_ID,
//     user_Active,
//     user_LastDate,
//     user_MPNumber,
//     user_PracticeNo
//   } = req.body;
//   let errors = [];

//   /* Validate Fields */
//   if (!user_Surname) {
//     errors.push({
//       text: 'Please add at least a Surname'
//     });
//   }
//   if (!user_Cellphone) {
//     errors.push({
//       text: 'Please add a mobile number'
//     });
//   }

//   User.update({
//       user_Name,
//       user_Surname,
//       user_Email,
//       user_Cellphone,
//       user_Password,
//       role_ID,
//       user_Active,
//       user_LastDate,
//       user_MPNumber,
//       user_PracticeNo
//     }, {
//       where: {
//         user_ID: id
//       }
//     })
//     .then(user => res.redirect('/users'))
//     .catch(err => console.log(err));
// });

// /* DELETE user */
// router.get('/delete/(:id)', isLoggedIn, (req, res, next) => {
//   var user = {
//     id: req.params.id
//   };
//   User.destroy({
//       where: {
//         user_ID: req.params.id
//       }
//     })
//     .then(users => res.redirect('/users'))
//     .catch(err => console.log(err));
// });

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated())
//     return next();
//   res.redirect('/');
// }

// function notLoggedIn(req, res, next) {
//   if (!req.isAuthenticated())
//     return next();
//   res.redirect('/');
// }
