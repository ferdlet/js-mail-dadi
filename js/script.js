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
