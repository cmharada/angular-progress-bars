angular.module("testApp")
  .filter("progressFilter", function() {
    return function(progress) {
      return Math.floor(progress) + "%";
    };
  })
  .filter("progressBarFilter", function() {
    return function(progress) {
      return progress + "%";
    };
  });