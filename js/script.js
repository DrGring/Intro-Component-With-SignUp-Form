const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.querySelector("form");
const buttonSubmit = document.querySelector('button');

buttonSubmit.addEventListener('click', function(event) {
        // On empêche le comportement par défaut
        event.preventDefault();
        
    // On fait la vérification.
            // const baliseNom = document.getElementById('nom');
            // const valeurNom = baliseNom.value;
    const firstNameInput = document.getElementById("firstName");
    const validateName = firstNameInput.value;
    if (validateName === '') {
        console.log("First name cannot be empty");
        return;
    }
});
/* function afficherMessageErreur() {
    const errorElement = document.querySelector(".error-message-for-firstName");
    errorElement.innerText = 'First name cannot be empty';
}; */