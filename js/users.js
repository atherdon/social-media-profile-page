angular
.module('app')
.controller('usersCtrl', ['$scope', '$rootScope', '$state', 'search', function($scope, $rootScope, $state, search) {
    $scope.getname = function(name){
      $rootScope.name = name;
      if (search.getName(name)){
        $state.go('profile');
      }
      $scope.target ='';
    }
}]);
