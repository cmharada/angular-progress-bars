(function(){
  var app = angular.module("testApp", []);

  app.controller("countController", ["$scope", "$timeout", function($scope, $timeout){
    $scope.progress = 0;
    $scope.widgets = 0;

    $scope.gameLoop = function(loops) {
      $scope.progress += loops * 1;
      if ($scope.progress > 100) {
        $scope.widgets += Math.floor($scope.progress / 100);
        $scope.progress = $scope.progress % 100;
      }
      if (document.hasFocus()) {
        $timeout(function() {
          $scope.gameLoop(1);
        }, 1000 / 10);
      } else {
        $timeout(function() {
          $scope.gameLoop(10);
        }, 1000);
      }
    };

    $timeout($scope.gameLoop(1), 10);
  }]);
}());