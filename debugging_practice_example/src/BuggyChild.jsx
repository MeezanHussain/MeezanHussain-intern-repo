import React from 'react';

// BUGGY COMPONENT - This demonstrates the problem!
// This component directly mutates the state prop, which is wrong in React
function BuggyChild({ state }) {
  // 🚨 BUG: Directly mutating the parent's state object
  // This is the problematic line that causes the bug
  state.count += 5;
  
  console.log('BuggyChild: state.count is now', state.count);
  
  return (
    <div className="counter-display">
      <strong>Buggy Component:</strong> count + 5 = {state.count}
      <div className="warning">
        ⚠️ This component directly mutates the parent's state!
      </div>
    </div>
  );
}

export default BuggyChild;
