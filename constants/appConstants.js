(function () {
    'use strict';

    angular.module('myApp').constant('GLOBALS', {
        appName: '© 2015 – AutoService APP',
        appVersion: 'Appversie: 1.0.0',
        getCarsUrl: 'https://localhost/phpsamples/htdocs/Year_3/Angular/Oefeningen/autowebapp/phpapi/CRUD/getCars.php',
        getCarUrl: 'https://localhost/phpsamples/htdocs/Year_3/Angular/Oefeningen/autowebapp/phpapi/CRUD/getCar.php/?',
        addCarUrl: 'https://localhost/phpsamples/htdocs/Year_3/Angular/Oefeningen/autowebapp/phpapi/CRUD/addCar.php/?',
        deleteCarUrl: 'https://localhost/phpsamples/htdocs/Year_3/Angular/Oefeningen/autowebapp/phpapi/CRUD/deleteCar.php/?'
    });
})();