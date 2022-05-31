/*
Descrizione:
Visualizzare in pagina (html) 5 numeri casuali.
Avviare un timer di 30 secondi
Dopo 30 secondi, nascondere i numeri.
L’utente deve inserire, uno alla volta, i numeri 
che ha visto precedentemente, tramite un prompt().
Dopo che sono stati inseriti i 5 numeri, il software 
dice quanti e quali dei numeri da indovinare sono stati individuati.

*/
const randomNumbers = document.getElementById("random-numbers");
const generaNumeriBtn = document.getElementById("genera-numeri-btn");
const numeriIndovinatiUtente = document.getElementById("numeri-indovinati-utente");

const numbersArray = []
for (let i = 0; i < 5; i++) {
    const randomNumbers = Math.floor(Math.random() * 100) + 1;
    numbersArray[i] = randomNumbers;
    numbersArray.push(parseInt(randomNumbers))

    
}
console.log(numbersArray);


generaNumeriBtn.addEventListener("click", function() {
    randomNumbers.innerHTML = numbersArray
})

    setTimeout(function() {
        randomNumbers.innerHTML = ""
        setTimeout(function() {

            const numeriUtente = [];

            const listaNumeriUtente = document.getElementById("lista-numeri-utente");

            for (let i = 0; i < 5; i++) {
                let promptNumeri = parseInt(prompt("Inserisci i numeri"));
                numeriUtente[i] = promptNumeri;
                listaNumeriUtente.innerHTML += `<li>${numeriUtente[i]}</li>`
                
            }

            const numeriIndovinati = [];

            for (let i = 0; i < numbersArray.length; i++) {
                for (let j = 0; j < numeriUtente.length; j++) {
                    if (numbersArray[j] === numeriUtente[i]) {
                        numeriIndovinati.push(numeriUtente[i]);
                    }
                }
            }

            
            console.log(numeriIndovinati);
            numeriIndovinatiUtente.innerHTML = `I numeri che hai indovinato sono: ${numeriIndovinati}`

        }, 200);
    }, 30000);