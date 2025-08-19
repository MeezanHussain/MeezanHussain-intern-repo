#!/usr/bin/env node

/**
 * Code Smells Examples Runner
 * 
 * This script demonstrates all the code smell examples and their refactored versions.
 * Run with: node run_examples.js
 */

console.log('Code Smells Examples Runner\n');
console.log('This script demonstrates common code smells and their refactored versions.\n');

// Mock functions for examples that reference external dependencies
global.processCardPayment = (data) => ({ success: true, transactionId: 'txn_123', amount: 100 });
global.sendPushNotification = (token, message) => ({ success: true });
global.sendEmail = (email, message) => ({ success: true });
global.fetchUserFromDB = (id) => ({ 
    id, 
    firstName: 'John', 
    lastName: 'Doe', 
    email: 'john@example.com',
    phone: '555-0123',
    dob: '1990-01-01',
    createdAt: '2023-01-01',
    lastLoginTime: '2023-12-01',
    status: 'active'
});
global.validateUser = (data) => ({ isValid: true });
global.validateOrder = (data) => ({ isValid: true });
global.validatePayment = (data) => ({ isValid: true });

// Import all example modules
console.log('Loading examples...\n');

try {
    // Magic Numbers
    console.log('1. Magic Numbers & Strings Example');
    console.log('=' .repeat(50));
    
    const { calculateDiscount, calculateDiscountRefactored } = require('./01_magic_numbers.js');
    console.log('Original discount for VIP customer:', calculateDiscount({ isVIP: true }, 100));
    console.log('Refactored discount for VIP customer:', calculateDiscountRefactored({ isVIP: true }, 100));
    console.log();

    // Long Functions
    console.log('2. Long Functions Example');
    console.log('=' .repeat(50));
    
    const { processUserOrder, processUserOrderRefactored } = require('./02_long_functions.js');
    const testUser1 = { id: 1, isVIP: true };
    const testItems1 = [{ name: 'Book', price: 50, quantity: 2 }];
    const testAddress1 = { street: '123 Main St', city: 'NYC', country: 'US' };
    const testPayment = { type: 'credit', cardNumber: '1234567890123456' };
    
    console.log('Original function result:', processUserOrder(testUser1, testItems1, testAddress1, testPayment));
    console.log('Refactored function result:', processUserOrderRefactored(testUser1, testItems1, testAddress1, testPayment));
    console.log();

    // Duplicate Code
    console.log('3. Duplicate Code Example');
    console.log('=' .repeat(50));
    
    const { validateUserRegistration, validateUserRegistrationRefactored } = require('./03_duplicate_code.js');
    const testUserData = { email: 'john@example.com', password: 'password123', name: 'John Doe' };
    
    console.log('Original validation:', validateUserRegistration(testUserData));
    console.log('Refactored validation:', validateUserRegistrationRefactored(testUserData));
    console.log();

    // Large Classes
    console.log(' 4. Large Classes (God Objects) Example');
    console.log('=' .repeat(50));
    
    const { UserManager, UserManagerRefactored } = require('./04_large_classes.js');
    
    const originalManager = new UserManager();
    const refactoredManager = new UserManagerRefactored();
    
    console.log('Original class login:', originalManager.login('john@example.com', 'password123'));
    console.log('Refactored class login:', refactoredManager.login('john@example.com', 'password123'));
    console.log();

    // Nested Conditionals
    console.log('5. Deeply Nested Conditionals Example');
    console.log('=' .repeat(50));
    
    const { processUserAccess, processUserAccessRefactored } = require('./05_nested_conditionals.js');
    const testUser2 = { isActive: true, role: 'moderator', id: 1 };
    const testResource = { type: 'post', authorId: 2, isPublic: true };
    
    console.log('Original access check:', processUserAccess(testUser2, testResource, 'edit'));
    console.log('Refactored access check:', processUserAccessRefactored(testUser2, testResource, 'edit'));
    console.log();

    // Commented Code
    console.log('6. Commented-Out Code Example');
    console.log('=' .repeat(50));
    
    const { calculateUserDiscount, calculateUserDiscountRefactored } = require('./06_commented_code.js');
    const testUser3 = { isVIP: true };
    
    console.log('Original discount calculation:', calculateUserDiscount(testUser3, 100));
    console.log('Refactored discount calculation:', calculateUserDiscountRefactored(testUser3, 100));
    console.log();

    // Inconsistent Naming
    console.log('7. Inconsistent Naming Example');
    console.log('=' .repeat(50));
    
    const { processOrder, processOrderRefactored } = require('./07_inconsistent_naming.js');
    const testOrder = { id: 1, customerType: 'VIP' };
    const testItems2 = [{ price: 25, quantity: 2 }, { price: 15, quantity: 1 }];
    const testAddress2 = { country: 'US' };
    
    console.log('Original order processing:', processOrder(testOrder, testItems2, testAddress2));
    console.log('Refactored order processing:', processOrderRefactored(testOrder, testItems2, testAddress2));
    console.log();

    console.log('All examples completed successfully!');
    console.log('\n Key takeaways:');
    console.log('   • Code smells are warning signs, not errors');
    console.log('   • Refactoring improves readability, maintainability, and debugging');
    console.log('   • Small, focused functions are easier to understand and test');
    console.log('   • Clear naming makes code self-documenting');
    console.log('   • Removing duplication reduces maintenance burden');
    console.log('\n Start applying these patterns to your own code!');

} catch (error) {
    console.error('Error running examples:', error.message);
    console.error('\nMake sure all example files are present in the same directory.');
}
