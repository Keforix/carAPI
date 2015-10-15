(function () {
    'use strict';

    angular.module('myApp', ['ngRoute']).config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/Default_view.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        }).when('/home', {
            templateUrl: 'views/Default_view.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        }).when('/detail/:id', {
            templateUrl: 'views/Detail_view.html',
            controller: 'detailController',
            controllerAs: 'detailCtrl'
        }).when('/partners', {
            templateUrl: 'views/Partners_view.html',
            controller: 'partnersController',
            controllerAs: 'partnersCtrl'
        }).when('/delete', {
            templateUrl: 'views/Default_view.html',
            controller: 'deleteController',
            controllerAs: 'delCtrl'
        }).when('/add', {
            templateUrl: 'views/Add_view.html',
            controller: 'addController',
            controllerAs: 'addCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    }
})();