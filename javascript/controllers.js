angular.module("angFarm")
  .controller("ProgressCtrl", ["$scope", function($scope){
    $scope.game = {
      money: 10
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
      },
      {
        name: "Bar Bar Bar",
        maxProgress: 100,
        value: 100
      }
    ];
  }])
  .controller("TaskCtrl", ["$scope", function($scope){
    $scope.progress = 0;

    $scope.$watch("now", function(newValue, oldValue) {
      var diffMillis = newValue - oldValue;
      $scope.progress += diffMillis * 0.001;
      if ($scope.progress > $scope.product.maxProgress) {
        $scope.progress = $scope.product.maxProgress;
      }
    });

    $scope.percent = function() {
      return $scope.progress / $scope.product.maxProgress * 100;
    };

    $scope.harvest = function() {
      if ($scope.progress >= $scope.product.maxProgress) {
        $scope.progress = 0;
        $scope.game.money += $scope.product.value;
      }
    };
  }]);