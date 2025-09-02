import React, { useState } from 'react';
import Button from './Button';

function Counter() {
  // useState hook to manage count state
  const [count, setCount] = useState(0);

  // Function to increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to decrement count
  const decrementCount = () => {
    setCount(count - 1);
  };

  // Function to reset count
  const resetCount = () => {
    setCount(0);
  };

  // Function to double count
  const doubleCount = () => {
    setCount(count * 2);
  };

  return (
    <div className="card-professional p-10 text-center">
      <div className="relative">
        <h3 className="text-4xl font-bold text-gradient-purple mb-4">
          Advanced Counter
        </h3>
        <p className="text-gray-600 mb-10 text-lg">
          Styled with Tailwind CSS & Professional Design
        </p>
        
        {/* Display count value dynamically */}
        <div className="mb-12">
          <div className="relative">
            {/* Main count display */}
            <div className="text-8xl font-black text-gradient-blue mb-6 animate-gentle-float">
              {count}
            </div>
            
            {/* Success indicator */}
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
          </div>
          <p className="text-gray-600 text-xl font-medium">
            Current count value
          </p>
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Button 
            onClick={incrementCount}
            variant="primary"
            size="large"
            className="w-full"
          >
            Increment (+1)
          </Button>
          
          <Button 
            onClick={decrementCount}
            variant="secondary"
            size="large"
            className="w-full"
            disabled={count <= 0}
          >
            Decrement (-1)
          </Button>
          
          <Button 
            onClick={doubleCount}
            variant="success"
            size="large"
            className="w-full"
          >
            Double (×2)
          </Button>
          
          <Button 
            onClick={resetCount}
            variant="danger"
            size="large"
            className="w-full"
            disabled={count === 0}
          >
            Reset (0)
          </Button>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-400">
            <p className="text-blue-700 text-sm font-medium">
              <strong>useState Hook:</strong> State management
            </p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-400">
            <p className="text-purple-700 text-sm font-medium">
              <strong>Tailwind CSS:</strong> Utility-first styling
            </p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-400">
            <p className="text-green-700 text-sm font-medium">
              <strong>Component Props:</strong> Reusable Button
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
