var app = angular.module("app",[]);

app.controller("PruebaController",['$scope', '$timeout', function($scope, $timeout) {
   $scope.evento = "NO";
   
   $timeout(function(){
       $scope.evento = "SIIII";
   }, 5000);
}]);


