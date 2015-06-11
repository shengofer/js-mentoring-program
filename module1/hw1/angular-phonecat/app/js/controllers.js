'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone','localStorageService',
  function($scope, Phone, localStorageService) {
      //paging
      $scope.totalRecordsCount = 0;
      $scope.pageSize = 5;
      $scope.currentPage = 1;
      $scope.lastPhones = localStorageService.getItem('phone');

      init();
      function init(){
          getPhones($scope.pageSize, $scope.currentPage);
          var a = "qwe";
      }

      function getPhones(sizePage, currPage){
          Phone.query({},function(res){
              var phones = res.slice(((currPage-1) * sizePage ), (currPage * sizePage));
              $scope.phones = phones;
              $scope.totalRecordsCount =  res.length;
          });
      };

      $scope.pageChanged = function (page) {
          $scope.currentPage = page;
          getPhones($scope.pageSize, $scope.currentPage);
      };

      $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone','localStorageService',
    function($scope, $routeParams, Phone, localStorageService) {
        var phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
            addLastPhone(phone);
        });

        $scope.phone = phone;

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }

        function addLastPhone(phone){
            if(localStorageService.isKey('phone')){
                var lastPhone = localStorageService.getItem('phone');
                if(lastPhone.length > 5){
                    lastPhone.pop();
                }
                lastPhone.unshift(phone);
                localStorageService.submit('phone',lastPhone);
            }
            else {
                var lastPhone = [];
                lastPhone.unshift(phone);
                localStorageService.submit('phone',lastPhone)
            }

        };

    }]);


