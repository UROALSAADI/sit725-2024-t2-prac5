// view/validationView.js

class CodeValidatorModel {
    constructor() {
        this.validationResults = [];
    }

    validateCode(code) {
        const errors = [];

        if (!code.includes('use strict')) {
            errors.push('Code should include "use strict" statement.');
        }

        this.validationResults.push({
            code: code,
            errors: errors,
            timestamp: new Date(),
        });

        return errors;
    }

    getValidationResults() {
        return this.validationResults;
    }
}

class ValidationController {
    constructor() {
        this.codeValidator = new CodeValidatorModel();
    }

    validateCode(code) {
        const errors = this.codeValidator.validateCode(code);
        displayValidationResults(errors);
    }
}

function displayValidationResults(errors) {
    const resultsList = document.getElementById('validationResults');
    resultsList.innerHTML = '';

    if (errors.length > 0) {
        errors.forEach(error => {
            const li = document.createElement('li');
            li.textContent = error;
            resultsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No errors found!';
        resultsList.appendChild(li);
    }
}

const controller = new ValidationController();

document.getElementById('validateButton').addEventListener('click', function() {
    const code = document.getElementById('codeInput').value;
    controller.validateCode(code);
});
