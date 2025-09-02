import React, { useState } from 'react';
import BuggyChild from './BuggyChild';
import FixedChild from './FixedChild';
import './App.css';

function App() {
  const [state, setState] = useState({ count: 0 });

  const increment = () => {
    setState(prevState => ({
      ...prevState,
      count: prevState.count + 1
    }));
  };

  const reset = () => {
    setState({ count: 0 });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>React Debugging Practice</h1>
        <p>Demonstrating State Mutation Bug and Fix</p>
      </div>

      <div className="demo-section">
        <h2>Parent Component State</h2>
        <div className="counter-display">
          <strong>Current count:</strong> {state.count}
        </div>
        <button className="button" onClick={increment}>
          Increment Count (+1)
        </button>
        <button className="button" onClick={reset}>
          Reset Count
        </button>
      </div>

      <div className="demo-section buggy">
        <h2 className="demo-title">🚨 Buggy Child Component</h2>
        <p>This component directly mutates the parent's state object:</p>
        <BuggyChild state={state} />
        <div className="warning">
          <strong>Problem:</strong> The buggy component modifies the same object reference 
          that the parent uses, causing unpredictable behavior. Notice how the values 
          don't match the expected calculation after multiple clicks!
        </div>
      </div>

      <div className="demo-section fixed">
        <h2 className="demo-title">✅ Fixed Child Component</h2>
        <p>This component creates a copy before modifying the data:</p>
        <FixedChild state={state} />
        <div className="success">
          <strong>Solution:</strong> The fixed component creates a shallow copy using the 
          spread operator (...), so it doesn't affect the parent's state. The calculation 
          is always correct!
        </div>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">Instructions</h2>
        <ol>
          <li>Click "Increment Count" several times</li>
          <li>Notice how the buggy component shows incorrect values</li>
          <li>Notice how the fixed component always shows the correct calculation</li>
          <li>Open the browser console to see the logging output</li>
          <li>Try clicking increment multiple times rapidly to see the bug more clearly</li>
        </ol>
      </div>

      <div className="demo-section">
        <h2 className="demo-title">Key Learning Points</h2>
        <ul>
          <li><strong>Never mutate props or state directly</strong> in React</li>
          <li><strong>Objects are passed by reference</strong> - changes affect the original</li>
          <li><strong>Always create copies</strong> when you need to modify data</li>
          <li><strong>Use spread operator</strong> (...) for shallow copying</li>
          <li><strong>Consider immutable patterns</strong> for complex state management</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
