(function(){
  var app = angular.module("testApp", ["testAppFilters", "testAppDirectives"]);

  app.controller("ProgressCtrl", ["$scope", function($scope){
    $scope.game = {
      score: 0
    };
    $scope.progress = 0;
    $scope.widgets = 0;
    $scope.now = Date.now();

    $scope.products = [
      {
        name: "First Bar",
        maxProgress: 3,
        value: 1
      },
      {
        name: "Second Bar",
        maxProgress: 5,
        value: 10
      }
    ];
  }]);

  app.controller("TaskCtrl", ["$scope", function($scope){
    $scope.progress = 0;

    $scope.$watch("now", function(newValue, oldValue) {
      var diffMillis = newValue - oldValue;
      $scope.progress += diffMillis * 0.001;
      if ($scope.progress > $scope.product.maxProgress) {
        $scope.game.score += Math.floor($scope.progress / $scope.product.maxProgress) * $scope.product.value;
        $scope.progress = $scope.progress % $scope.product.maxProgress;
      }
    });

    $scope.percent = function() {
      return $scope.progress / $scope.product.maxProgress * 100;
    };
  }]);
}());