// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.
// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
// con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
// con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
// con difficoltà 2=> si gioca con numeri che vanno da 1 a 50


// numeri_generati_pc(16, 1, 100);
// function numeri_generati_pc ( n_numeri_casuali, numero_minimo, numero_massimo){
//     for (var numero_minimo = 0; n_numeri_casuali <=16 ; numero_massimo < numeri_generati_pc.length; i++) {
//         array[i]
//     }
// }

// var stringa_numeri_mine = [];
// for (var numeri_generati_pc = 1; numeri_generati_pc <=100; i++) {
//     console.log( stringa_numeri_mine[i] );
//     var numeri_generati_pc = Math.floor(Math.random() * 100);
//         stringa_numeri_mine.push(numeri_generati_pc);
//         console.log(numeri_generati_pc);
// }

var possibilita = 100 - 16;

var array_numeri_mine = [];
while ( array_numeri_mine.length<16 ) {
    var numero_generati_pc = Math.floor(Math.random() * 100);
    if (!array_numeri_mine.includes(numero_generati_pc)){
        array_numeri_mine.push(numero_generati_pc);
    }
}
console.log(array_numeri_mine);

var array_numeri_utente = [];
do {
    var numero_utente = parseInt(prompt("inserisci un numero"));
        array_numeri_utente.push(numero_utente);
        // console.log(numero_utente);
    if (array_numeri_mine.includes(numero_utente)) {
        console.log("hai colpito una mina con il numero: " + numero_utente) ;
    } else {
        console.log("sei fortunato non hai colpito una mina col il numero: " + numero_utente) ;
    }
} while (!array_numeri_mine.includes(numero_utente) && (array_numeri_utente.length<possibilita));
