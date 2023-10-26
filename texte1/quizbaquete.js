var tempoLimite = 5;
var contador = tempoLimite;
var temporizador;
var respostas = [];
var pontos = 0;
var pontosPerdidos = -2;
var perguntas = [
  {
    pergunta: 'Qual o nome do jogador acima?',
    opcoes: ['a) Stephen Curry', 'b) Jayson Tatum', 'c) Lebron James', 'd) Kevin Durant'],
    imagem: 'Kevin Durant.webp',
    respostaCorreta: 'D' //Kd
    
  },
  {
    pergunta: 'Qual o nome do jogador que deixou Michael Jordan perdido no crossover?',
    opcoes: ['a) Allen Iverson', 'b) Kyrie Irving', 'c) Shaq O´neal', 'd) Magic Jhonson'],
    imagem: '2.jfif',
    respostaCorreta: 'A'
  },
  {
    pergunta: 'Quantas cestas de 3 pontos Shaq O´neal fez ao total em sua carreira da NBA?',
    opcoes: ['a) 5', 'b) 2', 'c) 1', 'd) 3'],
    imagem: 'shaq.jfif',
    respostaCorreta: 'C'
  },
  {
    pergunta: 'Qual a marca patrocinadora das bolas da NBA?',
    opcoes: ['a) Nike', 'b) Spalding', 'c) Penalty', 'd) Wilson'],
    imagem: 'bola nba.jfif',
    respostaCorreta: 'D'
  },
  {
    pergunta: 'Em que ano Ja Morant foi draftado?',
    opcoes: ['a) 2018', 'b) 2017', 'c) 2019', 'd) 2020'],
    imagem: 'ja morant.jfif',
    respostaCorreta: 'C'
  }
  // Adicione mais perguntas aqui
];
var perguntaAtual = 0;
function proximaPergunta() {
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    document.getElementById('quizForm').reset();
    document.getElementById('resposta').classList.remove('resposta-correta', 'resposta-incorreta');
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('resposta-container').style.display = 'none';
    document.querySelector('h1').innerHTML = 'Pergunta ' + (perguntaAtual + 1) + ':';
    document.querySelector('img').src = 'imagem/' + perguntas[perguntaAtual].imagem;
    document.querySelector('p').innerHTML = perguntas[perguntaAtual].pergunta;
    document.querySelector('input[value="A"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[0];
    document.querySelector('input[value="B"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[1];
    document.querySelector('input[value="C"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[2];
    document.querySelector('input[value="D"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[3];
    contador = tempoLimite;
    document.getElementById('tempo').innerHTML = contador + 's';
    temporizador = setInterval(contarTempo, 1000);
  } else {
    var numRespostasCorretas = 0;
    for (var i = 0; i < perguntas.length; i++) {
      if (respostas[i] === perguntas[i].respostaCorreta) {
        numRespostasCorretas++;
      }
    }
    var resultado = 'Você acertou ' + numRespostasCorretas + ' de ' + perguntas.length + ' perguntas.';
    document.querySelector('h1').innerHTML = 'Resultado:';
    document.querySelector('p').innerHTML = resultado;
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('resposta-container').style.display = 'none';
    document.getElementById('resultado-container').style.display = 'block';
    document.getElementById('resultado').innerHTML = resultado;
  }
}
function contarTempo() {
  if (contador === 0) {
    clearInterval(temporizador);
    pontos += pontosPerdidos;
    document.getElementById('resposta').classList.add('resposta-incorreta');
    document.getElementById('resposta').innerHTML = 'Acabou o tempo de resposta. Perdeu dois pontos.';
    proximaPergunta();
  } else {
    document.getElementById('tempo').innerHTML = contador + 's';
    contador--;
  }
}
function responder() {
  clearInterval(temporizador);
  var resposta = document.querySelector('input[name="opcao"]:checked');
  if (resposta) {
    respostas.push(resposta.value);
    var respostaCorreta = perguntas[perguntaAtual].respostaCorreta;
    var respostaUsuario = resposta.value;
    var respostaElement = document.getElementById('resposta');
    if (respostaUsuario === respostaCorreta) {
      respostaElement.classList.add('resposta-correta');
      respostaElement.innerHTML = 'Parabéns, você acertou!';
      pontos += 2; // Adiciona 2 pontos para cada pergunta acertada
    } else {
      respostaElement.classList.add('resposta-incorreta');
      var opcoes = perguntas[perguntaAtual].opcoes;
      var respostaCorretaIndex = opcoes.findIndex(opcao => opcao.endsWith(respostaCorreta));
      respostaElement.innerHTML = 'Que pena, você errou! A resposta correta é: <br>' + opcoes[respostaCorretaIndex] + '.';
      pontos += -1; // Não adiciona pontos para perguntas erradas
    }
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('resposta-container').style.display = 'block';
    document.getElementById('pontos').innerHTML = 'Pontuação: ' + pontos; // Atualiza a exibição dos pontos
  }
}
document.getElementById('pontos').innerHTML = 'Pontuação: ' + pontos;
document.querySelector('p').innerHTML = perguntas[perguntaAtual].pergunta;
document.querySelector('img').src = 'imagem/' + perguntas[perguntaAtual].imagem;
document.querySelector('input[value="A"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[0];
document.querySelector('input[value="B"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[1];
document.querySelector('input[value="C"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[2];
document.querySelector('input[value="D"]').nextSibling.nodeValue = perguntas[perguntaAtual].opcoes[3];
document.getElementById('tempo').innerHTML = contador + 's';
temporizador = setInterval(contarTempo, 1000);