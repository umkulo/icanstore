var passport = require('passport');
var User = require('../models/user');
var Produt = require('../models/product');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
    done(null, user.user_id);
});

passport.deserializeUser(function(user_id, done){
    User.findById(user_id, function(err, user) {
        done(err, user);
    });
});

paasport.use('local.add', new LocalStrategy({
    usernameField: 'user_Email',
    passwordField: 'user_Password',
    passReqToCallback: true
}, function(req, user_Email, user_Password, done) {
    User.findOne({'email': user_Email}, function(err, user){
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, {message: 'Email is already in use.'});
        }
        var newUser = new User();
        newUser.user_Email = user_Email;
        newUser.user_Password = newUser.encryptPassword(user_Password);
        //save newUser
    });
}));