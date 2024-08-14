class Email {

    constructor (element, error) {

        this.emailElement = element;
        this.errorElement = error;
        this.showError = function () {

            if (this.validity.valueMissing == true) {
                this.textContent = 'Please enter an email'
            }
    
        };
        this.validateInput = function () {

            if (this.validity.valid) {
                this.textContent = '';
            } else {
                this.showError();
            }
    
        };
        
    };

}

const newE = new Email(document.querySelector('#email',), document.querySelector('.emailError'));
console.log(newE);
console.log(newE.emailElement.validity.valueMissing);

export default Email