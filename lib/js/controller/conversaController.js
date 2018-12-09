angular.module(["renderizador"]).controller('conversaController', function ($scope, $location, $rootScope) {
  if (!$rootScope.texto) {
    $location.path("/");
  }else{
    var texto = $rootScope.texto;
  }
  $scope.novoUpload = function(){
    $location.path('/');
  }
  $scope.copiarMensagem = function(){

  };
  $scope.conversacao = [];
  $scope.conversacao.conversa = [];
  $scope.usuarios = [];
  $scope.data_anterior = "";
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
        var nome = conversa_data[r].split(/\d{2}\/\d{2}\/\d{2}\s\d{2}\:\d{2}/g)[0].match(/\s\-\s.*\:/g)[0];
        nome = nome.substr(3, (nome.length-4));
        nome = nome.split(":")[0];
        var existe = 0;
        var identificador = {};
        for(var l = 0; l < $scope.usuarios.length; l++){
          if ($scope.usuarios[l].nome == nome) {
            existe++;
            identificador = $scope.usuarios[l];
          }
        }
        if(existe==0){
          identificador = {'id': $scope.usuarios.length+1, 'nome': nome};
          $scope.usuarios.push(identificador);

        }
        var mensagem_limpa = ((conversa_data[r].split(/\d{2}\/\d{2}\/\d{2}\s\d{2}\:\d{2}/g)[0]).split(/\s\-\s.*\:/g))[1];
        mensagens.push({'texto': mensagem_limpa, 'hora': data[i].match(/\d{2}\:\d{2}/g)[0], 'nome': identificador.nome, 'id': identificador.id});
      }
      if ($scope.data_anterior != data[i].match(/\d{2}\/\d{2}\/\d{2}/g)[0]) {
        $scope.data_anterior = data[i].match(/\d{2}\/\d{2}\/\d{2}/g)[0];
        $scope.conversacao.conversa.push({'dia': data[i].match(/\d{2}\/\d{2}\/\d{2}/g)[0], 'conversas': {'mensagens': mensagens}});
      }else{
        $scope.conversacao.conversa.push({'dia': '', 'conversas': {'mensagens': mensagens}});
      }


    }
  };
  console.log($scope.usuarios);
  console.log($scope.conversacao);
  renderiza();
  $scope.conversas = $scope.conversacao;
});
