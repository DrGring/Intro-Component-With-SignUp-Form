
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
  // document.addEventListener('DOMContentLoaded', function() {

//     /* const formInput = document.querySelectorAll('input'); */
// const firstNameInput = document.getElementById("firstName");
// const lastNameInput = document.getElementById("lastName");
// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const buttonSubmit = document.querySelector('.form__submit');

// buttonSubmit.addEventListener('click', function(event) {
//         // On empêche le comportement par défaut
//         event.preventDefault();
        
//     // On fait la vérification.&
//             // const baliseNom = document.getElementById('nom');
//             // const valeurNom = baliseNom.value;
//     const validateName = firstNameInput.value.trim();
//     const validateLastName = lastNameInput.value.trim();
//     const validateEmail = emailInput.value.trim();
//     const validatePassword = passwordInput.value.trim();

//     /* if (validateName === '', validateLastName==='', validateEmail==='', validatePassword==='') {
//         afficherMessageErreur(); //afficher le message d'erreur dans le span dans le Html
//     }else {
//         effacerMessageErreur();
//     } */
//     if (validateName === '') {
//         afficherMessageErreur()
//     }else {
//         effacerMessageErreur()
//     }

//     if (validateLastName ==='') {
//         afficherMessageErreur()
//     }else {
//         effacerMessageErreur()
//     }

//     if (validateEmail === '') {
//         afficherMessageErreur()        
//     }else{
//         effacerMessageErreur()
//     }

//     if (validatePassword === '') {
//         afficherMessageErreur()
//     }else {
//         effacerMessageErreur()
//     }
// });


// //Déclaration des Variables
// const errorElementPrenom = document.querySelector(".error-message-for-firstName");
// const errorElemntNom = document.querySelector('.error-message-lastName');
// const errorElemntMail = document.querySelector('.error-message-mail');
// const errorElemntPassword = document.querySelector('.error-message-password');

// function afficherMessageErreur() {//fonction afficher le message d'erreur
//     errorElementPrenom.innerText = 'First name cannot be empty';
//     errorElemntNom.innerText = 'Last name cannot be empty';
//     errorElemntMail.innerText = 'Looks like there is no email';
//     errorElemntPassword.innerText = 'Password can not be empty';
// };

// function effacerMessageErreur() {//fonction qui efface le message d'erreur si le champs est remplis
//     errorElementPrenom.innerText ='';
//     errorElemntNom.innerText = '';
//     errorElemntMail.innerText = '';
//     errorElemntPassword.innerText = '';
// }

// // });
