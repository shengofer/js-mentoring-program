'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$q', 'Phone', 'localStorageService',
    function ($scope, $q, Phone, localStorageService, LATEST_PHONES) {
        //paging
        $scope.totalRecordsCount = 0;
        $scope.pageSize = 5;
        $scope.currentPage = 1;
        $scope.lastPhones = localStorageService.getItem(LATEST_PHONES);

        init();
        function init() {
            setPhoneToScope();
        }

        function getPhoneFromServer() {
            var deferred = $q.defer();
            Phone.query({}, function (res) {
                if (res) {
                    deferred.resolve(res);
                }
                else {
                    deferred.reject("error");
                }
            });
            return deferred.promise;
        }

        function setPhoneToScope() {
            var sizePage = $scope.pageSize;
            var currPage = $scope.currentPage;
            getPhoneFromServer().then(function (res) {
                var phones = res.slice(((currPage - 1) * sizePage ), (currPage * sizePage));
                $scope.phones = phones;
                $scope.totalRecordsCount = res.length;
            });
        };

        $scope.pageChanged = function (page) {
            $scope.currentPage = page;
            getPhones($scope.pageSize, $scope.currentPage);
        };

        $scope.orderProp = 'age';
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', 'latestPhoneService',
    function ($scope, $routeParams, Phone, latestPhoneService, LATEST_PHONES) {
        var phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
            $scope.mainImageUrl = phone.images[0];
            latestPhoneService.addLastPhone(phone);
        });

        $scope.phone = phone;

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };


    }]);


