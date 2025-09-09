import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset, selectCounter, selectCounterStatus, selectCounterMessage } from './store/counterSlice';
import Button from './Button';

function Counter() {
  // useSelector hooks with selector functions
  const count = useSelector(selectCounter);
  const status = useSelector(selectCounterStatus);
  const message = useSelector(selectCounterMessage);
  
  // useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Function to increment count
  const incrementCount = () => {
    dispatch(increment());
  };

  // Function to decrement count
  const decrementCount = () => {
    dispatch(decrement());
  };

  // Function to reset count
  const resetCount = () => {
    dispatch(reset());
  };

  // Function to double count
  const doubleCount = () => {
    dispatch(incrementByAmount(count));
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
            {/* Main count display with dynamic styling based on status */}
            <div className={`text-8xl font-black mb-6 animate-gentle-float ${
              status === 'zero' ? 'text-gray-400' :
              status === 'low' ? 'text-gradient-blue' :
              status === 'medium' ? 'text-gradient-purple' :
              status === 'high' ? 'text-gradient-green' :
              'text-red-500'
            }`}>
              {count}
            </div>
            
            {/* Status indicator with dynamic color */}
            <div className={`absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg animate-pulse ${
              status === 'zero' ? 'bg-gray-400' :
              status === 'low' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
              status === 'medium' ? 'bg-gradient-to-r from-purple-400 to-purple-500' :
              status === 'high' ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
              'bg-gradient-to-r from-red-400 to-red-500'
            }`}>
              <span className="text-white text-sm font-bold">
                {status === 'zero' ? '0' :
                 status === 'low' ? '↗' :
                 status === 'medium' ? '⚡' :
                 status === 'high' ? '🚀' :
                 '↙'}
              </span>
            </div>
          </div>
          
          {/* Dynamic message based on counter value */}
          <div className="space-y-2">
            <p className="text-gray-600 text-xl font-medium">
              Current count value
            </p>
            <p className={`text-lg font-semibold ${
              status === 'zero' ? 'text-gray-500' :
              status === 'low' ? 'text-blue-600' :
              status === 'medium' ? 'text-purple-600' :
              status === 'high' ? 'text-green-600' :
              'text-red-600'
            }`}>
              {message}
            </p>
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              status === 'zero' ? 'bg-gray-100 text-gray-600' :
              status === 'low' ? 'bg-blue-100 text-blue-700' :
              status === 'medium' ? 'bg-purple-100 text-purple-700' :
              status === 'high' ? 'bg-green-100 text-green-700' :
              'bg-red-100 text-red-700'
            }`}>
              Status: {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
          </div>
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
              <strong>Redux Toolkit:</strong> Global state management
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
