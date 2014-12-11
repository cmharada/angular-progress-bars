(function(){
  var FPS = 10;
  var app = angular.module("testApp", ["testAppFilters"]);

  app.controller("ProgressCtrl", ["$scope", "$interval", function($scope, $interval){
    $scope.game = {
      score: 0
    };
    $scope.progress = 0;
    $scope.widgets = 0;
    $scope.now = Date.now();

    $interval(function(){
      $scope.now = Date.now();
    }, 1000 / FPS);
  }]);

  app.controller("TaskCtrl", ["$scope", function($scope){
    $scope.progress = 0;
    $scope.maxProgress = 100;

    $scope.$watch("now", function(newValue, oldValue) {
      var diffMillis = newValue - oldValue;
      $scope.progress += diffMillis * 0.01;
      if ($scope.progress > $scope.maxProgress) {
        $scope.game.score += Math.floor($scope.progress / $scope.maxProgress);
        $scope.progress = $scope.progress % $scope.maxProgress;
      }
    });

    $scope.percent = function() {
      return $scope.progress / $scope.maxProgress * 100;
    };
  }]);
}());