//

'use strict';

function log(entry){
    if( console && console.log ) {
            console.log(entry);
    }
}



angular.module('MonkeysApp').factory('api', function(){
        var players = [];
        return{
            addPlayer: function(playerName){
                var player = {};
                player.name = playerName;
                player.score = 0;
                players.push(player);
              },
            getPlayers: function(){
                return players;
              }
          };
      });


angular.module('MonkeysApp').controller('MainCtrl', function ($scope, api) {
        $scope.players = api.getPlayers();
        $scope.addPlayer = function(player){
            api.addPlayer(player);
            $scope.newplayer = '';
          };

          $scope.$on('ret_key', function(event, player) {
             api.addPlayer($scope.newplayer);
             $scope.newplayer = '';
          $scope.$apply();
        });

      });


angular.module('MonkeysApp').controller('PlayCtrl', function ($scope, api) {
        $scope.players = api.getPlayers();

        $scope.currentPlayer = 0;
        $scope.round = 1;

        $scope.score = $scope.players[$scope.currentPlayer].score;
        $scope.player = $scope.players[$scope.currentPlayer].name;

        $scope.nextPlayer = function(){
              $scope.currentPlayer ++;
            };



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

        $scope.$on('makey', function(event, value) {$scope.score = $scope.players[$scope.currentPlayer].score;

          var players = api.getPlayers();
          log(players);
          $scope.monkeys[value].state = !$scope.monkeys[value].state;
          $scope.players[$scope.currentPlayer].score += 100;
          log("Score: " + players[$scope.currentPlayer].score);
          $scope.score = players[$scope.currentPlayer].score;
          $scope.round = 1;
          $scope.player = players[$scope.currentPlayer].name;
          $scope.$apply();
        });





      });
