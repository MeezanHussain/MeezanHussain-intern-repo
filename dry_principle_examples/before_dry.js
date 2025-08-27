// BEFORE: Code with duplication (messy)
// User validation functions - lots of repetition!

function validateUserRegistration(userData) {
    let errors = [];
    
    if (!userData.firstName || userData.firstName.trim() === '') {
        errors.push('First name is required');
    }
    if (!userData.lastName || userData.lastName.trim() === '') {
        errors.push('Last name is required');
    }
    if (!userData.email || userData.email.trim() === '') {
        errors.push('Email is required');
    }
    if (userData.email && !userData.email.includes('@')) {
        errors.push('Email must contain @ symbol');
    }
    if (!userData.password || userData.password.length < 8) {
        errors.push('Password must be at least 8 characters');
    }
    
    return errors;
}

function validateUserProfile(userData) {
    let errors = [];
    
    if (!userData.firstName || userData.firstName.trim() === '') {
        errors.push('First name is required');
    }
    if (!userData.lastName || userData.lastName.trim() === '') {
        errors.push('Last name is required');
    }
    if (!userData.email || userData.email.trim() === '') {
        errors.push('Email is required');
    }
    if (userData.email && !userData.email.includes('@')) {
        errors.push('Email must contain @ symbol');
    }
    
    return errors;
}

function validateUserLogin(userData) {
    let errors = [];
    
    if (!userData.email || userData.email.trim() === '') {
        errors.push('Email is required');
    }
    if (userData.email && !userData.email.includes('@')) {
        errors.push('Email must contain @ symbol');
    }
    if (!userData.password || userData.password.length < 8) {
        errors.push('Password must be at least 8 characters');
    }
    
    return errors;
}

// Problems with this code:
// - Duplicated Logic: Same validation rules repeated 3 times
// - Maintenance Nightmare: Change a rule, update 3 places
// - Bug Risk: Fix a bug in one place, forget the others
// - Inconsistent Behavior: Rules might diverge over time
// - Code Bloat: Unnecessary repetition made the codebase larger and harder to navigate
// - Testing Complexity: Had to test the same logic multiple times

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateUserRegistration,
        validateUserProfile,
        validateUserLogin
    };
}
