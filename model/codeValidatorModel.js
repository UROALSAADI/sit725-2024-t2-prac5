// model/codeValidatorModel.js

class CodeValidatorModel {
    constructor() {
        this.validationResults = [];
    }

    // A method to validate code
    validateCode(code) {
        const errors = [];

        // Simple validation logic (you can add more)
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

module.exports = CodeValidatorModel;
