'use strict';

const db = require('../config/db');
const uuid = require('uuid');
const moment = require('moment');

db.query(`create table if not exists inventory (
  name TEXT,
  value INT,
  room TEXT
)`)

exports.getInfo = () => {
  return new Promise (function (resolve, reject) {

    db.query('select * from inventory', function(err, items) {
      if(err){
        console.log('getAll err:', err);
        reject(err);}
      else{
        // res.render('index', {'title': items})
        resolve(items);
      }
    });
  });
}

exports.create = itemObj => {
  return new Promise(function(resolve, reject) {
    db.query('insert into inventory set ?', itemObj, function(err, item) {
      if (err) return reject(err);
      resolve(item);
    })
  })
}
