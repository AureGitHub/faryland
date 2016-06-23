var myApp = angular.module('faryland', ['ngRoute']);


myApp.config(["$routeProvider",
    function($routeProvider) {

        $routeProvider
            .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/about-us', {
            templateUrl: 'views/about-us.html'
        })
         .when('/plates', {
            templateUrl: 'views/plates.html'
        })
         .when('/contact', {
            templateUrl: 'views/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });

    }
]);


myApp.controller("HeaderCtrl", ['$scope','$location', 
    function ($scope,$location) {
        

        $scope.isActive = function (route) {
            return route === $location.path();
        }


        
    }
]);

