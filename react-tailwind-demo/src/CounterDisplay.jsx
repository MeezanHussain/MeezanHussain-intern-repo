import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounter, selectCounterStatus, selectCounterMessage } from './store/counterSlice';

function CounterDisplay() {
  // Using selectors to access Redux state
  const count = useSelector(selectCounter);
  const status = useSelector(selectCounterStatus);
  const message = useSelector(selectCounterMessage);

  return (
    <div className="card-professional p-6 text-center bg-gradient-to-r from-blue-50 to-purple-50">
      <h4 className="text-2xl font-bold text-gray-800 mb-4">
        Counter Status Dashboard
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Current Value Card */}
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {count}
          </div>
          <p className="text-gray-600 text-sm font-medium">Current Value</p>
        </div>
        
        {/* Status Card */}
        <div className={`p-4 rounded-lg shadow-sm border ${
          status === 'zero' ? 'bg-gray-50 border-gray-200' :
          status === 'low' ? 'bg-blue-50 border-blue-200' :
          status === 'medium' ? 'bg-purple-50 border-purple-200' :
          status === 'high' ? 'bg-green-50 border-green-200' :
          'bg-red-50 border-red-200'
        }`}>
          <div className={`text-lg font-bold mb-2 ${
            status === 'zero' ? 'text-gray-600' :
            status === 'low' ? 'text-blue-600' :
            status === 'medium' ? 'text-purple-600' :
            status === 'high' ? 'text-green-600' :
            'text-red-600'
          }`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
          <p className="text-gray-600 text-sm font-medium">Status Level</p>
        </div>
        
        {/* Message Card */}
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm font-semibold text-gray-800 mb-2">
            "{message}"
          </div>
          <p className="text-gray-600 text-sm font-medium">Motivation</p>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">Progress</span>
          <span className="text-sm text-gray-600">{Math.min(count, 15)}/15</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              status === 'zero' ? 'bg-gray-400' :
              status === 'low' ? 'bg-blue-500' :
              status === 'medium' ? 'bg-purple-500' :
              status === 'high' ? 'bg-green-500' :
              'bg-red-500'
            }`}
            style={{ width: `${Math.min((count / 15) * 100, 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CounterDisplay;
