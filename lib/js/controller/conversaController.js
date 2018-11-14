angular.module(["renderizador"]).controller('conversaController', function ($scope, $location) {
  $scope.novoUpload = function(){
    console.log('clicado');
    $location.path('/');
  }
  $scope.conversas =
  {
  "conversa": [
    {
      "dia": "29/01/2018",
      "conversas": {
        "mensagens": [
          {
            "id": "1",
            "nome": "Caio Barbosa",
            "texto": "Oi caio barbosa, voce ta bem",
            "hora": "12:20"
          },
          {
            "id": "1",
            "nome": "Caio Barbosa",
            "texto": "Tudo bem, se não estiver bem vai estar mal?",
            "hora": "12:20"
          },
          {
            "id": "2",
            "nome": "Cíntia Elisabete",
            "texto": "Oi, tudo sim e você, fiquei sabendo que voce é brasileira",
            "hora": "12:24"
          },
          {
            "id": "1",
            "nome": "Caio Barbosa de Almeida",
            "texto": "To bem tbm, e sou da africa.",
            "hora": "12:26"
          },
          {
            "id": "1",
            "nome": "Caio Barbosa de Almeida",
            "texto": "Então... Estou com um problema e queria saber de vocês qual a providencia que devo tomar, porque já fazem 30 dias que ando reclamando com vocês e nada de vocês me ajudarem.",
            "hora": "12:39"
          }
        ]
      }
    },
    {
      "dia": "30/01/2018",
      "conversas": {
        "mensagens": [
          {
            "id": "1",
            "nome": "Caio Barbosa",
            "texto": "Oi",
            "hora": "12:20"
          },
          {
            "id": "1",
            "nome": "Caio Barbosa",
            "texto": "Tudo bem?",
            "hora": "12:20"
          },
          {
            "id": "2",
            "nome": "Cíntia Elisabete",
            "texto": "Oi, tudo sim e você",
            "hora": "12:24"
          },
          {
            "id": "1",
            "nome": "Caio Barbosa de Almeida",
            "texto": "To bem tbm.",
            "hora": "12:26"
          },
          {
            "id": "1",
            "nome": "Caio Barbosa de Almeida",
            "texto": "Então... Estou com um problema e queria saber de vocês qual a providencia que devo tomar, porque já fazem 30 dias que ando reclamando com vocês e nada de vocês me ajudarem.",
            "hora": "12:39"
          }
        ]
      }
    }
  ]
};
console.log($scope.conversas.conversa);
for (var i = 0; i < $scope.conversas.conversa.length; i++) {
  console.log($scope.conversas.conversa[i]);
}
});
