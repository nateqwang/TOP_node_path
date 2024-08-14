import Email from "./email.js";

const emailInput = document.querySelector('#email');
const emailError = document.querySelector('.emailError')

const email = new Email(emailInput, emailError);

const addEvents = function () {

    emailInput.addEventListener('input', email.validateInput);
    emailError.addEventListener('focus', email.validateInput);

}

addEvents();
