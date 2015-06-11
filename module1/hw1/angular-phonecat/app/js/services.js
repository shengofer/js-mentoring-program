'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
    function ($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
        });
    }]);


phonecatServices.factory('localStorageService', [function () {

    return {
        setItem: function (key, value) {
            return localStorage.setItem(key, JSON.stringify(value));
        },

        getItem: function (key) {
            var retrievedData = localStorage.getItem(key);
            var parsedData = JSON.parse(retrievedData);
            return parsedData;
        },
        hasKey: function (key) {
            return localStorage.getItem(key) !== null;
        }
    }
}]);

phonecatServices.factory('latestPhoneService', ['localStorageService', function (localStorageService,LATEST_PHONES) {
    var latestPhone = localStorageService.getItem(LATEST_PHONES);
    return {
        addLastPhone: function (phone) {
            if (localStorageService.hasKey(LATEST_PHONES)) {
                var lastPhone = localStorageService.getItem(LATEST_PHONES);
                if (lastPhone.length > 4) {
                    lastPhone.pop();
                }
                lastPhone.unshift(phone);
                localStorageService.setItem(LATEST_PHONES, lastPhone);
            }
            else {
                var lastPhone = [];
                lastPhone.unshift(phone);
                localStorageService.setItem(LATEST_PHONES, lastPhone)
            }
            return localStorageService.getItem(LATEST_PHONES)
        }
    }
}]);



