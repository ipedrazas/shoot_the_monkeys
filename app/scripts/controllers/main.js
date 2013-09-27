'use strict';

angular.module('MonkeysApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.players = [
        'Ivan',
        'Eloy',
        'Antonio',
        'Alex'
    ];

    $scope.monkeys = [
      {
        state: true
      },
      {
        state: true
      },
      {
        state: true
      },
      {
        state: true
      },
    ];

    $scope.$on('makey', function(event, value) {
      $scope.monkeys[value].state = !$scope.monkeys[value].state;
      $scope.$apply();
    });

  });
