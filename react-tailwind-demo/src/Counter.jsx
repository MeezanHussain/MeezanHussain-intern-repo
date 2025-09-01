import React, { useState } from 'react';

function Counter() {
  // useState hook to manage count state
  const [count, setCount] = useState(0);

  // Function to increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to reset count
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Counter Component
        </h3>
        
        {/* Display count value dynamically */}
        <div className="mb-6">
          <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {count}
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Current count value
          </p>
        </div>

        {/* Buttons */}
        <div className="space-x-4">
          <button 
            onClick={incrementCount}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Increment (+1)
          </button>
          
          <button 
            onClick={resetCount}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Reset
          </button>
        </div>

        {/* State information */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>useState Hook:</strong> Managing state with React's built-in hook
          </p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
