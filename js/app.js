// console.log('Test');


const celleLato = 10;

const celleTotali = celleLato ** 2; // celleLato alla seconda che è uguale a scrivere celleLato x celleLato

console.log(celleLato, celleTotali);

const playButtonElement = document.getElementById('game__button');
console.log(playButtonElement);

const grigliaElement = document.querySelector('.griglia');
console.log(grigliaElement);


playButtonElement.addEventListener ('click' , function() {


    // Cancella gli elementi dentro la griglia
    restart (grigliaElement);


    for (let i = 0; i < celleTotali; i++ ) {

        let numeroIncremento = i + 1; //per far partire da 1 e arrivare a 100, senza questo passaggio partirebbe da 0 e si fermerebbe a 99

        // console.log(numeroIncremento);

        // creazione div
        let creazioneDiv = document.createElement('div');
        // inserimento classe dentro il div
        creazioneDiv.classList.add('cella');
        // inserimento del testo dentro il div
        creazioneDiv.innerHTML = numeroIncremento;
        // Inserimento style della larghezza di ogni singola cella

        // creazioneDiv.style="width: calc( 100% / " + celleLato + " )";      Metodo concatenando la stringa con una variabile utilizzando il +
        creazioneDiv.style=`width:calc( 100% / ${celleLato} )`;             //Metodo utilizzando il template literals con i backtick

        // inserimento del div dentro html
        grigliaElement.append(creazioneDiv);
        

        // al click

        const cellaCreataElement = document.querySelector('.cella:last-child');

        console.log(cellaCreataElement);

        cellaCreataElement.addEventListener ( 'click' , function() {

            console.log(numeroIncremento);

            creazioneDiv.classList.add('background-secondary');

        })
        

    }

    

})


// Funzioni

// Funzione restart
function restart (elemento) {
    elemento.innerHTML = '';
}

// Funzione numeri random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }



// no numeri doppi
// nuimeri compresi tra 1 3 numeroDiCelle
// const bombe = [5, 54, 9, 21, 36, 74]
// startGame()
// bombe.includes('5')

const bombe = [];
let bomba;


while ( bombe.length < 16 ) {

    bomba = getRandomInt( 1 , celleTotali);

    if(!bombe.includes(bomba)) {
        bombe.push(bomba);
    } else {
        continue;
    }

    console.log(bomba , bombe.includes(bomba));

}

console.log(bombe)