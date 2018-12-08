angular.module(["renderizador"]).controller('conversaController', function ($scope, $location, $rootScope) {
  var texto = $rootScope.texto;
  $scope.novoUpload = function(){
    $location.path('/');
  }
  $scope.conversacao = [];
  $scope.conversacao.conversa = []
  let renderiza = function(){
    var _data = texto.match(/\d{2}\/\d{2}\/\d{2}\s\d{2}\:\d{2}/g);
    var data = _data.filter(function(este, i) {
      return _data.indexOf(este) == i;
    })
    for(var i = 0; i < data.length; i++){
      var conversa_data = texto.split(data[i]);
      conversa_data.shift();
      var mensagens = [];
      for(var r = 0; r < conversa_data.length; r++){
        mensagens.push({'texto': conversa_data[r], 'hora': data[i].match(/\d{2}\:\d{2}/g)[0]});
      }
      mensagens[mensagens.length-1].texto = mensagens[mensagens.length-1].texto.split(/\d{2}\/\d{2}\/\d{2}\s\d{2}\:\d{2}/g)[0];
      $scope.conversacao.conversa.push({'dia': data[i].match(/\d{2}\/\d{2}\/\d{2}/g)[0], 'conversas': {'mensagens': mensagens}});
    }
  };
  renderiza();
  $scope.conversas = $scope.conversacao;
});
