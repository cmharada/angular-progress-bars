angular.module("angFarm").directive("tick", function() {
  return {
    controller: function($scope, $interval) {
      var FPS = 10;
      $scope.now = Date.now();

      $interval(function(){
        $scope.now = Date.now();
      }, 1000 / FPS);
    },
    restrict: "A"
  };
});