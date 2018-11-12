angular.module(["renderizador"]).controller('conversaController', function ($scope, $location) {
  $scope.novoUpload = function(){
    console.log('clicado');
    $location.path('/');
  }
  $scope.conversas =
  {
    "conversa": {
      "29/01/2018": {
        "mensagens": [
          {
            "nome": "Caio Barbosa",
            "texto": "Oi",
            "hora": "12:20"
          },
          {
            "nome": "Caio Barbosa",
            "texto": "Tudo bem?",
            "hora": "12:20"
          },
          {
            "nome": "Cíntia Elisabete",
            "texto": "Oi, tudo sim e você",
            "hora": "12:24"
          },
          {
            "nome": "Caio Barbosa de Almeida",
            "texto": "To bem tbm.",
            "hora": "12:26"
          },
          {
            "nome": "Caio Barbosa de Almeida",
            "texto": "Então... Estou com um problema e queria saber de vocês qual a providencia que devo tomar, porque já fazem 30 dias que ando reclamando com vocês e nada de vocês me ajudarem.",
            "hora": "12:39"
          }
        ]
      },
      "30/01/2018": {
        "mensagens": [
          {
            "nome": "Caio Barbosa",
            "texto": "Oi",
            "hora": "12:20"
          },
          {
            "nome": "Caio Barbosa",
            "texto": "Tudo bem?",
            "hora": "12:20"
          },
          {
            "nome": "Cíntia Elisabete",
            "texto": "Oi, tudo sim e você",
            "hora": "12:24"
          },
          {
            "nome": "Caio Barbosa de Almeida",
            "texto": "To bem tbm.",
            "hora": "12:26"
          },
          {
            "nome": "Caio Barbosa de Almeida",
            "texto": "Então... Estou com um problema e queria saber de vocês qual a providencia que devo tomar, porque já fazem 30 dias que ando reclamando com vocês e nada de vocês me ajudarem.",
            "hora": "12:39"
          }
        ]
      }
    }
  };
console.log($scope.conversas);
});
