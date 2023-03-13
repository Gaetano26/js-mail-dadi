/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/ 

// constante per prendere il bottone Lancia
const btnPlay = document.getElementById('random');
btnPlay.addEventListener('click', play);

function play() {
    // Genero numero casuale tra 1 e 6 per il computer ed il giocatore
    let computerScore = Math.floor(Math.random() * 6) + 1;
    let playerScore = Math.floor(Math.random() * 6) + 1;

    // Determina il vincitore in base al punteggio più alto
    let winner = '';
      //se il numero dell'utente è maggiore compare il messaggio hai vinto
    if (playerScore > computerScore) {
        winner = 'Hai vinto!';
      //se il numero del computer è maggiore compare il messaggio perso
    } else if ( computerScore > playerScore) {
        winner = 'Hai perso!';
        //se il numero dell'utente è uguale a quello del computer compare il messaggio draw
    } else {
        winner = 'Draw!'
    }

    // Inserisco i tutti i  numeri casuali nell'Html

    document.getElementById("risultato").innerHTML =`
       <div>
          <h4 class="text-danger">Tu</h4>
          <p class="pt-4">${playerScore}</p>    
       </div>
       <div class="ps-5" >
          <h4 class="text-danger">Computer</h4>
          <p class="pt-4">${computerScore}</p>    
       </div>
       
    `;

      //sinserisco il testo del vincitore
    document.getElementById("vincitore").innerHTML =`
     <h3>${winner}</h3>
    
 `
    
}