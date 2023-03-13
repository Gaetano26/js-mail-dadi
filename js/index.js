/*
Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/


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
    //se la funzione è vera genera il testo + il bottone con il link per entrare nel gioco
    if (validEmail) {
        document.getElementById("inserisci").style.display = "none";
        document.querySelector(".container").innerHTML = `
            <div class="d-flex flex-column justify-content-center align-items-center">
              <h1> Benvenuto! </h1>
             <button type="button" class="btn btn-success"><a class="text-white text-decoration-none fs-4" href="./dadi.html">Gioca</a></button>
            </div> 
        `;
      //se la funzione è falsa genera il testo è l'utente non può piu andare avanti
    } else {
        console.log('non sei stato invitato');
        document.getElementById("inserisci").style.display = "none";
        document.querySelector(".container").innerHTML = `
        <div class="d-flex flex-column justify-content-center align-items-center">
          <h1 class="text-danger">Non sei stato invitato : lascia la pagina!</h1>
        </div> 
    `;
    }

}
 