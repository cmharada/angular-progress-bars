angular.module("angFarm")
  .filter("progressFilter", function() {
    return function(progress) {
      if (progress < 100) {
        return Math.floor(progress) + "%";
      } else {
        return "100% (click to harvest)";
      }
    };
  })
  .filter("progressBarFilter", function() {
    return function(progress) {
      return progress + "%";
    };
  });