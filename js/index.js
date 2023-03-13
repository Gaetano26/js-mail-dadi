/*Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/


//constante con tutte le email valide
const validEmails = [
    "gaetano@outlook.com",
    "gaetano@gmail.com",
    "gaetano@hotmail.com",
    "gaetano@yahoo.com",
 ]

 // constante per prendere il bottone invia
const btn = document.getElementById('submitEmail');

 //evento al click sul bottonr invia
 btn.addEventListener('click', checkList);

 //funzione per verificare se l'email inserita è valida e l'utente è abilitato ad accedere oppure no
 function checkList(e) {
    e.preventDefault();
    let validEmail = '';
    const search = document.getElementById('userEmail').value;
    for (let i = 0; i < validEmails.length; i++) {
        if (validEmails[i] === search) {
            validEmail = validEmails[i];
        }
    }

    if (validEmail) {
        document.getElementById("inserisci").style.display = "none";
        document.querySelector ("container").innerHTML += `
            <h1> Benvenuto! </h1>
        `;
        
    } else {
        console.log('non sei stato invitato');
        document.getElementById("inserisci").style.display = "none";
    }
}
