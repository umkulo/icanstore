/*jshint esversion: 6 */
/*npm run dev*/
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const validator = require('express-validator');
const env = require('dotenv');
const mongoose = require('mongoose');

const port = 8080;
const db = 'mongodb://localhost/icanstore';

mongoose.connect(db, { useNewUrlParser: true });

var app = express();

//Database
// var db = require('./config/database');

//Routes
const routes = require('./routes/index');

//Handlebars
app.set('views', './views');
app.engine(
  '.hbs',
  expressHbs({
    defaultLayout: 'layout',
    extname: '.hbs'
  })
);
app.set('view engine', '.hbs');

// Middleware initialize
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
//load passport strategies
//The next sequence does matter
app.use(
  session({ secret: 'Jesus15Lord', resave: false, saveUninitialized: false })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

require('./config/passport');

//Models
const users = require('./routes/users');
const products = require('./routes/products');
const practices = require('./routes/practices');
const shops = require('./routes/shops');
const carts = require('./routes/carts');

//Setup routes
app.use('/', routes);
app.use('/users', users);
app.use('/products', products);
app.use('/practices', practices);
app.use('/shops', shops);
// app.use('/carts', carts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
