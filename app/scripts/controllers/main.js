//

'use strict';


angular.module('MonkeysApp').factory('api', function(){
        var players = [];
        return{
            addPlayer: function(player){
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

        $scope.$on('ret_key', function(event, player) {
             api.addPlayer($scope.newplayer);
             $scope.newplayer = '';
          $scope.$apply();
        });

      });
