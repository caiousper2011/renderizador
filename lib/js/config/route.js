angular.module("renderizador").config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "view/principal.html",
    controller: "principalController"
  })
  .when("/conversa/", {
    templateUrl: "view/conversa.html",
    controller: "conversaController"
  })
  .otherwise({redirectTo: "/"});
});
