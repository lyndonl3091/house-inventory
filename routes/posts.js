'use strict';

const express = require('express');
let router = express.Router();

let Post = require('../models/post');


router.get('/', (req, res) => {
  Post.getInfo()
  .then(items => {
    res.send(items);
  })
  .catch(err => {
    res.status(400).send(err);
    console.log('router getInfo err:', err);
  })
})


router.post('/', (req, res) => {
  console.log('req.body:', req.body);
  Post.create(req.body)
  .then( item => {
    res.send(item);
  })
  .catch(err => {
    res.status(400).send(err);
  });

})

module.exports = router;
