'use strict';

var app = angular.module('myApp');


app.service('Items', function($http) {

    this.getInfo = () => {
      return $http.get('/')
      .then(items => {
      })
      .catch(err => {
        console.log('getInfo err:', err);
      })
    }

    this.postItem = itemObj => {
      console.log('services itemObj:', itemObj);
      return $http.post('/posts', itemObj)
      .then(res => {

      })
      .catch(err => {
        console.log(err);
      })
    }
})
