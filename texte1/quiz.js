var tempoLimite = 30;
var contador = tempoLimite;
var temporizador;
var respostas = [];
var pontos = 0;
var pontosPerdidos = -2;
var perguntas = [
    {
        pergunta: 'Qual time é do Rio de Janeiro?',
        opcoes: ['a) São Paulo', 'b) Palmeiras', 'c) Santos', 'd) Flamengo'],
        imagem: 'pergunta1.webp',
        respostaCorreta: 'd) Flamengo'
    },
    {
        pergunta: 'Qual time não tem Libertadores?',
        opcoes: ['a) Flamengo', 'b) Vasco', 'c) Internacional', 'd) Fluminense'],
        imagem: 'pergunta2.jpg',
        respostaCorreta: 'd) Fluminense'
    },
    {
        pergunta: 'Em que ano o Brasil ganhou a sua primeira Copa do Mundo?',
        opcoes: ['a) 1958', 'b) 1970', 'c) 1962', 'd) 1994'],
        imagem: 'pergunta3.jpg',
        respostaCorreta: 'a) 1958'
    },
    {
        pergunta: 'Qual país foi campeão da Copa do Mundo de 2006?',
        opcoes: ['a) Brasil', 'b) França', 'c) Itália', 'd) Argentina'],
        imagem: 'pergunta4.jpg',
        respostaCorreta: 'c) Itália'
    },
    {
        pergunta: 'Em qual time Neymar foi revelado?',
        opcoes: ['a) Santos', 'b) Barcelona', 'c) Palmeiras', 'd) Flamengo'],
        imagem: 'pergunta5.jpg',
        respostaCorreta: 'a) Santos'
    },
    {
        pergunta: 'Qual jogador ganhou a bola de ouro de 2015?',
        opcoes: ['a) Cristiano Ronaldo', 'b) Messi', 'c) Neymar', 'd) Griezmann'],
        imagem: 'pergunta6.jpg',
        respostaCorreta: 'b) Messi'
    },
    {
        pergunta: 'Qual país foi inventol o futebol?',
        opcoes: ['a) Brasil', 'b) Alemanha', 'c) França', 'd) Inglaterra'],
        imagem: 'pergunta7.jpg',
        respostaCorreta: 'd) Inglaterra'
    },
    {
        pergunta: 'Quantas copas do mundo a Itália já ganhou?',
        opcoes: ['a) 2', 'b) 4', 'c) 1', 'd) 3'],
        imagem: 'pergunta8.jpg',
        respostaCorreta: 'b) 4'
    },
    {
        pergunta: 'Quantas Champions League têm o Real Madrid?',
        opcoes: ['a) 9', 'b) 12', 'c) 14', 'd) 13'],
        imagem: 'pergunta9.jpeg',
        respostaCorreta: 'c) 14'
    },
    {
        pergunta: 'Qual foi o país onde aconteceu final da Copa do mundo de 2002?',
        opcoes: ['a) Alemanha', 'b) Brasil', 'c) Japão', 'd) Espanha'],
        imagem: 'pergunta10.jpeg',
        respostaCorreta: 'c) Japão'
    },
    {
        pergunta: 'Quem é o maior artilheiro da história da Copa do Mundo?',
        opcoes: ['a) Pelé', 'b) Ronaldo', 'c) Miroslav Klose', 'd) Cristiano Ronaldo'],
        imagem: 'pergunta11.jpeg',
        respostaCorreta: 'c) Miroslav Klose' // Miroslav Klose
      },
      {
        pergunta: 'Qual país venceu a Eurocopa 2020?',
        opcoes: ['a) Alemanha', 'b) França', 'c) Itália', 'd) Portugal'],
        imagem: 'pergunta12.jpg',
        respostaCorreta: 'c) Itália' // Itália
      },
      {
        pergunta: 'Qual jogador é conhecido como "Rei do Futebol" e tem 3 Copas do Mundo em seu currículo?',
        opcoes: ['a) Lionel Messi', 'b) Diego Maradona', 'c) Pelé', 'd) Cristiano Ronaldo'],
        imagem: 'pergunta13.jpg',
        respostaCorreta: 'c) Pelé' // Pelé
      },
      {
        pergunta: 'Qual time é conhecido como "Os Galáticos"?',
        opcoes: ['a) Manchester United', 'b) Real Madrid', 'c) Barcelona', 'd) Bayern de Munique'],
        imagem: 'pergunta14.jpg',
        respostaCorreta: 'b) Real Madrid' // Real Madrid
      },
      {
        pergunta: 'Qual jogador é conhecido por ser o "Fenômeno"?',
        opcoes: ['a) Ronaldinho', 'b) Zinedine Zidane', 'c) Ronaldo', 'd) Thierry Henry'],
        imagem: 'pergunta15.jpg',
        respostaCorreta: 'c) Ronaldo' // Ronaldo
      }
];
var perguntaAtual = 0;
var respostasCorretas = 0;
var respostasErradas = 0;

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
    var resultado = 'Você acertou ' + respostasCorretas + ' de ' + perguntas.length + ' perguntas.';
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
    respostasErradas++;
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
      respostasCorretas++;
    } else {
      respostaElement.classList.add('resposta-incorreta');
      var opcoes = perguntas[perguntaAtual].opcoes;
      var respostaCorretaIndex = opcoes.findIndex(opcao => opcao.endsWith(respostaCorreta));
      respostaElement.innerHTML = 'Que pena, você errou! A resposta correta é: <br>' + opcoes[respostaCorretaIndex] + '.';
      pontos += -1; // Não adiciona pontos para perguntas erradas
      respostasErradas++;
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