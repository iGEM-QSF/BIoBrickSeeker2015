'use strict';

angular.module('iGemPlates2015App')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('2015_kitplates.json').success( function(data, status, headers, config) {
        console.log(data)
        $scope.entries = data;
    });
  });

angular.module('iGemPlates2015App').filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
