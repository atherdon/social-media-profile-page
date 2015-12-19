angular
.module('app')
.controller('profileCtrl', ['$scope', '$rootScope', 'search', function($scope, $rootScope, search) {
  $scope.name = $rootScope.name;
  $scope.result = search.getActivity($scope.name);
  $scope.friends = search.getFriends($scope.name);
  $scope.addActivity = function(act){
      search.addActivity($scope.name, act)
      $scope.result = search.getActivity($scope.name);
      $scope.act ='';
  }

}]);
