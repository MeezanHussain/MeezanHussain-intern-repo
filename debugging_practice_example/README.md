# React Debugging Practice Example

This project demonstrates a common React bug where child components directly mutate parent state, and shows how to fix it.

## The Problem

The buggy component directly mutates the `state.count` prop by doing `state.count += 5`. This is problematic because:

1. Objects in JavaScript are passed by reference
2. When the child component mutates `state.count`, it's modifying the same object the parent uses
3. React's state update mechanism gets confused because the object reference hasn't changed
4. This leads to unpredictable behavior and incorrect UI updates

## The Solution

The fixed component creates a copy of the state using the spread operator (`...`) before modifying it:

```javascript
const copy = { ...state }; // Create a shallow copy
copy.count += 5; // Modify the copy, not the original
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000`

## How to Test the Bug

1. Click "Increment Count" several times
2. Notice how the buggy component shows incorrect values
3. Notice how the fixed component always shows the correct calculation
4. Open the browser console to see the logging output
5. Try clicking increment multiple times rapidly to see the bug more clearly

## Key Learning Points

- **Never mutate props or state directly** in React
- **Objects are passed by reference** - changes affect the original
- **Always create copies** when you need to modify data
- **Use spread operator** (`...`) for shallow copying
- **Consider immutable patterns** for complex state management

## Files Structure

```
src/
├── App.jsx          # Main app component with state management
├── BuggyChild.jsx   # Component that demonstrates the bug
├── FixedChild.jsx   # Component that shows the fix
├── App.css          # Styles for the demo
├── index.css        # Global styles
└── main.jsx         # React app entry point
```

## Related Documentation

This example is based on the debugging practice described in `../debugging_practice.md`.
