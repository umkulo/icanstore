var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  'local.signup',
  new LocalStrategy(
    {
      usernameField: 'user_Email',
      passwordField: 'user_Password',
      passReqToCallback: true
    },
    (req, user_Email, user_Password, done) => {
      req
        .checkBody('user_Email', 'Invalid email')
        .notEmpty()
        .isEmail();
      req
        .checkBody('user_Password', 'Invalid password')
        .notEmpty()
        .isLength({ min: 4 });
      var errors = req.validationErrors();
      if (errors) {
        var messages = [];
        errors.forEach(error => {
          messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
      }
      User.findOne({ user_Email: user_Email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, false, { message: 'Email is already in use.' });
        }
        var newUser = new User();
        newUser.user_Name = req.body.user_Name;
        newUser.user_Surname = req.body.user_Surname;
        newUser.user_Cellphone = req.body.user_Cellphone;
        newUser.user_Active = req.body.user_Active;
        newUser.user_MPNumber = req.body.user_MPNumber;
        newUser.role_Descrip = 'Admin';
        newUser.prac_ID = 0;
        newUser.user_Email = user_Email;
        newUser.user_Password = newUser.encryptPassword(user_Password);
        // res.redirect('/users')
        newUser.save((err, result) => {
          if (err) {
            return done(err);
          }
          return done(null, newUser);
        });
      });
    }
  )
);

passport.use(
  'local.login',
  new LocalStrategy(
    {
      usernameField: 'user_Email',
      passwordFld: 'user_Password',
      passReqCallback: true
    },
    function(req, user_Email, user_Password, done) {
      req
        .checkBody('user_Email', 'Invalid email')
        .notEmpty()
        .isEmail();
      req.checkBody('user_Password', 'Invalid password').notEmpty();
      var errors = req.validationErrors();
      if (errors) {
        var messages = [];
        errors.forEach(error => {
          messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
      }

      User.findOne({ user_Email: user_Email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'No user found.' });
        }
        if (!user.validPassword(user_Password)) {
          return done(null, false, { message: 'Wrong password.' });
        }
        return done(null, user);
      });
    }
  )
);
