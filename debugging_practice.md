# React Debugging Practice: Mutating State and Props

## Overview
This document details the debugging process for recreating and fixing one of the buggy React code examples from the CSS-Tricks article "Three Buggy React Code Examples And How To Fix Them".

**Component Location**: `debugging_practice_example`
**Screenshot**: [Evidence](./screenshots/React_debugging_practice.png)

## The Issue

### What Was the Problem?
The buggy code demonstrated **direct mutation of props/state objects** in React components. Specifically:

- **Buggy Component**: The `BuggyChild` component directly mutated the `state.count` prop by doing `state.count += 5`
- **Root Cause**: Objects in JavaScript are passed by reference, so mutating props directly affects the parent component's state
- **Symptom**: When clicking the increment button multiple times, the buggy component would show incorrect values because it was modifying the same object reference

### Why This Happens
```javascript
// BUGGY CODE - Don't do this!
function BuggyChild({ state }) {
  state.count += 5; // Directly mutates the parent's state object
  return <div>count + 5 = {state.count}</div>;
}
```

The problem occurs because:
1. Objects are passed by reference in JavaScript
2. When the child component mutates `state.count`, it's modifying the same object the parent uses
3. React's state update mechanism gets confused because the object reference hasn't changed
4. This leads to unpredictable behavior and incorrect UI updates

## Debugging Method Used

### 1. Code Analysis
- Identified the problematic line: `state.count += 5`
- Recognized this as a direct mutation of props
- Understood the difference between primitive types (passed by value) vs objects (passed by reference)

### 2. Behavioral Testing
- Created a counter that increments by 1 each time
- Observed that the buggy component showed incorrect "count + 5" values
- Noticed the buggy component's values didn't match the expected calculation

### 3. Console Logging
- Added console logs to track state changes
- Verified that the parent state was being modified unexpectedly
- Confirmed the object reference issue

## How the Problem Was Resolved

### Solution 1: Create a Copy (Recommended)
```javascript
// FIXED CODE - Create a copy to avoid mutation
function FixedChild({ state }) {
  const copy = { ...state }; // Spread operator creates a shallow copy
  copy.count += 5; // Modify the copy, not the original
  return <div>count + 5 = {copy.count}</div>;
}
```

### Solution 2: Use Immutable Data Structures
```javascript
// Alternative approach using immutable patterns
function FixedChild({ state }) {
  const newCount = state.count + 5; // Calculate without mutation
  return <div>count + 5 = {newCount}</div>;
}
```

### Solution 3: Use Libraries
```javascript
// For complex objects, consider libraries like Immer or lodash.cloneDeep
import { produce } from 'immer';

function FixedChild({ state }) {
  const newState = produce(state, draft => {
    draft.count += 5;
  });
  return <div>count + 5 = {newState.count}</div>;
}
```

## Key Takeaways

1. **Never mutate props or state directly** in React
2. **Objects are passed by reference** - changes affect the original
3. **Always create copies** when you need to modify data
4. **Use spread operator** (`...`) for shallow copying
5. **Consider immutable patterns** for complex state management

## Resources

- [CSS-Tricks Article](https://css-tricks.com/three-buggy-react-code-examples-and-how-to-fix-them/)
- [React Docs on Props](https://react.dev/learn/passing-props-to-a-component)
- [JavaScript Object References](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
