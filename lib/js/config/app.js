angular.module("renderizador", ["ngRoute"]).config(['$locationProvider', function ($locationProvider) {
  $locationProvider.hashPrefix('');
}])
