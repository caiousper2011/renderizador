angular.module(["renderizador"]).controller('conversaController', function ($scope, $location) {
  $scope.novoUpload = function(){
    console.log('clicado');
    $location.path('/');
  }
});
