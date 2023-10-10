
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('input');
    const buttonSubmit = document.querySelector('.form__submit');
  
    buttonSubmit.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Parcourir tous les champs de formulaire
      formInputs.forEach(function(input) {
        const validateValue = input.value.trim();
  
        // Valider chaque champ de formulaire individuellement
        if (validateValue === '') {
          afficherMessageErreur(input); // Afficher le message d'erreur approprié pour chaque champ
        } else {
          effacerMessageErreur(input); // Effacer le message d'erreur si le champ est rempli
        }
      });
    });
  
    // Déclaration des variables pour les messages d'erreur
    const errorElementPrenom = document.querySelector(".error-message-for-firstName");
    const errorElemntNom = document.querySelector('.error-message-lastName');
    const errorElemntMail = document.querySelector('.error-message-mail');
    const errorElemntPassword = document.querySelector('.error-message-password');
  
    function afficherMessageErreur(input) {
      if (input.id === 'firstName') {
        errorElementPrenom.innerText = 'First name cannot be empty';
      } else if (input.id === 'lastName') {
        errorElemntNom.innerText = 'Last name cannot be empty';
      } else if (input.id === 'email') {
        errorElemntMail.innerText = 'Looks like this is not an email';
      } else if (input.id === 'password') {
        errorElemntPassword.innerText = 'password can not be empty';
      }
    }
  
    function effacerMessageErreur(input) {
      if (input.id === 'firstName') {
        errorElementPrenom.innerText = '';
      } else if (input.id === 'lastName') {
        errorElemntNom.innerText = '';
      } else if (input.id === 'email') {
        errorElemntMail.innerText = '';
      } else if (input.id === 'password') {
        errorElemntPassword.innerText = '';
      }
    }
  });
  