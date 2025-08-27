// AFTER: Refactored code following DRY principle (clean)
// Single validation functions - no duplication!

function isRequired(value) {
    return value && value.trim() !== '';
}

function isValidEmail(email) {
    return email && email.includes('@');
}

function isValidPassword(password) {
    return password && password.length >= 8;
}

function validateField(value, fieldName, validators) {
    let errors = [];
    
    validators.forEach(validator => {
        if (!validator.isValid(value)) {
            errors.push(validator.message);
        }
    });
    
    return errors;
}

// Validation rules configuration
const validationRules = {
    firstName: [
        { isValid: isRequired, message: 'First name is required' }
    ],
    lastName: [
        { isValid: isRequired, message: 'Last name is required' }
    ],
    email: [
        { isValid: isRequired, message: 'Email is required' },
        { isValid: isValidEmail, message: 'Email must contain @ symbol' }
    ],
    password: [
        { isValid: isRequired, message: 'Password is required' },
        { isValid: isValidPassword, message: 'Password must be at least 8 characters' }
    ]
};

function validateUserData(userData, requiredFields) {
    let errors = [];
    
    requiredFields.forEach(field => {
        if (validationRules[field]) {
            const fieldErrors = validateField(userData[field], field, validationRules[field]);
            errors.push(...fieldErrors);
        }
    });
    
    return errors;
}

// Specific validation functions using the common logic
function validateUserRegistration(userData) {
    return validateUserData(userData, ['firstName', 'lastName', 'email', 'password']);
}

function validateUserProfile(userData) {
    return validateUserData(userData, ['firstName', 'lastName', 'email']);
}

function validateUserLogin(userData) {
    return validateUserData(userData, ['email', 'password']);
}

// Benefits of refactoring:
// - Single Source of Truth: Validation rules are defined once in validationRules
// - Easy Updates: Change a rule in one place, it updates everywhere
// - Consistent Behavior: All validation functions use the same underlying logic
// - Better Testing: Test validation logic once, not multiple times
// - Extensible Design: Easy to add new validation rules or fields
// - Cleaner Code: Each function has a clear, single responsibility

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateUserRegistration,
        validateUserProfile,
        validateUserLogin,
        isRequired,
        isValidEmail,
        isValidPassword,
        validateField,
        validateUserData
    };
}
