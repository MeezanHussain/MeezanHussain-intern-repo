import React, { useState, useMemo } from 'react';

function UseMemoDemo() {
  const [numbers, setNumbers] = useState([]);
  const [filter, setFilter] = useState('all');
  const [renderCount, setRenderCount] = useState(0);

  // Force re-render to demonstrate useMemo benefits
  const forceRerender = () => {
    setRenderCount(prev => prev + 1);
  };

  // Generate large list of numbers
  const generateNumbers = () => {
    const newNumbers = [];
    for (let i = 1; i <= 10000; i++) {
      newNumbers.push({
        id: i,
        value: i,
        isPrime: isPrime(i),
        isEven: i % 2 === 0
      });
    }
    setNumbers(newNumbers);
  };

  // Expensive prime number calculation
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Expensive calculation WITHOUT useMemo (for comparison)
  const expensiveCalculationWithoutMemo = () => {
    console.log('🔄 Expensive calculation WITHOUT useMemo running...');
    const start = performance.now();
    
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.sqrt(i) * Math.sin(i);
    }
    
    const end = performance.now();
    console.log(`⏱️ Without useMemo: ${(end - start).toFixed(2)}ms`);
    return result;
  };

  // Expensive calculation WITH useMemo
  const expensiveCalculationWithMemo = useMemo(() => {
    console.log('🚀 Expensive calculation WITH useMemo running...');
    const start = performance.now();
    
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.sqrt(i) * Math.sin(i);
    }
    
    const end = performance.now();
    console.log(`⚡ With useMemo: ${(end - start).toFixed(2)}ms`);
    return result;
  }, [renderCount]); // Only recalculates when renderCount changes

  // Filtered numbers with useMemo
  const filteredNumbers = useMemo(() => {
    console.log('🔍 Filtering numbers...');
    if (filter === 'all') return numbers;
    if (filter === 'prime') return numbers.filter(num => num.isPrime);
    if (filter === 'even') return numbers.filter(num => num.isEven);
    if (filter === 'odd') return numbers.filter(num => !num.isEven);
    return numbers;
  }, [numbers, filter]);

  // Sum of filtered numbers with useMemo
  const sumOfFiltered = useMemo(() => {
    console.log('➕ Calculating sum...');
    return filteredNumbers.reduce((sum, num) => sum + num.value, 0);
  }, [filteredNumbers]);

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4">
          🧠 useMemo Hook Demo
        </h2>
        <p className="text-gray-600 text-lg">
          Optimizing expensive calculations and preventing unnecessary re-computation
        </p>
      </div>

      {/* Performance Comparison Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">⚡ Performance Comparison</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <h4 className="text-red-800 font-semibold mb-2">❌ Without useMemo</h4>
            <p className="text-red-600 text-sm mb-2">Runs on every render</p>
            <div className="text-2xl font-bold text-red-700">
              {expensiveCalculationWithoutMemo().toFixed(2)}
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h4 className="text-green-800 font-semibold mb-2">✅ With useMemo</h4>
            <p className="text-green-600 text-sm mb-2">Runs only when dependencies change</p>
            <div className="text-2xl font-bold text-green-700">
              {expensiveCalculationWithMemo.toFixed(2)}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={forceRerender}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            🔄 Force Re-render (Check Console)
          </button>
          <p className="text-gray-600 mt-2 text-sm">
            Render Count: {renderCount}
          </p>
        </div>
      </div>

      {/* Number List Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Large Number List</h3>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={generateNumbers}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
          >
            Generate 10,000 Numbers
          </button>
          
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Numbers</option>
            <option value="prime">Prime Numbers</option>
            <option value="even">Even Numbers</option>
            <option value="odd">Odd Numbers</option>
          </select>
        </div>

        {numbers.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 font-semibold">
                Showing: {filteredNumbers.length} numbers
              </span>
              <span className="text-gray-700 font-semibold">
                Sum: {sumOfFiltered.toLocaleString()}
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Filter: {filter} | Total: {numbers.length}
            </div>
          </div>
        )}

        {/* Number Grid */}
        <div className="max-h-96 overflow-y-auto border border-gray-200 rounded-lg">
          {filteredNumbers.length > 0 ? (
            <div className="grid grid-cols-10 gap-1 p-4">
              {filteredNumbers.slice(0, 100).map((num) => (
                <div
                  key={num.id}
                  className={`p-2 text-center text-sm rounded ${
                    num.isPrime
                      ? 'bg-red-100 text-red-800'
                      : num.isEven
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {num.value}
                </div>
              ))}
              {filteredNumbers.length > 100 && (
                <div className="col-span-10 text-center text-gray-500 py-4">
                  ... and {filteredNumbers.length - 100} more numbers
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <div className="text-4xl mb-2">🔢</div>
              <p>Generate numbers to see the list</p>
            </div>
          )}
        </div>
      </div>

      {/* Console Instructions */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">🔍 Console Logs</h3>
        <p className="text-yellow-700 mb-2">
          Open your browser's developer console to see useMemo performance:
        </p>
        <ul className="text-yellow-700 space-y-1">
          <li>• 🔄 Expensive calculation logs (with/without useMemo)</li>
          <li>• 🔍 Filtering operation logs</li>
          <li>• ➕ Sum calculation logs</li>
          <li>• ⏱️ Performance timing measurements</li>
        </ul>
      </div>
    </div>
  );
}

export default UseMemoDemo;
