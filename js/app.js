// console.log('Test');


const celleLato = 10;

const celleTotali = celleLato ** 2; // celleLato alla seconda che è uguale a scrivere celleLato x celleLato

console.log(celleLato, celleTotali);

const playButtonElement = document.getElementById('game__button');
console.log(playButtonElement);

const grigliaElement = document.querySelector('.griglia');
console.log(grigliaElement);

let punteggio = 0;


playButtonElement.addEventListener ('click' , function() {


    // Cancella gli elementi dentro la griglia
    restart (grigliaElement);


    // no numeri doppi / numeri compresi tra 1 e celle totali 

    let bombe = [];
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
        

        // THIS

        creazioneDiv.addEventListener ('click', function (event) {
        
            // console.log('dentro')
            let elementoCliccato = this;
            let numeroCasella = parseInt(elementoCliccato.innerHTML);
            let numeroBomba = bombe.includes(numeroCasella);

            console.log(numeroCasella , numeroBomba)

            if ( numeroBomba ) {
                elementoCliccato.classList.add('background-red');
                gameOver();
                restart(grigliaElement);
            } else {
                elementoCliccato.classList.add('background-light-blue');
                punteggio++;
                console.log(punteggio);
            }
            
            // elementoCliccato.removeEventListener ( 'click' , function() {  al posto di function devo farne una io pesonalizzata sennò non funziona


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

// Funzione Perso
function gameOver () {
    alert('Hai perso');
    punteggio = 0;
}


// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
// (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// quando l'utente clicca su una cella

    // SE il numero della cella è presente nella lista dei numeri generati 
    //     cella background color red e gameOver

    // ALTRIMENTI 
    //     cella background color blue e l'utente può continuare a cliccare

    // funzione GameEnd quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti ( numeroCelleTotali - numeroBombe)

    // Al termine della partita il software deve comnunicare il numero di volte che l'utente ha cliccato su una cella buona

    // tipo fare un ciclo while con la condizione che la cella cliccata non sia una bomba e che incrementi il numero e alla fine stampiamo il numero

    // while ( numeroBomba === false ) {
    //     let caselleSelezionate;
    //     elementoCliccato.classList.add('background-light-blue');
    //     caselleSelezionate ++;
    //     console.log(caselleSelezionate);
    // } else {
    //     elementoCliccato.classList.add('background-red');
    //     gameOver();
    //     restart(grigliaElement);
    // }


    // while ( !numeroBomba ) {
    //     let caselleSelezionate;
    //     elementoCliccato.classList.add('background-light-blue');
    //     caselleSelezionate ++;
    //     console.log(caselleSelezionate);
    // }

        
    // elementoCliccato.classList.add('background-red');
    // gameOver();
    // restart(grigliaElement);


