document.addEventListener('DOMContentLoaded', function() {
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const buttonSubmit = document.querySelector('.form__submit');

    buttonSubmit.addEventListener('click', function(event) {
        event.preventDefault();

        //on fait la vérication 
        const validateName = firstNameInput.value.trim();
        const validateLastName = lastNameInput.value.trim();
        const validateEmail = emailInput.value.trim();
        const validatePassword = passwordInput.value.trim();

        effacerMessageErreur(); // Efface tous les messages d'erreur à chaque clic

        if (validateName === '') {
            afficherMessageErreur(errorElementPrenom, 'First name cannot be empty');
        }

        if (validateLastName === '') {
            afficherMessageErreur(errorElemntNom, 'Last name cannot be empty');
        }

        if (validateEmail === '') {
            afficherMessageErreur(errorElemntMail, 'Looks like there is no email');
        }

        if (validatePassword === '') {
            afficherMessageErreur(errorElemntPassword, 'Password cannot be empty');
        }
    });

    // Déclaration des Variables
    const errorElementPrenom = document.querySelector(".error-message-for-firstName");
    const errorElemntNom = document.querySelector('.error-message-lastName');
    const errorElemntMail = document.querySelector('.error-message-mail');
    const errorElemntPassword = document.querySelector('.error-message-password');

    function afficherMessageErreur(element, message) {
        element.innerText = message;
    }

    function effacerMessageErreur() {
        errorElementPrenom.innerText = '';
        errorElemntNom.innerText = '';
        errorElemntMail.innerText = '';
        errorElemntPassword.innerText = '';
    }
});