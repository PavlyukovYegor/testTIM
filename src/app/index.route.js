(function() {
  'use strict';

  angular
    .module('testTim')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'CommentsController',
        controllerAs: 'main'

      });

    $urlRouterProvider.otherwise('/');
  }

})();
