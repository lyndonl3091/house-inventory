'use strict';
const PORT = process.env.PORT || 8000;

const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const moment = require('moment')

let path = require('path');

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/posts', require ('./routes/posts'));

app.get('/', (req, res) => {

  res.render('index');

});


app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);

});
