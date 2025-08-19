// ========================================
// CODE SMELL: Deeply Nested Conditionals
// ========================================

// ❌ BAD: Complex nested if/else statements that are hard to follow
function processUserAccess(user, resource, action) {
    if (user) {
        if (user.isActive) {
            if (user.role) {
                if (user.role === 'admin') {
                    return { allowed: true, reason: 'Admin access' };
                } else if (user.role === 'moderator') {
                    if (resource.type === 'post') {
                        if (action === 'edit' || action === 'delete') {
                            if (resource.authorId === user.id || resource.isPublic) {
                                return { allowed: true, reason: 'Moderator access' };
                            } else {
                                return { allowed: false, reason: 'Cannot modify private content' };
                            }
                        } else if (action === 'view') {
                            return { allowed: true, reason: 'Moderator view access' };
                        } else {
                            return { allowed: false, reason: 'Action not permitted for moderator' };
                        }
                    } else if (resource.type === 'comment') {
                        if (action === 'edit' || action === 'delete') {
                            if (resource.authorId === user.id) {
                                return { allowed: true, reason: 'Own comment access' };
                            } else {
                                return { allowed: false, reason: 'Cannot modify others comments' };
                            }
                        } else if (action === 'view') {
                            return { allowed: true, reason: 'Moderator view access' };
                        } else {
                            return { allowed: false, reason: 'Action not permitted for moderator' };
                        }
                    } else {
                        return { allowed: false, reason: 'Resource type not supported' };
                    }
                } else if (user.role === 'user') {
                    if (resource.type === 'post') {
                        if (action === 'view') {
                            return { allowed: true, reason: 'User view access' };
                        } else if (action === 'edit' || action === 'delete') {
                            if (resource.authorId === user.id) {
                                return { allowed: true, reason: 'Own content access' };
                            } else {
                                return { allowed: false, reason: 'Cannot modify others content' };
                            }
                        } else {
                            return { allowed: false, reason: 'Action not permitted for user' };
                        }
                    } else if (resource.type === 'comment') {
                        if (action === 'view') {
                            return { allowed: true, reason: 'User view access' };
                        } else if (action === 'edit' || action === 'delete') {
                            if (resource.authorId === user.id) {
                                return { allowed: true, reason: 'Own comment access' };
                            } else {
                                return { allowed: false, reason: 'Cannot modify others comments' };
                            }
                        } else {
                            return { allowed: false, reason: 'Action not permitted for user' };
                        }
                    } else {
                        return { allowed: false, reason: 'Resource type not supported' };
                    }
                } else {
                    return { allowed: false, reason: 'Unknown user role' };
                }
            } else {
                return { allowed: false, reason: 'User has no role' };
            }
        } else {
            return { allowed: false, reason: 'User account is inactive' };
        }
    } else {
        return { allowed: false, reason: 'No user provided' };
    }
}

// ❌ BAD: Another example with nested conditionals
function calculateShippingCost(order, user, address) {
    let shippingCost = 0;
    
    if (order.total > 0) {
        if (order.total < 50) {
            if (address.country === 'US') {
                if (address.state === 'CA' || address.state === 'NY') {
                    shippingCost = 15;
                } else if (address.state === 'TX' || address.state === 'FL') {
                    shippingCost = 12;
                } else {
                    shippingCost = 10;
                }
            } else if (address.country === 'CA') {
                if (address.province === 'ON' || address.province === 'BC') {
                    shippingCost = 20;
                } else {
                    shippingCost = 25;
                }
            } else {
                shippingCost = 30;
            }
        } else if (order.total < 100) {
            if (address.country === 'US') {
                shippingCost = 8;
            } else if (address.country === 'CA') {
                shippingCost = 15;
            } else {
                shippingCost = 25;
            }
        } else {
            if (user.isVIP) {
                shippingCost = 0;
            } else {
                if (address.country === 'US') {
                    shippingCost = 5;
                } else if (address.country === 'CA') {
                    shippingCost = 10;
                } else {
                    shippingCost = 20;
                }
            }
        }
    }
    
    return shippingCost;
}

// ========================================
// REFACTORED VERSION: Early Returns & Guard Clauses
// ========================================

// ✅ GOOD: Using early returns and guard clauses to reduce nesting

function processUserAccessRefactored(user, resource, action) {
    // Guard clauses - early returns for invalid cases
    if (!user) {
        return { allowed: false, reason: 'No user provided' };
    }
    
    if (!user.isActive) {
        return { allowed: false, reason: 'User account is inactive' };
    }
    
    if (!user.role) {
        return { allowed: false, reason: 'User has no role' };
    }
    
    // Admin has full access
    if (user.role === 'admin') {
        return { allowed: true, reason: 'Admin access' };
    }
    
    // Handle moderator access
    if (user.role === 'moderator') {
        return handleModeratorAccess(user, resource, action);
    }
    
    // Handle regular user access
    if (user.role === 'user') {
        return handleUserAccess(user, resource, action);
    }
    
    return { allowed: false, reason: 'Unknown user role' };
}

function handleModeratorAccess(user, resource, action) {
    if (resource.type === 'post') {
        if (action === 'edit' || action === 'delete') {
            const canModify = resource.authorId === user.id || resource.isPublic;
            return {
                allowed: canModify,
                reason: canModify ? 'Moderator access' : 'Cannot modify private content'
            };
        }
        
        if (action === 'view') {
            return { allowed: true, reason: 'Moderator view access' };
        }
        
        return { allowed: false, reason: 'Action not permitted for moderator' };
    }
    
    if (resource.type === 'comment') {
        if (action === 'edit' || action === 'delete') {
            const canModify = resource.authorId === user.id;
            return {
                allowed: canModify,
                reason: canModify ? 'Own comment access' : 'Cannot modify others comments'
            };
        }
        
        if (action === 'view') {
            return { allowed: true, reason: 'Moderator view access' };
        }
        
        return { allowed: false, reason: 'Action not permitted for moderator' };
    }
    
    return { allowed: false, reason: 'Resource type not supported' };
}

function handleUserAccess(user, resource, action) {
    if (action === 'view') {
        return { allowed: true, reason: 'User view access' };
    }
    
    if (action === 'edit' || action === 'delete') {
        const canModify = resource.authorId === user.id;
        return {
            allowed: canModify,
            reason: canModify ? 'Own content access' : 'Cannot modify others content'
        };
    }
    
    return { allowed: false, reason: 'Action not permitted for user' };
}

// ✅ GOOD: Refactored shipping calculation with early returns
function calculateShippingCostRefactored(order, user, address) {
    if (order.total <= 0) {
        return 0;
    }
    
    // Free shipping for VIP users on orders over $100
    if (order.total >= 100 && user.isVIP) {
        return 0;
    }
    
    // Get base shipping cost based on order total
    const baseShippingCost = getBaseShippingCost(order.total);
    
    // Apply country-specific adjustments
    return applyCountryAdjustment(baseShippingCost, address);
}

function getBaseShippingCost(orderTotal) {
    if (orderTotal < 50) return 10;
    if (orderTotal < 100) return 8;
    return 5;
}

function applyCountryAdjustment(baseCost, address) {
    if (address.country === 'US') {
        return applyUSStateAdjustment(baseCost, address.state);
    }
    
    if (address.country === 'CA') {
        return applyCanadaProvinceAdjustment(baseCost, address.province);
    }
    
    // International shipping
    return baseCost + 20;
}

function applyUSStateAdjustment(baseCost, state) {
    const highCostStates = ['CA', 'NY'];
    const mediumCostStates = ['TX', 'FL'];
    
    if (highCostStates.includes(state)) {
        return baseCost + 5;
    }
    
    if (mediumCostStates.includes(state)) {
        return baseCost + 2;
    }
    
    return baseCost;
}

function applyCanadaProvinceAdjustment(baseCost, province) {
    const lowCostProvinces = ['ON', 'BC'];
    
    if (lowCostProvinces.includes(province)) {
        return baseCost + 5;
    }
    
    return baseCost + 15;
}

// ========================================
// REFLECTION
// ========================================
/*
What was improved:
1. Early returns eliminate deep nesting - code is easier to read
2. Guard clauses make invalid cases obvious and handled upfront
3. Complex logic is broken into smaller, focused functions
4. Each function has a single responsibility
5. Code flow is more linear and easier to follow
6. Easier to test individual scenarios
7. Easier to debug - you can see exactly which condition failed
8. More maintainable - changes to one aspect don't affect others

Example usage:
*/
const testUser = { isActive: true, role: 'moderator', id: 1 };
const testResource = { type: 'post', authorId: 2, isPublic: true };
const testAddress = { country: 'US', state: 'CA' };

console.log("Original access check:", processUserAccess(testUser, testResource, 'edit'));
console.log("Refactored access check:", processUserAccessRefactored(testUser, testResource, 'edit'));

const testOrder = { total: 75 };
console.log("Original shipping cost:", calculateShippingCost(testOrder, { isVIP: false }, testAddress));
console.log("Refactored shipping cost:", calculateShippingCostRefactored(testOrder, { isVIP: false }, testAddress));

// Export functions for use in other modules
module.exports = {
    processUserAccess,
    processUserAccessRefactored,
    calculateShippingCost,
    calculateShippingCostRefactored
};
