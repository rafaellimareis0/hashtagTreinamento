const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoAnterior = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-pause-circle-fill');
    botaoPlayPause.classList.remove('bi-play-circle-fill');
}

function tocarOuPausar(){
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    } else{
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}
function proximaFaixa(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = "./dom-casmurro/" + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

function voltarFaixa(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "./dom-casmurro/" + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

botaoPlayPause.addEventListener('click', tocarFaixa);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', voltarFaixa);