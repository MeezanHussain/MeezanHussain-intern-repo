# Clean Code Principles

## Core Principles

### 1. Simplicity
Keep code as simple as possible. Avoid unnecessary complexity - if you can solve it in 3 lines, don't use 10.

### 2. Readability
Code should be self-documenting. Other developers (including future you) should understand it at a glance.

### 3. Maintainability
Write code that's easy to modify and extend. Future developers should be able to work with it without breaking existing functionality.

### 4. Consistency
Follow established style guides and project conventions. Use the same patterns throughout your codebase.

### 5. Efficiency
Write performant code, but avoid premature optimization. Make it work first, then make it fast.

## Messy Code Example

### Before (Messy)
```javascript
function d(x,y,z){let a=0;for(let i=0;i<x.length;i++){if(x[i]==y){a++;}if(x[i]==z){a++;}}return a;}
```

**Why it's bad:**
- Single-letter variables (`d`, `x`, `y`, `z`, `a`)
- No spacing or formatting
- Unclear what the function does
- Hard to debug and maintain

### After (Clean)
```javascript
function countOccurrences(array, value1, value2) {
    let totalCount = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value1) {
            totalCount++;
        }
        if (array[i] === value2) {
            totalCount++;
        }
    }
    
    return totalCount;
}
```

**Why it's better:**
- Descriptive function and variable names
- Clear formatting and spacing
- Easy to understand purpose
- Simple to modify and debug

