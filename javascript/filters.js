angular.module("testAppFilters", []).filter("progressFilter", function() {
  return function(progress) {
    return Math.floor(progress) + "%";
  };
});