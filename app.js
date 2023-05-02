(function () {
    'use strict';
    
    angular.module('myFirstApp',[])

    .controller('MyFirstController', function ($scope) {
        $scope.name = "Cyrus";
        $scope.sayHello = function() {
            return "Hello Coursera!";
        }
    });

})();
s