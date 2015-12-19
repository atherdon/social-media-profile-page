angular
  .module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/users');
    $stateProvider
        .state('users', {
            url: '/users',
            templateUrl: 'html/users.html',
            controller: 'usersCtrl'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'html/profile.html',
            controller: 'profileCtrl'
        })
  });