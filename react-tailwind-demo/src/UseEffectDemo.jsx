import React, { useState, useEffect } from 'react';

function UseEffectDemo() {
  // State for managing data and loading states
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  // useEffect with empty dependency array - runs only on mount and unmount
  useEffect(() => {
    console.log('🚀 Component mounted - useEffect with empty dependency array');
    
    // Cleanup function - runs when component unmounts
    return () => {
      console.log('🧹 Component unmounted - cleanup function executed');
    };
  }, []); // Empty dependency array means this runs only once

  // useEffect with dependency array - runs when count changes
  useEffect(() => {
    console.log(`📊 Count changed to: ${count}`);
    
    // This could be used for analytics, logging, etc.
    if (count > 5) {
      console.log('🎉 Count exceeded 5!');
    }
  }, [count]); // Runs whenever count changes

  // useEffect for timer - demonstrates cleanup with intervals
  useEffect(() => {
    console.log('⏰ Timer started');
    
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    // Cleanup function to clear interval
    return () => {
      console.log('⏰ Timer stopped and cleaned up');
      clearInterval(interval);
    };
  }, []); // Empty dependency array - timer starts once

  // Function to fetch data from API
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Using JSONPlaceholder API for demo
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
      console.log('📡 Data fetched successfully:', result);
    } catch (err) {
      setError(err.message);
      console.error('❌ Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Function to increment count
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to reset everything
  const resetAll = () => {
    setData(null);
    setError(null);
    setCount(0);
    setTimer(0);
    console.log('🔄 All state reset');
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4">
          ⚡ useEffect Hook Demo
        </h2>
        <p className="text-gray-600 text-lg">
          Demonstrating side effects, API calls, and cleanup functions
        </p>
      </div>

      {/* Timer Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">⏱️ Timer (Auto-cleanup)</h3>
        <div className="text-center">
          <div className="text-6xl font-bold text-blue-600 mb-4">
            {timer}s
          </div>
          <p className="text-gray-600">
            This timer starts automatically when component mounts and cleans up when unmounted
          </p>
        </div>
      </div>

      {/* Counter Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🔢 Counter (Dependency Array)</h3>
        <div className="text-center">
          <div className="text-6xl font-bold text-purple-600 mb-4">
            {count}
          </div>
          <button
            onClick={incrementCount}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Increment Count
          </button>
          <p className="text-gray-600 mt-4">
            Check console to see useEffect logs when count changes
          </p>
        </div>
      </div>

      {/* API Fetching Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🌐 API Data Fetching</h3>
        
        <div className="text-center mb-6">
          <button
            onClick={fetchData}
            disabled={loading}
            className={`px-6 py-3 font-semibold rounded-xl transform transition-all duration-200 shadow-lg hover:shadow-xl ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 hover:scale-105'
            }`}
          >
            {loading ? '🔄 Loading...' : '📡 Fetch Data'}
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="text-gray-600 mt-2">Fetching data from API...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
            <div className="flex items-center">
              <span className="text-red-500 text-2xl mr-3">❌</span>
              <div>
                <h4 className="text-red-800 font-semibold">Error fetching data</h4>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Data Display */}
        {data && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-start">
              <span className="text-green-500 text-2xl mr-3">✅</span>
              <div className="flex-1">
                <h4 className="text-green-800 font-semibold text-lg mb-2">Fetched Data:</h4>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="text-gray-800 mb-2">
                    <span className="font-semibold">ID:</span> {data.id}
                  </p>
                  <p className="text-gray-800 mb-2">
                    <span className="font-semibold">Title:</span> {data.title}
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold">Body:</span> {data.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Console Instructions */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">🔍 Console Logs</h3>
        <p className="text-yellow-700 mb-2">
          Open your browser's developer console to see useEffect logs:
        </p>
        <ul className="text-yellow-700 space-y-1">
          <li>• 🚀 Component mount/unmount messages</li>
          <li>• 📊 Count change notifications</li>
          <li>• ⏰ Timer start/stop messages</li>
          <li>• 📡 API fetch success/error logs</li>
        </ul>
      </div>

      {/* Reset Button */}
      <div className="text-center">
        <button
          onClick={resetAll}
          className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          🔄 Reset All
        </button>
      </div>
    </div>
  );
}

export default UseEffectDemo;
