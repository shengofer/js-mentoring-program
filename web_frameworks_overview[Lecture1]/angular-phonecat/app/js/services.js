'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);


phonecatServices.factory('localStorageService',[ function(){

    return {
        submit : function (key, value) {
            return localStorage.setItem(key, JSON.stringify(value));
        },

        getItem : function (key){
            var retrievedData = localStorage.getItem(key);
            var parsedData = JSON.parse(retrievedData);
            return parsedData;
        },
        isKey: function(key){
            return localStorage.getItem(key) !== null;
        }
    }
}]);



