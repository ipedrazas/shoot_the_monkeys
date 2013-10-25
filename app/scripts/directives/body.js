        'use strict';



angular.module('MonkeysApp').directive('body', function () {
    return {
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                element.bind('keydown', function(event) {

                        var convertKeyCode = function(keyCode) {

                        switch(keyCode) {
                                case 78:
                                    return 6;
                                case 13:
                                    return 5;
                                case 37:
                                    return 0;
                                case 38:
                                    return 1;
                                case 39:
                                    return 2;
                                case 40:
                                    return 3;
                                default:
                                    return 4;
                            }
                        };

                        console.log(event.keyCode);
                        var monkey = convertKeyCode(event.keyCode);
                        if (monkey !== 4){
                          scope.$broadcast('makey', monkey);
                          if (monkey === 5){
                            scope.$broadcast('ret_key', monkey);
                          }
                          if (monkey === 6){
                            scope.$broadcast('next_player', monkey);
                          }

                        }

                      });
              }
    };
  });
