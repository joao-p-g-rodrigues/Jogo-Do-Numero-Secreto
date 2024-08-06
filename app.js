
let listaNumerosSorteados = [];
let numeroLimite = 50;

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//MANIPULAÇAO DE TEXRTOS NO HTML

// let titulo = document.querySelector('h1');//indicar a seleçao do titulo
// titulo.innerHTML = 'Jogo do Número Secreto';//altera o texto dentro do html

// let paragrafo = document.querySelector('p');//seleciona o paragrafo ...
// paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

//uma boa pratica é a reduçao de codigo para evitar criar diversos seletores para a especificidade de uma funçao 
// como visto nas linhas de codigo acima foi selecionar tegs para imprimir textos na tela podem 
// entao podemos incorporar 

function exibirTextoNaTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
    

}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 50');   
}
mensagemInicial();
//CRIANDO FUNÇOES 
function verificarChute() {

    let chute = document.querySelector('input').value;
    console.log(`${numeroSecreto}`);
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!!');

        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `vc descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O chute é maior que o numero secreto`);

        } else {
            exibirTextoNaTela('p', 'O chute é menor que o numero secreto');

        }
    }
    // tentativas = tentativas + 1;
    tentativas++;
    limparCampo()
}

function reStart() {
    limparCampo();
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();

    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
        
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
        
    }

}