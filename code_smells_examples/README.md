# Code Smells Examples

This folder contains practical examples of common code smells and their refactored versions. Each file demonstrates a specific code smell and shows how to improve it.

## Files Overview

### 1. [01_magic_numbers.js](01_magic_numbers.js)
**Code Smell**: Magic Numbers & Strings
- **Problem**: Hardcoded values scattered throughout code
- **Solution**: Use named constants for better readability and maintainability
- **Key Improvement**: Constants make code self-documenting

### 2. [02_long_functions.js](02_long_functions.js)
**Code Smell**: Long Functions
- **Problem**: Functions that do too many things
- **Solution**: Break into smaller, focused functions with single responsibility
- **Key Improvement**: Easier to test, debug, and maintain

### 3. [03_duplicate_code.js](03_duplicate_code.js)
**Code Smell**: Duplicate Code
- **Problem**: Same logic repeated in multiple places
- **Solution**: Extract common functionality into reusable functions
- **Key Improvement**: DRY principle - Don't Repeat Yourself

### 4. [04_large_classes.js](04_large_classes.js)
**Code Smell**: Large Classes (God Objects)
- **Problem**: Classes handling too many responsibilities
- **Solution**: Split into focused services with single responsibility
- **Key Improvement**: Better separation of concerns and testability

### 5. [05_nested_conditionals.js](05_nested_conditionals.js)
**Code Smell**: Deeply Nested Conditionals
- **Problem**: Complex if/else trees hard to follow
- **Solution**: Use early returns and guard clauses
- **Key Improvement**: More readable, linear code flow

### 6. [06_commented_code.js](06_commented_code.js)
**Code Smell**: Commented-Out Code
- **Problem**: Dead code cluttering the codebase
- **Solution**: Remove unused code and use version control for history
- **Key Improvement**: Cleaner, more focused code

### 7. [07_inconsistent_naming.js](07_inconsistent_naming.js)
**Code Smell**: Inconsistent Naming
- **Problem**: Variables and functions with unclear names
- **Solution**: Use descriptive, consistent naming conventions
- **Key Improvement**: Self-documenting code

## How to Use These Examples

### Running the Examples
Each file can be run directly with Node.js:
```bash
node 01_magic_numbers.js
node 02_long_functions.js
# etc.
```

### Learning Approach
1. **Read the "BAD" code first** - understand what makes it problematic
2. **Study the refactored version** - see how it improves the code
3. **Read the reflection** - understand the specific benefits
4. **Run the examples** - see the output differences
5. **Experiment** - modify the code to see how changes affect behavior

### Key Patterns to Learn
- **Single Responsibility Principle**: Each function/class does one thing
- **DRY Principle**: Don't Repeat Yourself
- **Guard Clauses**: Early returns to reduce nesting
- **Descriptive Naming**: Clear, self-documenting code
- **Separation of Concerns**: Different responsibilities in different modules

## Benefits of Refactoring

### Readability
- Code is easier to understand at a glance
- Less cognitive load when reading
- Self-documenting through good naming

### Maintainability
- Changes are easier to make safely
- Bug fixes only need to be applied in one place
- Code structure is clearer

### Debugging
- Smaller functions are easier to test
- Clear naming reduces confusion
- Easier to isolate problems

### Team Collaboration
- New developers can understand code faster
- Code reviews are more effective
- Consistent patterns across the codebase

## Best Practices Summary

1. **Use constants** instead of magic numbers/strings
2. **Keep functions small** and focused on one task
3. **Extract common logic** to avoid duplication
4. **Split large classes** into focused services
5. **Use early returns** to reduce nesting
6. **Remove dead code** - use version control for history
7. **Choose descriptive names** that explain purpose

## Next Steps

After studying these examples:
1. **Apply the patterns** to your own code
2. **Practice refactoring** existing code
3. **Use code reviews** to identify smells
4. **Automate detection** with linting tools
5. **Make refactoring** a regular part of your development process

Remember: Code smells are warning signs, not errors. They indicate areas where code could be improved for better maintainability and readability.
