// ========================================
// CODE SMELL: Magic Numbers & Strings
// ========================================

// ❌ BAD: Magic numbers and strings scattered throughout code
function calculateDiscount(price, customerType) {
    if (customerType === "VIP") {
        return price * 0.20;  // What does 0.20 mean?
    } else if (customerType === "regular") {
        return price * 0.10;  // What does 0.10 mean?
    }
    return 0;
}

function isEligibleForLoan(age, income) {
    if (age >= 18 && income >= 50000) {  // What do these numbers represent?
        return true;
    }
    return false;
}

function formatCurrency(amount) {
    if (amount > 1000) {  // What's special about 1000?
        return "$" + amount.toFixed(2);
    }
    return amount.toString();
}

// ========================================
// REFACTORED VERSION: Using Constants
// ========================================

// ✅ GOOD: Constants make the code self-documenting
const DISCOUNT_RATES = {
    VIP: 0.20,
    REGULAR: 0.10
};

const LOAN_ELIGIBILITY = {
    MINIMUM_AGE: 18,
    MINIMUM_INCOME: 50000
};

const CURRENCY_FORMATTING = {
    THRESHOLD_FOR_DECIMALS: 1000,
    DECIMAL_PLACES: 2
};

function calculateDiscountRefactored(price, customerType) {
    // Handle both string and object inputs for backward compatibility
    if (typeof customerType === 'object' && customerType.isVIP) {
        return price * DISCOUNT_RATES.VIP;
    }
    const discountRate = DISCOUNT_RATES[customerType?.toUpperCase?.()] || 0;
    return price * discountRate;
}

function isEligibleForLoanRefactored(age, income) {
    const meetsAgeRequirement = age >= LOAN_ELIGIBILITY.MINIMUM_AGE;
    const meetsIncomeRequirement = income >= LOAN_ELIGIBILITY.MINIMUM_INCOME;
    return meetsAgeRequirement && meetsIncomeRequirement;
}

function formatCurrencyRefactored(amount) {
    const shouldShowDecimals = amount > CURRENCY_FORMATTING.THRESHOLD_FOR_DECIMALS;
    
    if (shouldShowDecimals) {
        return `$${amount.toFixed(CURRENCY_FORMATTING.DECIMAL_PLACES)}`;
    }
    return amount.toString();
}

// ========================================
// REFLECTION
// ========================================
/*
What was improved:
1. Constants make the code self-documenting - no need to guess what 0.20 or 50000 mean
2. Changes to business rules only require updating constants in one place
3. Code is more readable and maintainable
4. Constants can be easily reused across the application
5. Makes debugging easier - you know exactly what values are being compared

Example usage:
*/
console.log("Original:", calculateDiscount(100, "VIP"));
console.log("Refactored:", calculateDiscountRefactored(100, "VIP"));
console.log("Original:", isEligibleForLoan(25, 60000));
console.log("Refactored:", isEligibleForLoanRefactored(25, 60000));

// Export functions for use in other modules
module.exports = {
    calculateDiscount,
    calculateDiscountRefactored,
    isEligibleForLoan,
    isEligibleForLoanRefactored,
    formatCurrency,
    formatCurrencyRefactored
};
