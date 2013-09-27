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

  });
