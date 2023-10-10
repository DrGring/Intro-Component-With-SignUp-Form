document.addEventListener('DOMContentLoaded', function() {

    /* const formInput = document.querySelectorAll('input'); */
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const buttonSubmit = document.querySelector('.form__submit');

buttonSubmit.addEventListener('click', function(event) {
        // On empêche le comportement par défaut
        event.preventDefault();
        
    // On fait la vérification.&
            // const baliseNom = document.getElementById('nom');
            // const valeurNom = baliseNom.value;
    const validateName = firstNameInput.value.trim();
    const validateLastName = lastNameInput.value.trim();
    const validateEmail = emailInput.value.trim();
    const validatePassword = passwordInput.value.trim();

    if (validateName === '',  validateLastName==='', validateEmail==='', validatePassword==='') {
        afficherMessageErreur(); //afficher le message d'erreur dans le span dans le Html
    }else {
        effacerMessageErreur();
    }
});

//Déclaration des Variables
const errorElementPrenom = document.querySelector(".error-message-for-firstName");
const errorElemntNom = document.querySelector('.error-message-lastName');
const errorElemntMail = document.querySelector('.error-message-mail');
const errorElemntPassword = document.querySelector('.error-message-password');

function afficherMessageErreur() {//fonction afficher le message d'erreur
    errorElementPrenom.innerText = 'First name cannot be empty';
    errorElemntNom.innerText = 'Last name cannot be empty';
    errorElemntMail.innerText = 'Looks like there is no email';
    errorElemntPassword.innerText = 'Password can not be empty';
};

function effacerMessageErreur() {//fonction qui efface le message d'erreur si le champs est remplis
    errorElementPrenom.innerText ='';
    errorElemntNom.innerText = '';
    errorElemntMail.innerText = '';
    errorElemntPassword.innerText = '';
}

});