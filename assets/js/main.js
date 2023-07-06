const class1 = "success";
const class2 = "fail";

// lista email fittizie

const emailList = ['user1@email.com', 'user2@email.com', 'user3@email.com', 'user4@email.com' ];

console.log('emailList');

//recupero l'input dell'utente e il button
const userEmailElement = document.querySelector(".input-email");
const btnElement = document.querySelector(".btn");

const outputElement = document.querySelector(".output");

btnElement.addEventListener('click', function () {
    let email = userEmailElement.value; //recupero la mail inserita
    //console.log(mail);

    let email_trovata = false;

    for (let i = 0; i < emailList.length; i++) {
        let match = emailList[i];

        if (match === email) {
            email_trovata = true;
            break; //fermo il ciclo quando e se trovo la mail
        }
    }

    if (email_trovata === true) {
        outputElement.innerHTML = `<span class='${class1}'>Accesso consentito: la tua email è registrata</span>`;
    } else {
        outputElement.innerHTML = `<span class='${class2}'>Accesso negato: la tua email non è registrata</span>`;
    }
});
