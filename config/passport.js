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

passport.use('local.add', new LocalStrategy({
    user_EmailFld: 'user_Email',
    user_PasswordFld: 'user_Password',
    passReqToCallback: true
}, function(req, user_EmailFld, user_PasswordFld, done) {
    User.findOne({'user_Email': user_EmailFld}, function(err, user){
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, {message: 'Email is already in use.'});
        }
        var newUser = new User();
        newUser.user_Email = user_EmailFld;
        newUser.user_Password = newUser.encryptPassword(user_PasswordFld);
        res.redirect('/users')
        //save newUser
        // newUser.save(function(err, result) {
            // if (err) {
                // return done(err);
            // }
            // return done(null, newUser);
        // });
        // User.create({
            // user_Name, user_Surname, usernameField, user_Cellphone, 
            // user_Password, role_ID, user_Active, 
            // user_LastDate, user_MPNumber, user_PracticeNo
        //   })
            // .then(user => res.redirect('/users'))
            // .catch(err => console.log(err));
    });
}));