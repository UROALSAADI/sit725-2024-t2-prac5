// controller/validationController.js

const CodeValidatorModel = require('../model/codeValidatorModel');

class ValidationController {
    constructor() {
        this.codeValidator = new CodeValidatorModel();
    }

    validateCode(code) {
        const errors = this.codeValidator.validateCode(code);
        window.displayValidationResults(errors);
    }
}

module.exports = ValidationController;
