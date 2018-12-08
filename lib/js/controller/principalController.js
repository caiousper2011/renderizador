angular.module(["renderizador"]).controller('principalController', function ($scope, $location, $rootScope) {

  $scope.documentoEnviado = function(){
    console.log('clicado');
    // $location.path('/conversa/');
  }
  $scope.arquivoEnviado = function(){
    console.log('mudou');
    console.log($scope.arquivo);
  }
  $('#arquivo').change(function(){
    var fileTobeRead = document.getElementById('arquivo').files[0];
    var fileReader = new FileReader();
    fileReader.onload = function (e) {
      // console.log(fileReader.result);
      $rootScope.texto = fileReader.result;
      //console.log($rootScope);
      window.location.href = window.location.origin + "/renderizador/#/conversa/";
      $location.path('/conversa/');
    }
    fileReader.readAsText(fileTobeRead);
  });
});
