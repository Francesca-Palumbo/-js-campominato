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

//
var possibilita = 100 - 16;

// creo l'array in cui finiranno i numeri generati dal PC
var array_numeri_mine = [];
// length è < 16 perchè saranno 16 i numeri generati dal PC
while ( array_numeri_mine.length<16 ) {
    // faccio generare i 16 numeri del PC tramite la funzione Math.floor e la metto nel while perchè finché la  condizione sarà vera, verranno eseguite le istruzioni
    var numero_generati_pc = Math.floor(Math.random() * 100);
    // uso .include per essere sicura che non generi due numeri uguali tra i 16 generati
    if (!array_numeri_mine.includes(numero_generati_pc)){
        // se l'if è vero, il numero_generati_pc finisce nell'array dei numeri mina
        array_numeri_mine.push(numero_generati_pc);
    }
}
console.log(array_numeri_mine);

// adesso passo alla fase in cui chiedo il numero all'utente
// lo faccio in un do-while perchè la condizione viene valutata dopo aver eseguito le istruzioni
// le istruzioni consistono nel fatto che :
var array_numeri_utente = [];
do {
    // innanzitutto chiedo all'utente di inserire il numero
    // uso il parseInt per assicurarmi che l'utente inserisca effettivamente un numero
    var numero_utente = parseInt(prompt("inserisci un numero"));
    //  e lo inserisco nell'array dell'utente
        array_numeri_utente.push(numero_utente);
        // console.log(numero_utente);
    // if il numero inserito dall'utente è un numero appartenente all'array delle mine
    if (array_numeri_mine.includes(numero_utente)) {
        // vuol dire che l'utente ha inserito un numero contenuto nell'array e quindi ha perso
        console.log("hai colpito una mina con il numero: " + numero_utente) ;
    } else {
        // se il numero inserito dall'utente non è uno dei numeri dell'array mine, può andare avanti
        console.log("sei fortunato non hai colpito una mina col il numero: " + numero_utente) ;
    }
    //  la condizione while ha a sua volta due condizioni necessarie per far andare avanti il ciclo
    //  che il numero inserito dall'utente non debba essere un numero mina E che l'array dell'utente  non arrivi ad 84 ( cioè possibilita =100-16 )
} while (!array_numeri_mine.includes(numero_utente) && (array_numeri_utente.length<possibilita));
