'use strict';
var phonecatDirective = angular.module('phonecatDirectives', []);
phonecatDirective.directive('lastPhones', function() {
    return {
        restrict: 'E',

        templateUrl: 'js/directives/lastPhones.html'
    };
});
