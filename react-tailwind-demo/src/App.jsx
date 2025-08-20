import React, { useState } from 'react'

// Buggy Child component that mutates props
function BuggyChild({ state }) {
  // This is the buggy part - we're mutating the props directly!
  state.count += 5;
  
  return (
    <div className="bg-red-100 p-4 rounded-lg border border-red-300">
      <p className="text-red-800 font-semibold">Buggy Child Component</p>
      <p className="text-red-700">count + 5 = {state.count}</p>
      <p className="text-xs text-red-600 mt-2">
        ⚠️ This component mutates props directly - this is bad!
      </p>
    </div>
  );
}

// Fixed Child component that doesn't mutate props
function FixedChild({ state }) {
  // Create a copy to avoid mutation
  const copy = { ...state };
  copy.count += 5;
  
  return (
    <div className="bg-green-100 p-4 rounded-lg border border-green-300">
      <p className="text-green-800 font-semibold">Fixed Child Component</p>
      <p className="text-green-700">count + 5 = {copy.count}</p>
      <p className="text-xs text-green-600 mt-2">
        ✅ This component creates a copy - this is good!
      </p>
    </div>
  );
}

function App() {
  const [state, setState] = useState({ count: 0 });

  const incrementCount = () => {
    setState(prevState => ({
      ...prevState,
      count: prevState.count + 1
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            React Buggy Code Example
          </h1>
          <p className="text-lg text-gray-600">
            Demonstrating the "Mutating State and Props" bug from CSS-Tricks article
          </p>
        </header>
        
        <main className="max-w-4xl mx-auto space-y-8">
          {/* Counter Display */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Counter State</h2>
            <p className="text-lg text-gray-600 mb-4">
              Current count: <span className="font-bold text-blue-600">{state.count}</span>
            </p>
            <button 
              onClick={incrementCount}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Increment Count
            </button>
          </div>

          {/* Buggy Component */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Buggy Implementation</h2>
            <BuggyChild state={state} />
            <p className="text-sm text-gray-600 mt-3">
              Click the increment button multiple times and watch the buggy behavior!
            </p>
          </div>

          {/* Fixed Component */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fixed Implementation</h2>
            <FixedChild state={state} />
            <p className="text-sm text-gray-600 mt-3">
              This component works correctly and doesn't affect the parent state.
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-300">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">How to Reproduce the Bug:</h3>
            <ol className="list-decimal list-inside text-yellow-700 space-y-1">
              <li>Click "Increment Count" button several times</li>
              <li>Notice how the buggy component shows incorrect values</li>
              <li>The buggy component mutates the parent's state object directly</li>
              <li>This causes unexpected behavior because objects are passed by reference</li>
            </ol>
          </div>
        </main>

        <footer className="text-center mt-16 text-gray-500">
          <p>Based on CSS-Tricks article: "Three Buggy React Code Examples And How To Fix Them"</p>
        </footer>
      </div>
    </div>
  )
}

export default App
