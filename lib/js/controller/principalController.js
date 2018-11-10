angular.module(["renderizador"]).controller('principalController', function ($scope, $location) {
  $scope.documentoEnviado = function(){
    console.log('clicado');
    $location.path('/conversa/');
  }
});
