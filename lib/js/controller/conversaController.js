angular.module(["renderizador"]).controller('conversaController', function ($scope, $location, $rootScope) {
  var texto = $rootScope.texto;
  $scope.novoUpload = function(){
    $location.path('/');
  }
  // $scope.conversas =
  // {
  //   "conversa": [
  //     {
  //       "dia": "29/01/2018",
  //       "conversas": {
  //         "mensagens": [
  //           {
  //             "id": "1",
  //             "nome": "Caio Barbosa",
  //             "texto": "Oi caio barbosa, voce ta bem",
  //             "hora": "12:20",
  //             "id_pessoa": "1"
  //           },
  //           {
  //             "id": "2",
  //             "nome": "Caio Barbosa",
  //             "texto": "Tudo bem, se não estiver bem vai estar mal?",
  //             "hora": "12:20",
  //             "id_pessoa": "1"
  //           },
  //           {
  //             "id": "3",
  //             "nome": "Cíntia Elisabete",
  //             "texto": "Oi, tudo sim e você, fiquei sabendo que voce é brasileira",
  //             "hora": "12:24",
  //             "id_pessoa": "2"
  //           },
  //           {
  //             "id": "4",
  //             "nome": "Caio Barbosa de Almeida",
  //             "texto": "To bem tbm, e sou da africa.",
  //             "hora": "12:26",
  //             "id_pessoa": "1"
  //           },
  //           {
  //             "id": "5",
  //             "nome": "Caio Barbosa de Almeida",
  //             "texto": "Então... Estou com um problema e queria saber de vocês qual a providencia que devo tomar, porque já fazem 30 dias que ando reclamando com vocês e nada de vocês me ajudarem.",
  //             "hora": "12:39",
  //             "id_pessoa": "1"
  //           }
  //         ]
  //       }
  //     },
  //     {
  //       "dia": "30/01/2018",
  //       "conversas": {
  //         "mensagens": [
  //           {
  //             "id": "6",
  //             "nome": "Caio Barbosa",
  //             "texto": "Oi",
  //             "hora": "12:20",
  //             "id_pessoa": "1"
  //           },
  //           {
  //             "id": "7",
  //             "nome": "Caio Barbosa",
  //             "texto": "Tudo bem?",
  //             "hora": "12:20",
  //             "id_pessoa": "1"
  //           },
  //           {
  //             "id": "8",
  //             "nome": "Cíntia Elisabete",
  //             "texto": "Oi, tudo sim e você",
  //             "hora": "12:24",
  //             "id_pessoa": "2"
  //           },
  //           {
  //             "id": "9",
  //             "nome": "Caio Barbosa de Almeida",
  //             "texto": "To bem tbm.",
  //             "hora": "12:26",
  //             "id_pessoa": "1"
  //           },
  //           {
  //             "id": "10",
  //             "nome": "Caio Barbosa de Almeida",
  //             "texto": "Então... Estou com um problema e queria saber de vocês qual a providencia que devo tomar, porque já fazem 30 dias que ando reclamando com vocês e nada de vocês me ajudarem.",
  //             "hora": "12:39",
  //             "id_pessoa": "1"
  //           }
  //         ]
  //       }
  //     }
  //   ]
  // };
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
  // var texto = "08/02/18 14:42 - Caio Barbosa De Almeida: .  08/02/18 14:42 - Caio Barbosa De Almeida: Ja cheguei  08/02/18 14:42 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  08/02/18 14:43 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  08/02/18 14:50 - Pai Novo: <Arquivo de mídia oculto>  08/02/18 14:52 - Caio Barbosa De Almeida: Ta bom  08/02/18 15:10 - Pai Novo: Chamada de voz perdida  08/02/18 15:15 - Caio Barbosa De Almeida: Ja to saindo daqui ja  08/02/18 15:24 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  08/02/18 15:25 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  08/02/18 15:25 - Pai Novo: <Arquivo de mídia oculto>  08/02/18 15:26 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  08/02/18 15:26 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  08/02/18 15:26 - Pai Novo: <Arquivo de mídia oculto>  08/02/18 15:27 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  08/02/18 15:27 - Pai Novo: <Arquivo de mídia oculto>  08/02/18 15:34 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  08/02/18 15:34 - Pai Novo: <Arquivo de mídia oculto>  09/02/18 20:51 - Pai Novo: Chamada de voz perdida  10/02/18 06:33 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  10/02/18 06:34 - Pai Novo: <Arquivo de mídia oculto>  10/02/18 06:37 - Caio Barbosa De Almeida: Ta bom  10/02/18 20:40 - Pai Novo: <Arquivo de mídia oculto>  10/02/18 20:40 - Pai Novo: Chamada de voz perdida  10/02/18 20:43 - Caio Barbosa De Almeida: Ta bom  10/02/18 20:44 - Caio Barbosa De Almeida: Ja vo  10/02/18 20:44 - Pai Novo: <Arquivo de mídia oculto>  11/02/18 15:30 - Pai Novo: <Arquivo de mídia oculto>  11/02/18 15:31 - Pai Novo: <Arquivo de mídia oculto>  11/02/18 15:31 - Pai Novo: <Arquivo de mídia oculto>  11/02/18 15:35 - Caio Barbosa De Almeida: Ta bom  11/02/18 15:38 - Pai Novo: <Arquivo de mídia oculto>  11/02/18 15:45 - Caio Barbosa De Almeida: Ta bom  11/02/18 16:38 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  11/02/18 16:38 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  11/02/18 16:43 - Caio Barbosa De Almeida: .  11/02/18 16:44 - Pai Novo: <Arquivo de mídia oculto>  11/02/18 16:45 - Pai Novo: Chamada de voz perdida  11/02/18 16:48 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  11/02/18 16:49 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  11/02/18 16:49 - Pai Novo: <Arquivo de mídia oculto>  11/02/18 16:49 - Pai Novo: <Arquivo de mídia oculto>  11/02/18 16:50 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  11/02/18 16:50 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>  11/02/18 16:50 - Caio Barbosa De Almeida: <Arquivo de mídia oculto>";
  // var texto = "02/12/17 10:16 - Amor🐻🐻🐻🐻: Fica a 1 min a pe 02/12/17 10:16 - Cintia Elisabete: Ah então blz 02/12/17 10:16 - Cintia Elisabete: Tô chegando lá 02/12/17 10:16 - Amor🐻🐻🐻🐻: Ta bom 02/12/17 10:16 - Amor🐻🐻🐻🐻: Ja chegou na estacal? 02/12/17 10:17 - Cintia Elisabete: Já peguei o busão já 02/12/17 10:17 - Cintia Elisabete: Vou descer agora 02/12/17 10:17 - Cintia Elisabete: Mow longe a pé 02/12/17 10:18 - Cintia Elisabete: <Mídia omitida> 02/12/17 10:23 - Amor🐻🐻🐻🐻: Eh bonito ai? 02/12/17 10:24 - Amor🐻🐻🐻🐻: Ja chegou? 02/12/17 10:24 - Amor🐻🐻🐻🐻: Parece ser profissional bom? 02/12/17 10:24 - Amor🐻🐻🐻🐻: Ta com sono ou animada? 02/12/17 10:42 - Cintia Elisabete: Muito top 02/12/17 10:42 - Cintia Elisabete: Chique sabe 02/12/17 10:42 - Cintia Elisabete: Tô fazendo o teste 02/12/17 10:42 - Cintia Elisabete: Vc tá onde ? 02/12/17 10:42 - Amor🐻🐻🐻🐻: Carai 02/12/17 10:43 - Amor🐻🐻🐻🐻: Manda foto ae muie 02/12/17 10:43 - Amor🐻🐻🐻🐻: Vai ficar do jeito que vc quer? 02/12/17 10:43 - Cintia Elisabete: <Mídia omitida> 02/12/17 10:43 - Amor🐻🐻🐻🐻: To aqui na rua esperando meu pai vir de casa 02/12/17 10:43 - Cintia Elisabete: Tô com o teste 02/12/17 10:43 - Amor🐻🐻🐻🐻: Kd? 02/12/17 10:43 - Cintia Elisabete: <Mídia omitida> 02/12/17 10:43 - Cintia Elisabete: Ai o papel alumínio 02/12/17 10:44 - Amor🐻🐻🐻🐻: E agr? 02/12/17 10:44 - Amor🐻🐻🐻🐻: O ligar eh fodao msm ein kkkkkkk 02/12/17 10:44 - Cintia Elisabete: Tem que esperar vê se abre 02/12/17 10:44 - Cintia Elisabete: É chique aqui 02/12/17 10:44 - Cintia Elisabete: Aff que ansiedade 02/12/17 10:44 - Amor🐻🐻🐻🐻: Abre oq? 02/12/17 10:44 - Cintia Elisabete: Senhor do céu 02/12/17 10:44 - Cintia Elisabete: Abre a cor no cabelo 02/12/17 10:45 - Cintia Elisabete: Vc tá onde 02/12/17 10:45 - Amor🐻🐻🐻🐻: Q cor? 02/12/17 10:45 - Amor🐻🐻🐻🐻: Ja viu a cor? 02/12/17 10:46 - Cintia Elisabete: Não Daki 40 minutos 02/12/17 10:46 - Cintia Elisabete: Ai que ansiedade 02/12/17 10:46 - Cintia Elisabete: Onde vc tá ? 02/12/17 10:46 - Amor🐻🐻🐻🐻: Slc mal demora 02/12/17 10:51 - Cintia Elisabete: Sim Demora pra carai 02/12/17 10:51 - Cintia Elisabete: Ela disse que se der certo vou sair 18:00 02/12/17 10:51 - Amor🐻🐻🐻🐻: Ta bom 02/12/17 10:52 - Amor🐻🐻🐻🐻: Ai vai fazer msm eh? 02/12/17 11:01 - Cintia Elisabete: Se ficar da cor 02/12/17 11:01 - Cintia Elisabete: Estamos esperando 02/12/17 11:01 - Cintia Elisabete: Abrir 02/12/17 11:01 - Cintia Elisabete: Vc tá onde ? 02/12/17 11:01 - Cintia Elisabete: ? 02/12/17 11:01 - Cintia Elisabete: ? 02/12/17 11:01 - Cintia Elisabete: ? 02/12/17 11:08 - Cintia Elisabete: Tá ficando 02/12/17 11:25 - Cintia Elisabete: Traz 02/12/17 11:25 - Cintia Elisabete: Uma caixa de leite pra mim se foi 02/12/17 11:25 - Cintia Elisabete: No Carrefour e tiver dinheiro 02/12/17 11:25 - Cintia Elisabete: Ai saco e te dou amor 02/12/17 11:30 - Amor🐻🐻🐻🐻: <Mídia omitida> 02/12/17 11:30 - Amor🐻🐻🐻🐻: <Mídia omitida> 02/12/17 11:30 - Cintia Elisabete: Tá bom amor 02/12/17 11:31 - Cintia Elisabete: Não tá pronto mas ela me mostrou e tá ficando loiro 02/12/17 11:31 - Cintia Elisabete: Totalmente diferente 02/12/17 11:31 - Cintia Elisabete: Do vermelho que a mulher fez 02/12/17 11:31 - Cintia Elisabete: Tá bom vê aí 02/12/17 11:31 - Cintia Elisabete: Foi alguém com vc ? 02/12/17 11:33 - Cintia Elisabete: Meu cabelo vai ficar lindo 02/12/17 11:33 - Cintia Elisabete: Amanhã nois precisa sair 02/12/17 11:33 - Cintia Elisabete: Amor 02/12/17 11:35 - Cintia Elisabete: O tempo que eles gastam Valor o valor 02/12/17 11:50 - Cintia Elisabete: Mentira 02/12/17 11:50 - Cintia Elisabete: Nada disso 02/12/17 11:50 - Cintia Elisabete: 💔 02/12/17 11:53 - Amor🐻🐻🐻🐻: <Mídia omitida> 02/12/17 11:58 - Amor🐻🐻🐻🐻: <Mídia omitida> 02/12/17 12:22 - Cintia Elisabete: <Mídia omitida> 02/12/17 12:43 - Cintia Elisabete: Amor 02/12/17 12:52 - Cintia Elisabete: Eu ainda falei Carrega o Cel 02/12/17 12:52 - Cintia Elisabete: Neh 02/12/17 13:17 - Cintia Elisabete: Procura aí na Net amor 02/12/17 13:17 - Cintia Elisabete: Kit reconstrutor truss 02/12/17 13:19 - Amor🐻🐻🐻🐻: Foi 02/12/17 13:19 - Amor🐻🐻🐻🐻: Kd o cabelo muie? 02/12/17 13:20 - Cintia Elisabete: Não fiz 02/12/17 13:20 - Cintia Elisabete: Tô indo pra ai 02/12/17 13:20 - Cintia Elisabete: Não deu pra fazer 02/12/17 13:20 - Cintia Elisabete: Quebro meu cabelo 02/12/17 13:20 - Cintia Elisabete: Ficou igual da sua mãe sabe 02/12/17 13:20 - Cintia Elisabete: Só que meu cabelo é grande 02/12/17 13:20 - Amor🐻🐻🐻🐻: Chamada de voz perdida 02/12/17 13:21 - Amor🐻🐻🐻🐻: Como assim? 02/12/17 13:21 - Cintia Elisabete: <Mídia omitida> 02/12/17 13:21 - Cintia Elisabete: Ai a coe 02/12/17 13:21 - Cintia Elisabete: Cor 02/12/17 13:21 - Cintia Elisabete: Nesses fio 02/12/17 13:22 - Amor🐻🐻🐻🐻: Gostou? 02/12/17 13:21 - Cintia Elisabete: <Mídia omitida> 02/12/17 13:23 - Cintia Elisabete: <Mídia omitida> 02/12/17 13:26 - Cintia Elisabete: Andar só em pé no metrô dia de hoje é foda neh 02/12/17 13:26 - Amor🐻🐻🐻🐻: Oxi 02/12/17 13:26 - Cintia Elisabete: Oxe mesmo vc não presta atenção no que eu falo 02/12/17 13:26 - Amor🐻🐻🐻🐻: TO PERGUNTANDO SE GOSTOU DA COR 02/12/17 13:27 - Amor🐻🐻🐻🐻: Vai fazer isso q ele flw? 02/12/17 13:27 - Cintia Elisabete: Gostei mas não deu pra fazer pq ia estragar meu cabelooo 02/12/17 13:27 - Cintia Elisabete: Procura isso na Net, eu comprei o produto mas mow nota 190 conto 02/12/17 13:28 - Cintia Elisabete: Hje tô muito sem sorte mano 02/12/17 13:28 - Cintia Elisabete: Comprei um suco de milho Veio com gosto de plástico Comprei um panetone Gosto de fermento vai tomar no cu viu🏻";
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
