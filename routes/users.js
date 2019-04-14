/*jshint esversion: 6 */
var express = require('express');
var router  = express.Router();
var db      = require('../config/database');
var User    = require('../models/User');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;

// LIST all users
router.get('/', (req, res) => {
    User.findAll()
        .then(users => res.render('users/', {
            users
        }))
        .catch(err => console.log(err));
});

// SEARCH users
router.get('/search', (req, res) => {
  // var { term } = req.query;

  User.findAll({ where: {user_Surname: { [Op.like]: '%' + term + '%'}}})
    .then(users => res.render('users', { users }))
    .catch(err => console.log(err));
});

// ADD user
router.post('/add', (req, res) => {
    let { user_Name, user_Surname, user_Email, user_Cellphone, 
        user_Password, role_ID, user_Active, 
        user_LastDate, user_MPNumber, user_PracticeNo } = req.body;
    let errors = [];
  
    // Validate Fields
    if(!user_Surname) {
      errors.push({ text: 'Please add at least a Surname' });
    }
    if(!user_Cellphone) {
      errors.push({ text: 'Please add a mobile number' });
    }
      
    // Check for errors
    if(errors.length > 0) {
      res.render('add', {
        errors,
        user_Name, user_Surname, user_Email, user_Cellphone, 
        user_Password, role_ID, user_Active, 
        user_LastDate, user_MPNumber, user_PracticeNo
      });
    } 
 
    User.create({
      user_Name, user_Surname, user_Email, user_Cellphone, 
      user_Password, role_ID, user_Active, 
      user_LastDate, user_MPNumber, user_PracticeNo
    })
      .then(user => res.redirect('/users'))
      .catch(err => console.log(err));
});

router.get('/login', (req, res) =>{
  User.findAll({ where: {user_Email: term }})
    .then(products => res.render('shop/index', {
      products}))
    .catch(err => console.log(err)) 
})

// UPDATE user
router.post('/update/(:id)', (req, res) => {
  var id = req.params.id;
  let { user_Name, user_Surname, user_Email, user_Cellphone, 
      user_Password, role_ID, user_Active, 
      user_LastDate, user_MPNumber, user_PracticeNo } = req.body;
  let errors = [];

  // Validate Fields
  if(!user_Surname) {
    errors.push({ text: 'Please add at least a Surname' });
  }
  if(!user_Cellphone) {
    errors.push({ text: 'Please add a mobile number' });
  }
    
  // Check for errors
  // if(errors.length > 0) {
    // res.render('add', {
      // errors,
      // user_Name, user_Surname, user_Email, user_Cellphone, 
      // user_Username, user_Password, role_ID, user_Active, 
      // user_LastDate, user_MPNumber, user_PracticeNo
    // });
  // } 

  User.update({
    user_Name, user_Surname, user_Email, user_Cellphone, 
    user_Password, role_ID, user_Active, 
    user_LastDate, user_MPNumber, user_PracticeNo
  }, { where: {user_ID : id} })
    .then(user => res.redirect('/users'))
    .catch(err => console.log(err));
});

// EDIT user
router.get('/edit/(:id)', function(req, res, next){
    User.findAll({
        where: {
          user_ID: req.params.id
        }
      })
      .then(users => res.render('users/edit', {
          users
      }))
      .catch(err => console.log(err));
});

//DELETE user
router.get('/delete/(:id)', function(req, res, next) {
  var user = { id: req.params.id };
  User.destroy({
    where: {
      user_ID: req.params.id
    }
  })
  .then(users => res.redirect('/users'))
  .catch(err => console.log(err));
  
});

module.exports = router;

