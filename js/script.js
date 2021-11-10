// *********** Mail **************
const mails = ['gennaro@esposito.it', 'mario@rossi.it', 'anna@verde.it', 'ciro@esposito.it', 'antonio@dipetto.it'];

const mailUtente = prompt('Inserisci la tua mail di registrazione.');

let sentinella = false;

for (let i = 0; i < mails.length && sentinella == false; i++) {
    if (mailUtente == mails[i]) {
        sentinella = true;
    } else {
        sentinella = false;
    }
}

if (sentinella) {
    console.log('Mail corretta');
} else {
    console.log('Mail non trovata');
}


// ************ Dadi ***********
function esito() {
    const dado1 = Math.round(Math.random() * 5) + 1;
    document.getElementById("dado1").innerHTML = dado1;
    const dado2 = Math.round(Math.random() * 5) + 1;
    document.getElementById("dado2").innerHTML = dado2;
    if (dado1 > dado2){
        document.getElementById("esito").innerHTML = 'Il Giocatore 1 ha vinto!';
    } else if (dado1 == dado2) {
        document.getElementById("esito").innerHTML = 'I Giocatori hanno pareggiato!';
    } else {
        document.getElementById("esito").innerHTML = 'Il Giocatore 2 ha vinto!';
    }
}