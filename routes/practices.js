// /*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const Practice = require('../models/practice');

/* LIST all practices */
router.get('/', (req, res) => {
  console.log('Getting all practices');
  Practice.find({}).exec(function(err, practices) {
    if (err) {
      res.send('An error occured');
    } else {
      console.log(practices);
      res.json(practices);
    }
  });
});

// /* LIST a practice by id */
router.get('/:id', function(req, res) {
  console.log('Getting a practice by ID');
  Practice.findOne({
    _id: req.params.id
  }).exec(function(err, practices) {
    if (err) {
      res.send('An error occured');
    } else {
      console.log(practices);
      res.json(practices);
    }
  });
});

// /* ADD a new practice */
router.post('/', function(req, res) {
  Practice.create(req.body, function(err, practices) {
    if (err) {
      res.send('Error saving practice');
    } else {
      console.log(practices);
      res.send(practices);
    }
  });
});

// // // ADD practice
// // router.post('/add', (req, res) => {
// //   let {
// //     prac_Name,
// //     prac_Address1,
// //     prac_Address2,
// //     prac_Address3,
// //     prac_City,
// //     prac_PCode,
// //     prac_Active,
// //     prac_PracticeNo
// //   } = req.body;
// //   let errors = [];

// //   Practice.create({
// //       prac_Name,
// //       prac_Address1,
// //       prac_Address2,
// //       prac_Address3,
// //       prac_City,
// //       prac_PCode,
// //       prac_Active,
// //       prac_PracticeNo
// //     })
// //     .then(practice => res.redirect('/practices/edit'))
// //     .catch(err => console.log(err));
// // });

// /* UPDATE a product by id */
router.put('/:id', function(req, res) {
  Practice.findOneAndUpdate(
    {
      _id: req.params.id
    },
    { $set: { prac_PracticeNo: req.body.prac_PracticeNo } },
    { upsert: true },
    function(err, newPractice) {
      if (err) {
        res.send('Error updating practice');
      } else {
        console.log(newPractice);
        res.send(newPractice);
      }
    }
  );
});

// /* DELETE a practice by id */
router.delete('/:id', function(req, res) {
  Practice.findOneAndRemove(
    {
      _id: req.params.id
    },
    function(err, practices) {
      if (err) {
        res.send('Error removing practice');
      } else {
        console.log(practices);
        res.status(204);
      }
    }
  );
});

// // EDIT practice
router.get('/edit/(:id)', function(req, res, next) {
  Practice.findAll({
    where: {
      prac_ID: req.params.id
    }
  })
    .then(practice =>
      res.render('practices/edit', {
        practice
      })
    )
    .catch(err => console.log(err));
});

/* EDIT users for practice */

module.exports = router;
