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
              "hora": "12:20",
              "id_pessoa": "1"
            },
            {
              "id": "2",
              "nome": "Caio Barbosa",
              "texto": "Tudo bem, se não estiver bem vai estar mal?",
              "hora": "12:20",
              "id_pessoa": "1"
            },
            {
              "id": "3",
              "nome": "Cíntia Elisabete",
              "texto": "Oi, tudo sim e você, fiquei sabendo que voce é brasileira",
              "hora": "12:24",
              "id_pessoa": "2"
            },
            {
              "id": "4",
              "nome": "Caio Barbosa de Almeida",
              "texto": "To bem tbm, e sou da africa.",
              "hora": "12:26",
              "id_pessoa": "1"
            },
            {
              "id": "5",
              "nome": "Caio Barbosa de Almeida",
              "texto": "Então... Estou com um problema e queria saber de vocês qual a providencia que devo tomar, porque já fazem 30 dias que ando reclamando com vocês e nada de vocês me ajudarem.",
              "hora": "12:39",
              "id_pessoa": "1"
            }
          ]
        }
      },
      {
        "dia": "30/01/2018",
        "conversas": {
          "mensagens": [
            {
              "id": "6",
              "nome": "Caio Barbosa",
              "texto": "Oi",
              "hora": "12:20",
              "id_pessoa": "1"
            },
            {
              "id": "7",
              "nome": "Caio Barbosa",
              "texto": "Tudo bem?",
              "hora": "12:20",
              "id_pessoa": "1"
            },
            {
              "id": "8",
              "nome": "Cíntia Elisabete",
              "texto": "Oi, tudo sim e você",
              "hora": "12:24",
              "id_pessoa": "2"
            },
            {
              "id": "9",
              "nome": "Caio Barbosa de Almeida",
              "texto": "To bem tbm.",
              "hora": "12:26",
              "id_pessoa": "1"
            },
            {
              "id": "10",
              "nome": "Caio Barbosa de Almeida",
              "texto": "Então... Estou com um problema e queria saber de vocês qual a providencia que devo tomar, porque já fazem 30 dias que ando reclamando com vocês e nada de vocês me ajudarem.",
              "hora": "12:39",
              "id_pessoa": "1"
            }
          ]
        }
      }
    ]
  };
  // \d\d/\d\d/\d\d\s\d\d\:\d\d
  // var texto = '08/02/18 14:42 - Caio Barbosa De Almeida: . 08/02/18 14:42 - Caio Barbosa De Almeida: Ja cheguei 08/02/18 14:42 - Caio Barbosa De Almeida: <Arquivo de mídia oculto> 08/02/18 14:43 - Caio Barbosa De Almeida: <Arquivo de mídia oculto> 08/02/18 14:50 - Pai Novo: <Arquivo de mídia oculto> 08/02/18 14:52 - Caio Barbosa De Almeida: Ta bom 08/02/18 15:10 - Pai Novo: Chamada de voz perdida';
  // console.log(texto);
  // var re = new RegExp('\d{2}\/\d{2}\/\d{2}') ;
  // var linhas = texto.split(/\d{2}\/\d{2}\/\d{2}\s\d{2}\:\d{2}/g);
  // linhas.shift();
  // console.log(linhas);
  // var teste = '1234567898';
  //
  // // alert(teste.match(/.{1,8}/g));        // Devolve: 12345678,98
  // console.log(texto.match(/\d{2}\/\d{2}\/\d{2}\s\d{2}\:\d{2}/g));
  // var teste1 = texto.match(/\d{2}\/\d{2}\/\d{2}\s\d{2}\:\d{2}/g);
  // var resultado1 = texto.split(teste1[0]);

  // console.log(resultado1);
  var texto = '08/02/18 14:42 - Caio Barbosa De Almeida: . 08/02/18 14:42 - Caio Barbosa De Almeida: Ja cheguei 08/02/18 14:42 - Caio Barbosa De Almeida: <Arquivo de mídia oculto> 08/02/18 14:43 - Caio Barbosa De Almeida: <Arquivo de mídia oculto> 08/02/18 14:50 - Pai Novo: <Arquivo de mídia oculto> 08/02/18 14:52 - Caio Barbosa De Almeida: Ta bom 08/02/18 15:10 - Pai Novo: Chamada de voz perdida';
  $scope.conversacao = [];
  let renderiza = function(){
    var _data = texto.match(/\d{2}\/\d{2}\/\d{2}\s\d{2}\:\d{2}/g);
    var data = _data.filter(function(este, i) {
      return _data.indexOf(este) == i;
    })
    // console.log(data);
    for(var i = 0; i < data.length; i++){
      var conversa_data = texto.split(data[i]);
      // console.log(texto.split(data[i]));
      conversa_data.shift();
      var mensagens = [];
      for(var r = 0; r < conversa_data.length; r++){
        mensagens.push({'texto': conversa_data[r], 'hora': data[i].match(/\d{2}\:\d{2}/g)[0]});
      }
      mensagens[mensagens.length-1].texto = mensagens[mensagens.length-1].texto.split(/\d{2}\/\d{2}\/\d{2}\s\d{2}\:\d{2}/g)[0];
      // console.log(mensagens[mensagens.length-1].texto.split(/\d{2}\/\d{2}\/\d{2}\s\d{2}\:\d{2}/g)[0]);
      $scope.conversacao.push({'dia': data[i].match(/\d{2}\/\d{2}\/\d{2}/g)[0], 'conversas': {'mensagens': mensagens}});
    }
    // var conversa_data = texto.split(teste1[0]);
  };
  renderiza();
  console.log($scope.conversacao);
});
