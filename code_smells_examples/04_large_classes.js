// ========================================
// CODE SMELL: Large Classes (God Objects)
// ========================================

// ❌ BAD: One class handling too many responsibilities
class UserManager {
    constructor() {
        this.users = [];
        this.currentUser = null;
        this.authToken = null;
        this.userPreferences = {};
        this.notificationSettings = {};
        this.paymentMethods = [];
        this.orderHistory = [];
        this.wishlist = [];
        this.reviews = [];
        this.friends = [];
        this.groups = [];
    }
    
    // Authentication methods
    login(email, password) {
        // Complex login logic
        if (email && password) {
            const user = this.users.find(u => u.email === email);
            if (user && user.password === password) {
                this.currentUser = user;
                this.authToken = this.generateToken(user);
                this.loadUserPreferences(user.id);
                this.loadNotificationSettings(user.id);
                return { success: true, user: user };
            }
        }
        return { success: false, error: 'Invalid credentials' };
    }
    
    logout() {
        this.currentUser = null;
        this.authToken = null;
        this.userPreferences = {};
        this.notificationSettings = {};
    }
    
    register(userData) {
        // Complex registration logic
        if (this.validateUserData(userData)) {
            const newUser = {
                id: this.generateUserId(),
                ...userData,
                createdAt: new Date(),
                preferences: {},
                notifications: {}
            };
            this.users.push(newUser);
            return { success: true, user: newUser };
        }
        return { success: false, error: 'Invalid user data' };
    }
    
    // User profile methods
    updateProfile(userId, updates) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            Object.assign(user, updates);
            this.saveUserToDatabase(user);
            return { success: true, user: user };
        }
        return { success: false, error: 'User not found' };
    }
    
    getProfile(userId) {
        return this.users.find(u => u.id === userId);
    }
    
    // Payment methods
    addPaymentMethod(userId, paymentData) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            const paymentMethod = {
                id: this.generatePaymentId(),
                ...paymentData,
                addedAt: new Date()
            };
            user.paymentMethods.push(paymentMethod);
            return { success: true, paymentMethod: paymentMethod };
        }
        return { success: false, error: 'User not found' };
    }
    
    removePaymentMethod(userId, paymentId) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            user.paymentMethods = user.paymentMethods.filter(pm => pm.id !== paymentId);
            return { success: true };
        }
        return { success: false, error: 'User not found' };
    }
    
    // Order management
    createOrder(userId, items) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            const order = {
                id: this.generateOrderId(),
                userId: userId,
                items: items,
                total: this.calculateOrderTotal(items),
                status: 'pending',
                createdAt: new Date()
            };
            user.orderHistory.push(order);
            return { success: true, order: order };
        }
        return { success: false, error: 'User not found' };
    }
    
    getOrderHistory(userId) {
        const user = this.users.find(u => u.id === userId);
        return user ? user.orderHistory : [];
    }
    
    // Social features
    addFriend(userId, friendId) {
        const user = this.users.find(u => u.id === userId);
        const friend = this.users.find(u => u.id === friendId);
        if (user && friend) {
            user.friends.push(friendId);
            friend.friends.push(userId);
            return { success: true };
        }
        return { success: false, error: 'User or friend not found' };
    }
    
    createGroup(userId, groupData) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            const group = {
                id: this.generateGroupId(),
                creatorId: userId,
                members: [userId],
                ...groupData,
                createdAt: new Date()
            };
            user.groups.push(group.id);
            return { success: true, group: group };
        }
        return { success: false, error: 'User not found' };
    }
    
    // Utility methods (mixed in with business logic)
    generateToken(user) {
        return `token_${user.id}_${Date.now()}`;
    }
    
    generateUserId() {
        return `user_${Date.now()}_${Math.random()}`;
    }
    
    generatePaymentId() {
        return `payment_${Date.now()}_${Math.random()}`;
    }
    
    generateOrderId() {
        return `order_${Date.now()}_${Math.random()}`;
    }
    
    generateGroupId() {
        return `group_${Date.now()}_${Math.random()}`;
    }
    
    validateUserData(userData) {
        return userData.email && userData.password && userData.name;
    }
    
    calculateOrderTotal(items) {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
    
    loadUserPreferences(userId) {
        // Load from database
        this.userPreferences = { theme: 'dark', language: 'en' };
    }
    
    loadNotificationSettings(userId) {
        // Load from database
        this.notificationSettings = { email: true, push: false };
    }
    
    saveUserToDatabase(user) {
        // Save to database
        console.log('Saving user to database:', user.id);
    }
}

// ========================================
// REFACTORED VERSION: Single Responsibility
// ========================================

// ✅ GOOD: Each class has one clear responsibility

// Authentication service
class AuthenticationService {
    constructor() {
        this.currentUser = null;
        this.authToken = null;
    }
    
    login(email, password) {
        if (email && password) {
            // Authentication logic here
            this.currentUser = { id: 1, email: email };
            this.authToken = this.generateToken(this.currentUser);
            return { success: true, user: this.currentUser };
        }
        return { success: false, error: 'Invalid credentials' };
    }
    
    logout() {
        this.currentUser = null;
        this.authToken = null;
    }
    
    register(userData) {
        if (this.validateUserData(userData)) {
            const newUser = {
                id: this.generateUserId(),
                ...userData,
                createdAt: new Date()
            };
            return { success: true, user: newUser };
        }
        return { success: false, error: 'Invalid user data' };
    }
    
    generateToken(user) {
        return `token_${user.id}_${Date.now()}`;
    }
    
    generateUserId() {
        return `user_${Date.now()}_${Math.random()}`;
    }
    
    validateUserData(userData) {
        return userData.email && userData.password && userData.name;
    }
}

// User profile service
class UserProfileService {
    constructor() {
        this.users = [];
    }
    
    updateProfile(userId, updates) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            Object.assign(user, updates);
            this.saveUserToDatabase(user);
            return { success: true, user: user };
        }
        return { success: false, error: 'User not found' };
    }
    
    getProfile(userId) {
        return this.users.find(u => u.id === userId);
    }
    
    saveUserToDatabase(user) {
        console.log('Saving user to database:', user.id);
    }
}

// Payment service
class PaymentService {
    constructor() {
        this.paymentMethods = [];
    }
    
    addPaymentMethod(userId, paymentData) {
        const paymentMethod = {
            id: this.generatePaymentId(),
            userId: userId,
            ...paymentData,
            addedAt: new Date()
        };
        this.paymentMethods.push(paymentMethod);
        return { success: true, paymentMethod: paymentMethod };
    }
    
    removePaymentMethod(userId, paymentId) {
        this.paymentMethods = this.paymentMethods.filter(pm => 
            pm.userId === userId && pm.id !== paymentId
        );
        return { success: true };
    }
    
    generatePaymentId() {
        return `payment_${Date.now()}_${Math.random()}`;
    }
}

// Order service
class OrderService {
    constructor() {
        this.orders = [];
    }
    
    createOrder(userId, items) {
        const order = {
            id: this.generateOrderId(),
            userId: userId,
            items: items,
            total: this.calculateOrderTotal(items),
            status: 'pending',
            createdAt: new Date()
        };
        this.orders.push(order);
        return { success: true, order: order };
    }
    
    getOrderHistory(userId) {
        return this.orders.filter(order => order.userId === userId);
    }
    
    generateOrderId() {
        return `order_${Date.now()}_${Math.random()}`;
    }
    
    calculateOrderTotal(items) {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}

// Social service
class SocialService {
    constructor() {
        this.friends = [];
        this.groups = [];
    }
    
    addFriend(userId, friendId) {
        this.friends.push({ userId, friendId, addedAt: new Date() });
        return { success: true };
    }
    
    createGroup(userId, groupData) {
        const group = {
            id: this.generateGroupId(),
            creatorId: userId,
            members: [userId],
            ...groupData,
            createdAt: new Date()
        };
        this.groups.push(group);
        return { success: true, group: group };
    }
    
    generateGroupId() {
        return `group_${Date.now()}_${Math.random()}`;
    }
}

// User preferences service
class UserPreferencesService {
    constructor() {
        this.preferences = {};
        this.notificationSettings = {};
    }
    
    loadUserPreferences(userId) {
        this.preferences = { theme: 'dark', language: 'en' };
    }
    
    loadNotificationSettings(userId) {
        this.notificationSettings = { email: true, push: false };
    }
}

// Main user manager that coordinates services
class UserManagerRefactored {
    constructor() {
        this.authService = new AuthenticationService();
        this.profileService = new UserProfileService();
        this.paymentService = new PaymentService();
        this.orderService = new OrderService();
        this.socialService = new SocialService();
        this.preferencesService = new UserPreferencesService();
    }
    
    // Delegate to appropriate service
    login(email, password) {
        return this.authService.login(email, password);
    }
    
    logout() {
        this.authService.logout();
    }
    
    register(userData) {
        return this.authService.register(userData);
    }
    
    updateProfile(userId, updates) {
        return this.profileService.updateProfile(userId, updates);
    }
    
    addPaymentMethod(userId, paymentData) {
        return this.paymentService.addPaymentMethod(userId, paymentData);
    }
    
    createOrder(userId, items) {
        return this.orderService.createOrder(userId, items);
    }
    
    addFriend(userId, friendId) {
        return this.socialService.addFriend(userId, friendId);
    }
}

// ========================================
// REFLECTION
// ========================================
/*
What was improved:
1. Each class now has a single, clear responsibility
2. Code is easier to test - you can test each service independently
3. Changes to one aspect (e.g., payment logic) don't affect other parts
4. Services can be reused in different contexts
5. Easier to understand what each class does
6. Better separation of concerns
7. More maintainable and extensible code
8. Easier to debug - you know exactly which service to look at

Example usage:
*/
const userManager = new UserManagerRefactored();
console.log("Login:", userManager.login("john@example.com", "password123"));
console.log("Create order:", userManager.createOrder(1, [{ name: "Book", price: 25, quantity: 1 }]));
console.log("Add payment method:", userManager.addPaymentMethod(1, { type: "credit", number: "1234" }));

// Export classes for use in other modules
module.exports = {
    UserManager,
    UserManagerRefactored
};
