console.log('JS OK!')

// esercizio 1

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito
// del controllo.

// **********************VERSIONE PROMPT********************

let mailRequest = prompt('insert mail').toLowerCase();
let mail = ["pirla@gmail.com", "clown@gmail.com", "giurato@gmail.com"];

console.log('La tua mail è: ' + mailRequest);


let mailValid = false;

for (let i = 0; i < mail.length && mailValid === false; i++) {

    if (mailRequest === mail[i]) {
        console.log('Mail Verificata!');
        mailValid = true;
    }
}
if (mailValid === false) {
    console.log('Mail Inesistente!');
}

// ****************VERSIONE INPUT********************

// let mail = ["pirla@gmail.com", "clown@gmail.com", "giurato@gmail.com"];

// document.getElementById('emailButton').addEventListener('click',

//     function () {

//         let mailValid = false;
//         for (let i = 0; i < mail.length && mailValid === false; i++) {

//             if (mailRequest === mail[i]) {
//                 console.log('Mail Verificata!');
//                 mailValid = true;
//             }
//         }
//         if (mailValid === false) {
//             console.log('Mail Inesistente!');
//         }
//     }



// esercizio 2

// Generare un numero random da 1 a 6, sia per il giocatore sia per
// il computer.

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// const player = Math.floor((Math.random() * 6) + 1);
// const computer = Math.floor((Math.random() * 6) + 1);

// console.log('Punteggio Player: ' + player);
// console.log('Punteggio Computer: ' + computer);


// if (computer > player) {
//     console.log('vince Computer')

// } else if (computer < player) {
//     console.log('vince Player');

// } else {
//     console.log('Parità');
// }