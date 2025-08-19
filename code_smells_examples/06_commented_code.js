// ========================================
// CODE SMELL: Commented-Out Code
// ========================================

// ❌ BAD: Dead code cluttering the codebase
function calculateUserDiscount(user, orderTotal) {
    // Old discount logic - keeping for reference
    // if (user.membershipLevel === 'gold') {
    //     return orderTotal * 0.15;
    // } else if (user.membershipLevel === 'silver') {
    //     return orderTotal * 0.10;
    // } else if (user.membershipLevel === 'bronze') {
    //     return orderTotal * 0.05;
    // }
    // return 0;
    
    // New discount logic implemented 2023-11-15
    if (user.isVIP) {
        return orderTotal * 0.20;
    } else if (orderTotal > 100) {
        return orderTotal * 0.10;
    } else if (orderTotal > 50) {
        return orderTotal * 0.05;
    }
    return 0;
}

function processPayment(paymentData) {
    // Validate payment data
    if (!paymentData.cardNumber || !paymentData.expiryDate) {
        return { success: false, error: 'Invalid payment data' };
    }
    
    // Process payment
    const paymentResult = processCardPayment(paymentData);
    
    // Old logging code - commented out during debugging
    // console.log('Payment processed:', paymentResult);
    // console.log('Transaction ID:', paymentResult.transactionId);
    // console.log('Amount:', paymentResult.amount);
    
    return paymentResult;
}

function sendNotification(user, message) {
    // Check if user wants notifications
    if (!user.notificationsEnabled) {
        return { success: false, reason: 'Notifications disabled' };
    }
    
    // Old email logic - replaced with new notification service
    // const emailResult = sendEmail(user.email, message);
    // if (emailResult.success) {
    //     return { success: true, method: 'email' };
    // }
    
    // New notification logic
    const notificationResult = sendPushNotification(user.deviceToken, message);
    if (notificationResult.success) {
        return { success: true, method: 'push' };
    }
    
    // Fallback to email if push fails
    const emailResult = sendEmail(user.email, message);
    return { 
        success: emailResult.success, 
        method: 'email',
        fallback: true 
    };
}

function validateUserInput(userData) {
    // Basic validation
    if (!userData.name || userData.name.trim().length === 0) {
        return { isValid: false, error: 'Name is required' };
    }
    
    // Email validation - old regex pattern
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // New email validation with better pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userData.email || !emailRegex.test(userData.email)) {
        return { isValid: false, error: 'Valid email is required' };
    }
    
    // Password validation - keeping old rules for reference
    // if (!userData.password || userData.password.length < 6) {
    //     return { isValid: false, error: 'Password must be at least 6 characters' };
    // }
    
    // New password requirements
    if (!userData.password || userData.password.length < 8) {
        return { isValid: false, error: 'Password must be at least 8 characters' };
    }
    
    // Check for common passwords
    const commonPasswords = ['password', '123456', 'qwerty', 'admin'];
    if (commonPasswords.includes(userData.password.toLowerCase())) {
        return { isValid: false, error: 'Password is too common' };
    }
    
    return { isValid: true, error: null };
}

// Old function - keeping for reference but not using
// function calculateOldTax(income) {
//     if (income <= 50000) {
//         return income * 0.15;
//     } else if (income <= 100000) {
//         return income * 0.25;
//     } else {
//         return income * 0.35;
//     }
// }

// New tax calculation function
function calculateTax(income) {
    if (income <= 50000) {
        return income * 0.12;
    } else if (income <= 100000) {
        return income * 0.22;
    } else {
        return income * 0.32;
    }
}

// ========================================
// REFACTORED VERSION: Clean Code
// ========================================

// ✅ GOOD: Clean code without dead code

function calculateUserDiscountRefactored(user, orderTotal) {
    if (user.isVIP) {
        return orderTotal * 0.20;
    } else if (orderTotal > 100) {
        return orderTotal * 0.10;
    } else if (orderTotal > 50) {
        return orderTotal * 0.05;
    }
    return 0;
}

function processPaymentRefactored(paymentData) {
    if (!paymentData.cardNumber || !paymentData.expiryDate) {
        return { success: false, error: 'Invalid payment data' };
    }
    
    const paymentResult = processCardPayment(paymentData);
    return paymentResult;
}

function sendNotificationRefactored(user, message) {
    if (!user.notificationsEnabled) {
        return { success: false, reason: 'Notifications disabled' };
    }
    
    // Try push notification first
    const notificationResult = sendPushNotification(user.deviceToken, message);
    if (notificationResult.success) {
        return { success: true, method: 'push' };
    }
    
    // Fallback to email
    const emailResult = sendEmail(user.email, message);
    return { 
        success: emailResult.success, 
        method: 'email',
        fallback: true 
    };
}

function validateUserInputRefactored(userData) {
    if (!userData.name || userData.name.trim().length === 0) {
        return { isValid: false, error: 'Name is required' };
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userData.email || !emailRegex.test(userData.email)) {
        return { isValid: false, error: 'Valid email is required' };
    }
    
    if (!userData.password || userData.password.length < 8) {
        return { isValid: false, error: 'Password must be at least 8 characters' };
    }
    
    const commonPasswords = ['password', '123456', 'qwerty', 'admin'];
    if (commonPasswords.includes(userData.password.toLowerCase())) {
        return { isValid: false, error: 'Password is too common' };
    }
    
    return { isValid: true, error: null };
}

function calculateTaxRefactored(income) {
    if (income <= 50000) {
        return income * 0.12;
    } else if (income <= 100000) {
        return income * 0.22;
    } else {
        return income * 0.32;
    }
}

// ========================================
// REFLECTION
// ========================================
/*
What was improved:
1. Removed all commented-out code that was cluttering the codebase
2. Code is now clean and focused on what's actually running
3. No confusion about which code is active vs. inactive
4. Easier to read and understand the current implementation
5. Version control handles code history, not comments
6. Reduced cognitive load when reading code
7. No risk of accidentally uncommenting old, broken code
8. Cleaner, more professional codebase

Best practices for handling code changes:
1. Use version control (git) to track code history
2. Create feature branches for major changes
3. Use meaningful commit messages to document changes
4. If you need to reference old code, add a comment explaining WHY it was changed
5. Remove commented code immediately after confirming the new version works

Example usage:
*/
const testUser = { isVIP: true };
const testUserData = { name: 'John', email: 'john@example.com', password: 'securepass123' };

console.log("Original discount:", calculateUserDiscount(testUser, 100));
console.log("Refactored discount:", calculateUserDiscountRefactored(testUser, 100));
console.log("Original validation:", validateUserInput(testUserData));
console.log("Refactored validation:", validateUserInputRefactored(testUserData));

// Export functions for use in other modules
module.exports = {
    calculateUserDiscount,
    calculateUserDiscountRefactored,
    processPayment,
    processPaymentRefactored,
    sendNotification,
    sendNotificationRefactored,
    validateUserInput,
    validateUserInputRefactored,
    calculateTax,
    calculateTaxRefactored
};
