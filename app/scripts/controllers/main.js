//

'use strict';

function log(entry){
    if( console && console.log ) {
            console.log(entry);
    }
}



angular.module('MonkeysApp').factory('api', function(){
        var players = [];
        var currentPlayer = 0;
        return{
            addPlayer: function(playerName){
                var player = {};
                player.name = playerName;
                player.score = 0;
                players.push(player);
              },
            getPlayers: function(){
                return players;
              },
              nextPlayer: function(){
                if(players.length  > currentPlayer){
                  currentPlayer++;
                }else{
                  currentPlayer = 0;
                }

              },
              currentPlayer: function(){
                return currentPlayer;
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

        $scope.currentPlayer = api.currentPlayer();
        $scope.round = 1;

        $scope.score = $scope.players[$scope.currentPlayer].score;
        $scope.player = $scope.players[$scope.currentPlayer].name;

        $scope.nextPlayer = function(){
              api.nextPlayer();
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

        $scope.$on('makey', function(event, value) {
          log($scope.currentPlayer);
            var players = api.getPlayers();
            if($scope.monkeys[value]){
              $scope.monkeys[value].state = !$scope.monkeys[value].state;
            }

            $scope.players[$scope.currentPlayer].score += 100;
            $scope.score = players[$scope.currentPlayer].score;
            $scope.round = 1;
            $scope.player = players[$scope.currentPlayer].name;
            $scope.$apply();
        });


          $scope.$on('next_player', function(event, player) {
            log("Next player: " + api.currentPlayer());
            api.nextPlayer();
            $scope.currentPlayer = api.currentPlayer();
            log("Next player: " + api.currentPlayer());
          $scope.$apply();
        });




      });
