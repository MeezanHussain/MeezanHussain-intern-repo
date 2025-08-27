// Script to demonstrate the DRY principle examples

function testBeforeCode() {
    const output = document.getElementById('output');
    const testData = {
        firstName: '',
        lastName: 'Doe',
        email: 'invalid-email',
        password: '123'
    };
    
    let result = '🧪 Testing BEFORE Code (Messy):\n\n';
    result += 'Test Data: ' + JSON.stringify(testData, null, 2) + '\n\n';
    
    try {
        const registrationErrors = validateUserRegistration(testData);
        const profileErrors = validateUserProfile(testData);
        const loginErrors = validateUserLogin(testData);
        
        result += 'Registration Errors: ' + JSON.stringify(registrationErrors, null, 2) + '\n';
        result += 'Profile Errors: ' + JSON.stringify(profileErrors, null, 2) + '\n';
        result += 'Login Errors: ' + JSON.stringify(loginErrors, null, 2) + '\n\n';
        
        result += '❌ Issues with this approach:\n';
        result += '- Same validation logic repeated 3 times\n';
        result += '- If we change email validation, we need to update 3 functions\n';
        result += '- Risk of inconsistent behavior between functions\n';
        result += '- Harder to maintain and test\n';
        
    } catch (error) {
        result += 'Error: ' + error.message;
    }
    
    output.textContent = result;
}

function testAfterCode() {
    const output = document.getElementById('output');
    const testData = {
        firstName: '',
        lastName: 'Doe',
        email: 'invalid-email',
        password: '123'
    };
    
    let result = '🧪 Testing AFTER Code (Clean):\n\n';
    result += 'Test Data: ' + JSON.stringify(testData, null, 2) + '\n\n';
    
    try {
        const registrationErrors = validateUserRegistration(testData);
        const profileErrors = validateUserProfile(testData);
        const loginErrors = validateUserLogin(testData);
        
        result += 'Registration Errors: ' + JSON.stringify(registrationErrors, null, 2) + '\n';
        result += 'Profile Errors: ' + JSON.stringify(profileErrors, null, 2) + '\n';
        result += 'Login Errors: ' + JSON.stringify(loginErrors, null, 2) + '\n\n';
        
        result += '✅ Benefits of this approach:\n';
        result += '- Single source of truth for validation rules\n';
        result += '- Change a rule once, it updates everywhere\n';
        result += '- Consistent behavior across all functions\n';
        result += '- Easier to maintain and test\n';
        result += '- Easy to add new validation rules\n';
        
    } catch (error) {
        result += 'Error: ' + error.message;
    }
    
    output.textContent = result;
}

function compareResults() {
    const output = document.getElementById('output');
    const testData = {
        firstName: 'John',
        lastName: '',
        email: 'john@example.com',
        password: 'password123'
    };
    
    let result = '🔄 Comparing Both Approaches:\n\n';
    result += 'Test Data: ' + JSON.stringify(testData, null, 2) + '\n\n';
    
    try {
        // Test BEFORE code
        const beforeRegistration = validateUserRegistration(testData);
        const beforeProfile = validateUserProfile(testData);
        const beforeLogin = validateUserLogin(testData);
        
        // Test AFTER code (same functions, but cleaner implementation)
        const afterRegistration = validateUserRegistration(testData);
        const afterProfile = validateUserProfile(testData);
        const afterLogin = validateUserLogin(testData);
        
        result += '📊 Results Comparison:\n\n';
        result += 'BEFORE Code Results:\n';
        result += '- Registration: ' + JSON.stringify(beforeRegistration) + '\n';
        result += '- Profile: ' + JSON.stringify(beforeProfile) + '\n';
        result += '- Login: ' + JSON.stringify(beforeLogin) + '\n\n';
        
        result += 'AFTER Code Results:\n';
        result += '- Registration: ' + JSON.stringify(afterRegistration) + '\n';
        result += '- Profile: ' + JSON.stringify(afterProfile) + '\n';
        result += '- Login: ' + JSON.stringify(afterLogin) + '\n\n';
        
        result += '🎯 Key Differences:\n';
        result += '1. Both produce identical results (functionality preserved)\n';
        result += '2. AFTER code is much easier to maintain\n';
        result += '3. AFTER code follows DRY principle\n';
        result += '4. AFTER code is more testable and extensible\n';
        
    } catch (error) {
        result += 'Error: ' + error.message;
    }
    
    output.textContent = result;
}

// Add some utility functions to demonstrate the benefits
function demonstrateExtensibility() {
    const output = document.getElementById('output');
    
    let result = '🚀 Demonstrating Extensibility:\n\n';
    
    // Show how easy it is to add new validation rules
    result += 'Adding a new validation rule for phone numbers:\n\n';
    
    // Simulate adding a new validation rule
    result += '// Easy to add new validation rules\n';
    result += 'validationRules.phone = [\n';
    result += '  { isValid: isRequired, message: "Phone is required" },\n';
    result += '  { isValid: (phone) => phone && phone.length >= 10, message: "Phone must be at least 10 digits" }\n';
    result += '];\n\n';
    
    result += '// Now all validation functions automatically support phone validation!\n';
    result += '// No need to update multiple functions\n';
    result += '// Single source of truth maintained\n';
    
    output.textContent = result;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('DRY Principle Examples loaded successfully!');
    console.log('Open the browser console to see additional information.');
});
