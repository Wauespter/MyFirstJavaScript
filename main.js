function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

   /* if (elemento != null) {
        if(elemento.localName === 'audio'){
            elemento.play();
        }
    }*/

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    contador = contador + 1;

    //console.log(contador);
}

/* Trocando o While por For, seria possível mesclar as linhas 7, 10 e 23 simplificando o código que ficaria da seguinte forma:
    for (let contador = 0; contador < listaDeTeclas.length; contador ++) {}
++ é igual à contador +1*/

