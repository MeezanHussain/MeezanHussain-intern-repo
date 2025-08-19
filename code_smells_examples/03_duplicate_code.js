// ========================================
// CODE SMELL: Duplicate Code
// ========================================

// ❌ BAD: Same validation logic repeated in multiple places
function validateUserRegistration(userData) {
    if (!userData.email || !userData.email.includes('@')) {
        return { isValid: false, error: 'Invalid email format' };
    }
    if (!userData.password || userData.password.length < 8) {
        return { isValid: false, error: 'Password must be at least 8 characters' };
    }
    if (!userData.name || userData.name.trim().length === 0) {
        return { isValid: false, error: 'Name is required' };
    }
    return { isValid: true, error: null };
}

function validateUserLogin(credentials) {
    if (!credentials.email || !credentials.email.includes('@')) {
        return { isValid: false, error: 'Invalid email format' };
    }
    if (!credentials.password || credentials.password.length < 8) {
        return { isValid: false, error: 'Password must be at least 8 characters' };
    }
    return { isValid: true, error: null };
}

function validateUserProfile(profile) {
    if (!profile.email || !profile.email.includes('@')) {
        return { isValid: false, error: 'Invalid email format' };
    }
    if (!profile.name || profile.name.trim().length === 0) {
        return { isValid: false, error: 'Name is required' };
    }
    if (!profile.bio || profile.bio.length > 500) {
        return { isValid: false, error: 'Bio must be less than 500 characters' };
    }
    return { isValid: true, error: null };
}

// ❌ BAD: Same formatting logic repeated
function formatUserForDisplay(user) {
    return {
        id: user.id,
        name: user.firstName + ' ' + user.lastName,
        email: user.email.toLowerCase(),
        joinDate: new Date(user.createdAt).toLocaleDateString()
    };
}

function formatUserForAPI(user) {
    return {
        id: user.id,
        name: user.firstName + ' ' + user.lastName,
        email: user.email.toLowerCase(),
        joinDate: new Date(user.createdAt).toLocaleDateString()
    };
}

function formatUserForExport(user) {
    return {
        id: user.id,
        name: user.firstName + ' ' + user.lastName,
        email: user.email.toLowerCase(),
        joinDate: new Date(user.createdAt).toLocaleDateString()
    };
}

// ========================================
// REFACTORED VERSION: DRY Principle
// ========================================

// ✅ GOOD: Common validation logic extracted into reusable functions

// Validation utilities
function isValidEmail(email) {
    return email && email.includes('@');
}

function isValidPassword(password) {
    return password && password.length >= 8;
}

function isValidName(name) {
    return name && name.trim().length > 0;
}

function isValidBio(bio) {
    return bio && bio.length <= 500;
}

// Generic validation function
function validateField(value, validator, errorMessage) {
    if (!validator(value)) {
        return { isValid: false, error: errorMessage };
    }
    return { isValid: true, error: null };
}

// Refactored validation functions
function validateUserRegistrationRefactored(userData) {
    const validations = [
        validateField(userData.email, isValidEmail, 'Invalid email format'),
        validateField(userData.password, isValidPassword, 'Password must be at least 8 characters'),
        validateField(userData.name, isValidName, 'Name is required')
    ];
    
    const failedValidation = validations.find(v => !v.isValid);
    return failedValidation || { isValid: true, error: null };
}

function validateUserLoginRefactored(credentials) {
    const validations = [
        validateField(credentials.email, isValidEmail, 'Invalid email format'),
        validateField(credentials.password, isValidPassword, 'Password must be at least 8 characters')
    ];
    
    const failedValidation = validations.find(v => !v.isValid);
    return failedValidation || { isValid: true, error: null };
}

function validateUserProfileRefactored(profile) {
    const validations = [
        validateField(profile.email, isValidEmail, 'Invalid email format'),
        validateField(profile.name, isValidName, 'Name is required'),
        validateField(profile.bio, isValidBio, 'Bio must be less than 500 characters')
    ];
    
    const failedValidation = validations.find(v => !v.isValid);
    return failedValidation || { isValid: true, error: null };
}

// ✅ GOOD: Common formatting logic extracted
function formatUserName(user) {
    return user.firstName + ' ' + user.lastName;
}

function formatUserEmail(user) {
    return user.email.toLowerCase();
}

function formatUserJoinDate(user) {
    return new Date(user.createdAt).toLocaleDateString();
}

function formatUserForDisplayRefactored(user) {
    return {
        id: user.id,
        name: formatUserName(user),
        email: formatUserEmail(user),
        joinDate: formatUserJoinDate(user)
    };
}

function formatUserForAPIRefactored(user) {
    return {
        id: user.id,
        name: formatUserName(user),
        email: formatUserEmail(user),
        joinDate: formatUserJoinDate(user)
    };
}

function formatUserForExportRefactored(user) {
    return {
        id: user.id,
        name: formatUserName(user),
        email: formatUserEmail(user),
        joinDate: formatUserJoinDate(user)
    };
}

// ========================================
// REFLECTION
// ========================================
/*
What was improved:
1. Eliminated code duplication - validation logic is now in one place
2. Changes to validation rules only need to be made once
3. Consistent error messages across all validation functions
4. Easier to test individual validation rules
5. Formatting functions are now reusable and consistent
6. Reduced chance of bugs from inconsistent implementations
7. Code is more maintainable and easier to extend

Example usage:
*/
const testUser = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: 'password123',
    bio: 'Software developer',
    createdAt: '2023-01-01'
};

console.log("Original validation:", validateUserRegistration(testUser));
console.log("Refactored validation:", validateUserRegistrationRefactored(testUser));
console.log("Original formatting:", formatUserForDisplay(testUser));
console.log("Refactored formatting:", formatUserForDisplayRefactored(testUser));

// Export functions for use in other modules
module.exports = {
    validateUserRegistration,
    validateUserRegistrationRefactored,
    validateUserLogin,
    validateUserLoginRefactored,
    validateUserProfile,
    validateUserProfileRefactored,
    formatUserForDisplay,
    formatUserForDisplayRefactored,
    formatUserForAPI,
    formatUserForAPIRefactored,
    formatUserForExport,
    formatUserForExportRefactored
};
