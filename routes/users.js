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
      res.render('users/', { users: users });
      // res.json(users);
    }
  });
});

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

// /* Show ADD user */
router.get('/add', (req, res, next) => {
  res.render('users/add', {
    title: 'New User',
    {users: users}
  });
});

// /* ADD user */
// router.post('/add', (req, res) => {
//   /* NEED TO WORK ON THIS AS IT DOES NOT INCORPORATE PASSWORD ENCRYPTION */
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

//   // Validate Fields
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

//   // Check for errors
//   if (errors.length > 0) {
//     res.render('add', {
//       errors,
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
//     });
//   }

//   User.create({
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
//     })
//     .then(user => res.redirect('/users'))
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

// /* EDIT user */
// router.get('/edit/(:id)', isLoggedIn, (req, res, next) => {
//   User.findAll({
//       where: {
//         user_ID: req.params.id
//       }
//     })
//     .then(users => res.render('users/edit', {
//       users
//     }))
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

// /* User Profile */
// router.get('/profile', isLoggedIn, (req, res, next) => {
//   res.render('users/profile');
// });

// /* User login */
// router.post('/login', passport.authenticate('local.login', {
//   successRedirect: '/users/profile',
//   failureRedirect: '/users/add',
//   failureFlash: true
// }));

// /* GET login user page. */
// router.get('/login', (req, res, next) => {
//   res.render('users/login');
// });

// /* Logout */
// router.get('/logout', (req, res, next) => {
//   req.logout();
//   res.redirect('/');
// });

module.exports = router;

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
