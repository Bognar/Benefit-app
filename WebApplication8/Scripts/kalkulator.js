angular
.module("app", [])
.controller("addCtrl", function ($scope) {
    $scope.n1 = 1;
    $scope.n2 = 1;
    $scope.add = function (a, b) { return Math.abs(a / b); }
});