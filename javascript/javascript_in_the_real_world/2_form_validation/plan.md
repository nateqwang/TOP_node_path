Email 

    constructor () {

        emailElement = query selector id email
        errorMessage = query selector id emailError

    }


    showError() {

        if emailElement invalid REQUIRED
            errorMessage.textcontent = 'email is required'
        
        if emailElement invalid TYPE=EMAIL
            errorMessage.textcontent = 'invalid email address'
    }

    validateEmail() {

        if valid,
            errorMessage.textcontent = ''
        
        else 
            showError

    }