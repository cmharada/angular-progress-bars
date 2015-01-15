angular.module("angFarm")
  .controller("ProgressCtrl", ["$scope", function($scope){
    $scope.game = {
      money: 1000
    };
    $scope.progress = 0;
    $scope.now = Date.now();

    $scope.plots = [
      {
        unlocked: true,
        price: 0,
        crop: null
      }
    ];

    for (var i = 1; i < 25; i++) {
      $scope.plots.push({
        unlocked: false,
        price: 100 * i,
        crop: null
      });
    }

    $scope.crops = [
      {
        name: "Beans",
        maxProgress: 3,
        value: 1
      },
      {
        name: "Corn",
        maxProgress: 5,
        value: 10
      },
      {
        name: "Wheat",
        maxProgress: 100,
        value: 100
      }
    ];
  }])
  .controller("PlotCtrl", ["$scope", function($scope){
    $scope.progress = 0;
    $scope.state = "EMPTY";

    $scope.$watch("now", function(newValue, oldValue) {
      if ($scope.plot.crop) {
        var diffMillis = newValue - oldValue;
        $scope.progress += diffMillis * 0.001;
        if ($scope.plot.crop && $scope.progress > $scope.crop.maxProgress) {
          $scope.progress = $scope.crop.maxProgress;
        }
      }
    });

    $scope.percent = function() {
      if ($scope.plot.crop) {
        return $scope.progress / $scope.crop.maxProgress * 100;
      } else {
        return 0;
      }
    };

    $scope.clickPlot = function() {
      if (!$scope.plot.unlocked) {
        $scope.unlock();
      } else if ($scope)
    };

    $scope.unlock = function() {
      if ($scope.game.money >= $scope.plot.price) {
        $scope.game.money -= $scope.plot.price;
        $scope.plot.unlocked = true;
      }
    };

    $scope.harvest = function() {
      if ($scope.progress >= $scope.crop.maxProgress) {
        $scope.progress = 0;
        $scope.game.money += $scope.crop.value;
      }
    };
  }]);