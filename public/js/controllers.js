'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, Items) {

  $scope.total = 0;

  Items.getInfo()
  .then(items => {
    console.log('items:', items);
  })
  .catch(err => {
    console.log('err');
  })

  $scope.addItem = () => {


    var itemObj = {
      name: $scope.item.name,
      value: $scope.item.value,
      room: $scope.item.room
    };

    $scope.total += itemObj.value;

    console.log('itemObj:', itemObj);

    Items.postItem(itemObj)
    .then(res => {

    })
    .catch(err => {
      console.log('err:', err);
    })
  }


});
