// ========================================
// CODE SMELL: Inconsistent Naming
// ========================================

// ❌ BAD: Variable names that don't clearly describe their purpose
function processOrder(o, items, addr) {
    let t = 0;
    let s = 0;
    
    // Calculate total
    for (let i = 0; i < items.length; i++) {
        t += items[i].p * items[i].q;
    }
    
    // Calculate shipping
    if (addr.c === 'US') {
        s = 10;
    } else {
        s = 25;
    }
    
    // Apply discount
    if (o.customerType === 'VIP') {
        t = t * 0.9;
    }
    
    return {
        orderId: o.id,
        total: t,
        shipping: s,
        finalTotal: t + s
    };
}

function validateUserData(data) {
    let isValid = true;
    let errors = [];
    
    // Check name
    if (!data.n || data.n.trim().length === 0) {
        isValid = false;
        errors.push('Name is required');
    }
    
    // Check email
    if (!data.e || !data.e.includes('@')) {
        isValid = false;
        errors.push('Valid email is required');
    }
    
    // Check age
    if (data.a < 18) {
        isValid = false;
        errors.push('Must be 18 or older');
    }
    
    return { isValid, errors };
}

function calculateTax(inc, state) {
    let rate = 0;
    
    if (state === 'CA') {
        rate = 0.075;
    } else if (state === 'NY') {
        rate = 0.085;
    } else if (state === 'TX') {
        rate = 0.0625;
    } else {
        rate = 0.05;
    }
    
    return inc * rate;
}

function sendEmail(recipient, subject, body, attachments) {
    // Validate inputs
    if (!recipient || !subject || !body) {
        return { success: false, error: 'Missing required fields' };
    }
    
    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(recipient)) {
        return { success: false, error: 'Invalid email format' };
    }
    
    // Process attachments
    let hasAttachments = false;
    if (attachments && attachments.length > 0) {
        hasAttachments = true;
    }
    
    // Send email logic here
    const emailResult = {
        to: recipient,
        subject: subject,
        body: body,
        hasAttachments: hasAttachments,
        sentAt: new Date()
    };
    
    return { success: true, email: emailResult };
}

function getUserInfo(id) {
    // Fetch user from database
    const u = fetchUserFromDB(id);
    
    if (!u) {
        return null;
    }
    
    // Format user data
    const userData = {
        userId: u.id,
        fullName: u.firstName + ' ' + u.lastName,
        emailAddress: u.email,
        phoneNumber: u.phone,
        dateOfBirth: u.dob,
        accountCreated: u.createdAt,
        lastLogin: u.lastLoginTime,
        isActive: u.status === 'active'
    };
    
    return userData;
}

// ❌ BAD: Function names that don't describe what they do
function doStuff(data) {
    let result = [];
    
    for (let item of data) {
        if (item.value > 10) {
            result.push(item);
        }
    }
    
    return result;
}

function process(data) {
    // This function name is too generic
    if (data.type === 'user') {
        return validateUser(data);
    } else if (data.type === 'order') {
        return validateOrder(data);
    } else if (data.type === 'payment') {
        return validatePayment(data);
    }
    
    return { isValid: false, error: 'Unknown data type' };
}

// ========================================
// REFACTORED VERSION: Clear, Descriptive Names
// ========================================

// ✅ GOOD: Variables and functions with clear, descriptive names

function processOrderRefactored(order, items, shippingAddress) {
    let orderTotal = 0;
    let shippingCost = 0;
    
    // Calculate order total
    for (let item of items) {
        orderTotal += item.price * item.quantity;
    }
    
    // Calculate shipping cost
    if (shippingAddress.country === 'US') {
        shippingCost = 10;
    } else {
        shippingCost = 25;
    }
    
    // Apply customer discount
    if (order.customerType === 'VIP') {
        orderTotal = orderTotal * 0.9;
    }
    
    return {
        orderId: order.id,
        subtotal: orderTotal,
        shippingCost: shippingCost,
        finalTotal: orderTotal + shippingCost
    };
}

function validateUserDataRefactored(userData) {
    let isDataValid = true;
    let validationErrors = [];
    
    // Validate user name
    if (!userData.name || userData.name.trim().length === 0) {
        isDataValid = false;
        validationErrors.push('Name is required');
    }
    
    // Validate email address
    if (!userData.email || !userData.email.includes('@')) {
        isDataValid = false;
        validationErrors.push('Valid email is required');
    }
    
    // Validate user age
    if (userData.age < 18) {
        isDataValid = false;
        validationErrors.push('Must be 18 or older');
    }
    
    return { isValid: isDataValid, errors: validationErrors };
}

function calculateStateTaxRefactored(income, stateCode) {
    let taxRate = 0;
    
    if (stateCode === 'CA') {
        taxRate = 0.075;
    } else if (stateCode === 'NY') {
        taxRate = 0.085;
    } else if (stateCode === 'TX') {
        taxRate = 0.0625;
    } else {
        taxRate = 0.05;
    }
    
    return income * taxRate;
}

function sendEmailRefactored(recipientEmail, emailSubject, emailBody, emailAttachments) {
    // Validate required email fields
    if (!recipientEmail || !emailSubject || !emailBody) {
        return { success: false, error: 'Missing required email fields' };
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(recipientEmail)) {
        return { success: false, error: 'Invalid email format' };
    }
    
    // Check if email has attachments
    const hasAttachments = emailAttachments && emailAttachments.length > 0;
    
    // Send email logic here
    const emailDetails = {
        recipient: recipientEmail,
        subject: emailSubject,
        body: emailBody,
        hasAttachments: hasAttachments,
        sentAt: new Date()
    };
    
    return { success: true, email: emailDetails };
}

function getUserProfileRefactored(userId) {
    // Fetch user from database
    const userRecord = fetchUserFromDB(userId);
    
    if (!userRecord) {
        return null;
    }
    
    // Format user profile data
    const userProfile = {
        userId: userRecord.id,
        fullName: userRecord.firstName + ' ' + userRecord.lastName,
        emailAddress: userRecord.email,
        phoneNumber: userRecord.phone,
        dateOfBirth: userRecord.dob,
        accountCreated: userRecord.createdAt,
        lastLogin: userRecord.lastLoginTime,
        isActive: userRecord.status === 'active'
    };
    
    return userProfile;
}

// ✅ GOOD: Function names that clearly describe their purpose
function filterHighValueItems(itemList) {
    let highValueItems = [];
    
    for (let item of itemList) {
        if (item.value > 10) {
            highValueItems.push(item);
        }
    }
    
    return highValueItems;
}

function validateDataByType(dataRecord) {
    // This function name clearly describes what it does
    if (dataRecord.type === 'user') {
        return validateUser(dataRecord);
    } else if (dataRecord.type === 'order') {
        return validateOrder(dataRecord);
    } else if (dataRecord.type === 'payment') {
        return validatePayment(dataRecord);
    }
    
    return { isValid: false, error: 'Unknown data type' };
}

// ========================================
// REFLECTION
// ========================================
/*
What was improved:
1. Variable names now clearly describe their purpose (orderTotal vs t)
2. Function names are descriptive and action-oriented
3. Abbreviations are eliminated (addr vs shippingAddress)
4. Consistent naming conventions throughout the code
5. Code is self-documenting - no need for extra comments
6. Easier to understand what each variable represents
7. Reduced cognitive load when reading code
8. Makes debugging easier - you know exactly what each variable contains

Naming best practices:
1. Use descriptive names that explain the purpose
2. Avoid single-letter variables (except in loops)
3. Use consistent naming conventions (camelCase for variables, PascalCase for classes)
4. Make function names verb-based (processOrder, validateUser, calculateTax)
5. Use plural names for arrays/collections (items, validationErrors)
6. Avoid abbreviations unless they're universally understood
7. Make boolean variables descriptive (isValid, hasAttachments, isActive)

Example usage:
*/
const testOrder = { id: 1, customerType: 'VIP' };
const testItems = [{ price: 25, quantity: 2 }, { price: 15, quantity: 1 }];
const testAddress = { country: 'US' };

console.log("Original order processing:", processOrder(testOrder, testItems, testAddress));
console.log("Refactored order processing:", processOrderRefactored(testOrder, testItems, testAddress));

const testUserData = { name: 'John Doe', email: 'john@example.com', age: 25 };
console.log("Original validation:", validateUserData(testUserData));
console.log("Refactored validation:", validateUserDataRefactored(testUserData));

// Export functions for use in other modules
module.exports = {
    processOrder,
    processOrderRefactored,
    validateUserData,
    validateUserDataRefactored,
    calculateTax,
    calculateStateTaxRefactored,
    sendEmail,
    sendEmailRefactored,
    getUserInfo,
    getUserProfileRefactored,
    doStuff,
    filterHighValueItems,
    process,
    validateDataByType
};
