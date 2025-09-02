import React from 'react';

// FIXED COMPONENT - This demonstrates the correct approach
// This component creates a copy of the state instead of mutating the original
function FixedChild({ state }) {
  // ✅ FIX: Create a copy to avoid mutation
  const copy = { ...state }; // Spread operator creates a shallow copy
  copy.count += 5; // Modify the copy, not the original
  
  console.log('FixedChild: original state.count is', state.count);
  console.log('FixedChild: copy.count is', copy.count);
  
  return (
    <div className="counter-display">
      <strong>Fixed Component:</strong> count + 5 = {copy.count}
      <div className="success">
        ✅ This component creates a copy and doesn't mutate the parent's state!
      </div>
    </div>
  );
}

export default FixedChild;
