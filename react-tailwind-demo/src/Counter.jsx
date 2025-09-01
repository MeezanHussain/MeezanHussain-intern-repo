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
    <div className="bg-black rounded-2xl shadow-2xl p-8 border-2 border-cyan-500/30 backdrop-blur-sm relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="relative z-10">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-2">
          Advanced Counter
        </h3>
        <p className="text-gray-300 mb-8">
          Styled with Tailwind CSS
        </p>
        
        {/* Display count value dynamically */}
        <div className="mb-8">
          <div className="relative">
            <div className="text-8xl font-bold text-cyan-400 mb-4 drop-shadow-2xl animate-pulse">
              {count}
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            {/* Neon glow effect */}
            <div className="absolute inset-0 text-8xl font-bold text-cyan-400 opacity-20 blur-sm">
              {count}
            </div>
          </div>
          <p className="text-gray-300 text-lg">
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
          <div className="p-4 bg-gray-900 rounded-xl border-l-4 border-cyan-400">
            <p className="text-cyan-300 text-sm font-medium">
              <strong>useState Hook:</strong> State management
            </p>
          </div>
          
          <div className="p-4 bg-gray-900 rounded-xl border-l-4 border-purple-400">
            <p className="text-purple-300 text-sm font-medium">
              <strong>Tailwind CSS:</strong> Utility-first styling
            </p>
          </div>
          
          <div className="p-4 bg-gray-900 rounded-xl border-l-4 border-green-400">
            <p className="text-green-300 text-sm font-medium">
              <strong>Component Props:</strong> Reusable Button
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Counter;
