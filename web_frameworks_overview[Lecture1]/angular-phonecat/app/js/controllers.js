'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
      //paging
      $scope.totalRecordsCount = 0;
      $scope.pageSize = 5;
      $scope.currentPage = 1;

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

          //$scope.phones = Phone.query();
      };

      $scope.pageChanged = function (page) {
          $scope.currentPage = page;
          getPhones($scope.pageSize, $scope.currentPage);
      };

      $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
