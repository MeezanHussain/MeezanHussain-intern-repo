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
    <div className="relative group">
      {/* Holographic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 animate-gradient-shift"></div>
      
      {/* Main container */}
      <div className="relative glass-dark rounded-3xl shadow-2xl p-10 border border-cyan-500/40 backdrop-blur-lg overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-shift"></div>
        
        <div className="relative z-10">
          <div className="text-center">
        <h3 className="text-4xl font-bold gradient-text mb-4 animate-fade-in-up">
          Advanced Counter
        </h3>
        <p className="text-gray-300 mb-10 text-lg">
          Styled with Tailwind CSS & Advanced Effects
        </p>
        
        {/* Display count value dynamically */}
        <div className="mb-12">
          <div className="relative">
            {/* Main count display */}
            <div className="text-9xl font-black neon-text-cyan mb-6 drop-shadow-2xl animate-float">
              {count}
            </div>
            
            {/* Floating success indicator */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 animate-bounce">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
            
            {/* Neon glow effect */}
            <div className="absolute inset-0 text-9xl font-black text-cyan-400 opacity-30 blur-lg animate-glow">
              {count}
            </div>
            
            {/* Particle effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
          <p className="text-gray-300 text-xl font-medium">
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
    </div>
  );
}

export default Counter;
