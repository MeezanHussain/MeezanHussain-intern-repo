# Redux Fundamentals - Reflection

## Overview
I've successfully implemented Redux Toolkit for global state management in the react-tailwind-demo project, converting the existing Counter component from local useState to Redux-managed state.

## Implementation Details

**Redux Store:** `react-tailwind-demo/src/store/store.js`  
**Counter Slice:** `react-tailwind-demo/src/store/counterSlice.js`  
**Updated Component:** `react-tailwind-demo/src/Counter.jsx`
**Screenshot_1:** `screenshots/Redux_Toolkit.png`

## Key Question & Reflection

### When should you use Redux instead of useState?

The decision between Redux and useState depends on several key factors:

**Use useState when:**
- State is local to a single component
- State doesn't need to be shared across multiple components
- The application is small with simple state requirements
- State changes are straightforward and don't require complex logic

**Use Redux when:**
- State needs to be shared across multiple components at different levels
- You have complex state that requires centralized management
- Multiple components need to read and update the same data
- You need predictable state updates with time-travel debugging capabilities
- The application is large with complex data flow requirements

In my implementation, I converted the Counter component from useState to Redux to demonstrate how global state management works. While a simple counter could use useState, Redux provides benefits like:

- **Centralized State**: The counter value is now accessible from any component in the application
- **Predictable Updates**: All state changes go through defined reducers with clear actions
- **Debugging**: Redux DevTools allow tracking all state changes and time-travel debugging
- **Scalability**: Easy to add more complex state logic and share counter state with other components

Redux Toolkit specifically simplifies Redux usage by providing:
- **createSlice**: Combines actions and reducers in one place
- **Immer Integration**: Allows "mutating" state syntax that's actually immutable
- **configureStore**: Sets up the store with good defaults and DevTools integration

The implementation shows how useSelector retrieves state from the Redux store and useDispatch sends actions to update that state, replacing the need for prop drilling or context passing in larger applications.
