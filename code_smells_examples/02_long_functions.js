// ========================================
// CODE SMELL: Long Functions
// ========================================

// ❌ BAD: One function doing too many things
function processUserOrder(user, items, shippingAddress, paymentMethod) {
    // This function is doing validation, processing, and formatting all in one place
    
    // Validation logic
    if (!user || !user.id) {
        throw new Error("Invalid user");
    }
    if (!items || items.length === 0) {
        throw new Error("No items in order");
    }
    if (!shippingAddress || !shippingAddress.street) {
        throw new Error("Invalid shipping address");
    }
    if (!paymentMethod || !paymentMethod.cardNumber) {
        throw new Error("Invalid payment method");
    }
    
    // Business logic
    let total = 0;
    for (let item of items) {
        if (item.price < 0) {
            throw new Error("Invalid item price");
        }
        total += item.price * item.quantity;
    }
    
    // Apply discounts
    if (user.isVIP) {
        total = total * 0.9;
    } else if (total > 100) {
        total = total * 0.95;
    }
    
    // Calculate shipping
    let shippingCost = 10;
    if (total > 200) {
        shippingCost = 0;
    } else if (shippingAddress.country !== "US") {
        shippingCost = 25;
    }
    
    // Format order summary
    const orderSummary = {
        userId: user.id,
        items: items.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            subtotal: item.price * item.quantity
        })),
        subtotal: total,
        shipping: shippingCost,
        total: total + shippingCost,
        shippingAddress: {
            street: shippingAddress.street,
            city: shippingAddress.city,
            country: shippingAddress.country
        },
        paymentMethod: {
            type: paymentMethod.type,
            last4: paymentMethod.cardNumber.slice(-4)
        }
    };
    
    return orderSummary;
}

// ========================================
// REFACTORED VERSION: Single Responsibility
// ========================================

// ✅ GOOD: Each function has one clear responsibility

function validateUser(user) {
    if (!user || !user.id) {
        throw new Error("Invalid user");
    }
    return true;
}

function validateItems(items) {
    if (!items || items.length === 0) {
        throw new Error("No items in order");
    }
    
    for (let item of items) {
        if (item.price < 0) {
            throw new Error("Invalid item price");
        }
    }
    return true;
}

function validateShippingAddress(address) {
    if (!address || !address.street) {
        throw new Error("Invalid shipping address");
    }
    return true;
}

function validatePaymentMethod(payment) {
    if (!payment || !payment.cardNumber) {
        throw new Error("Invalid payment method");
    }
    return true;
}

function calculateSubtotal(items) {
    return items.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

function applyDiscounts(subtotal, user) {
    if (user.isVIP) {
        return subtotal * 0.9;
    } else if (subtotal > 100) {
        return subtotal * 0.95;
    }
    return subtotal;
}

function calculateShippingCost(subtotal, address) {
    if (subtotal > 200) {
        return 0;
    } else if (address.country !== "US") {
        return 25;
    }
    return 10;
}

function formatOrderSummary(user, items, subtotal, shippingCost, address, payment) {
    return {
        userId: user.id,
        items: items.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            subtotal: item.price * item.quantity
        })),
        subtotal: subtotal,
        shipping: shippingCost,
        total: subtotal + shippingCost,
        shippingAddress: {
            street: address.street,
            city: address.city,
            country: address.country
        },
        paymentMethod: {
            type: payment.type,
            last4: payment.cardNumber.slice(-4)
        }
    };
}

function processUserOrderRefactored(user, items, shippingAddress, paymentMethod) {
    // Each validation step is clear and focused
    validateUser(user);
    validateItems(items);
    validateShippingAddress(shippingAddress);
    validatePaymentMethod(paymentMethod);
    
    // Business logic is separated into focused functions
    const subtotal = calculateSubtotal(items);
    const discountedSubtotal = applyDiscounts(subtotal, user);
    const shippingCost = calculateShippingCost(discountedSubtotal, shippingAddress);
    
    // Formatting is handled by a dedicated function
    return formatOrderSummary(user, items, discountedSubtotal, shippingCost, shippingAddress, paymentMethod);
}

// ========================================
// REFLECTION
// ========================================
/*
What was improved:
1. Each function has a single, clear responsibility
2. Functions are easier to test individually
3. Code is more readable and easier to understand
4. Debugging is simpler - you know exactly which function to look at
5. Functions can be reused in other contexts
6. Changes to one aspect (e.g., discount logic) don't affect other parts

Example usage:
*/
const testUser = { id: 1, isVIP: true };
const testItems = [{ name: "Book", price: 50, quantity: 2 }];
const testAddress = { street: "123 Main St", city: "NYC", country: "US" };
const testPayment = { type: "credit", cardNumber: "1234567890123456" };

console.log("Original function result:", processUserOrder(testUser, testItems, testAddress, testPayment));
console.log("Refactored function result:", processUserOrderRefactored(testUser, testItems, testAddress, testPayment));

// Export functions for use in other modules
module.exports = {
    processUserOrder,
    processUserOrderRefactored
};
