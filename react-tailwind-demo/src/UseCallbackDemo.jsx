import React, { useState, useCallback, memo } from 'react';

// Child component that receives a function as prop
const ChildComponent = memo(({ onButtonClick, label, renderCount }) => {
  console.log(`🔄 ${label} ChildComponent rendered (render #${renderCount})`);
  
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200">
      <h4 className="font-semibold text-gray-800 mb-2">{label}</h4>
      <p className="text-sm text-gray-600 mb-3">
        Render Count: {renderCount}
      </p>
      <button
        onClick={onButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Click Me
      </button>
    </div>
  );
});

// Child component that receives a memoized function
const MemoizedChildComponent = memo(({ onButtonClick, label, renderCount }) => {
  console.log(`✅ ${label} MemoizedChildComponent rendered (render #${renderCount})`);
  
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200">
      <h4 className="font-semibold text-gray-800 mb-2">{label}</h4>
      <p className="text-sm text-gray-600 mb-3">
        Render Count: {renderCount}
      </p>
      <button
        onClick={onButtonClick}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      >
        Click Me
      </button>
    </div>
  );
});

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  // Force re-render to demonstrate useCallback benefits
  const forceRerender = () => {
    setRenderCount(prev => prev + 1);
  };

  // Function WITHOUT useCallback - creates new function on every render
  const handleClickWithoutCallback = () => {
    console.log('❌ Function without useCallback called');
    setCount(prev => prev + 1);
  };

  // Function WITH useCallback - memoized function reference
  const handleClickWithCallback = useCallback(() => {
    console.log('✅ Function with useCallback called');
    setCount(prev => prev + 1);
  }, []); // Empty dependency array - function never changes

  // Function with dependencies in useCallback
  const handleClickWithDependencies = useCallback(() => {
    console.log('🔄 Function with dependencies called');
    setCount(prev => prev + otherState + 1);
  }, [otherState]); // Function changes when otherState changes

  // Function that changes on every render (bad example)
  const handleClickBadCallback = useCallback(() => {
    console.log('❌ Bad useCallback - function changes every render');
    setCount(prev => prev + 1);
  }, [Math.random()]); // Bad: dependency changes every render

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
          🎯 useCallback Hook Demo
        </h2>
        <p className="text-gray-600 text-lg">
          Preventing unnecessary re-renders with memoized function references
        </p>
      </div>

      {/* State Display */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Current State</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-blue-700">{count}</div>
            <div className="text-blue-600 text-sm">Count</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-purple-700">{otherState}</div>
            <div className="text-purple-600 text-sm">Other State</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-gray-700">{renderCount}</div>
            <div className="text-gray-600 text-sm">Render Count</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={forceRerender}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            🔄 Force Re-render
          </button>
          <button
            onClick={() => setOtherState(prev => prev + 1)}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Update Other State
          </button>
        </div>
      </div>

      {/* Child Components Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Without useCallback */}
        <div>
          <h3 className="text-xl font-bold text-red-800 mb-4">❌ Without useCallback</h3>
          <ChildComponent
            onButtonClick={handleClickWithoutCallback}
            label="Regular Function"
            renderCount={renderCount}
          />
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">
              <strong>Problem:</strong> New function created on every render, causing child to re-render
            </p>
          </div>
        </div>

        {/* With useCallback */}
        <div>
          <h3 className="text-xl font-bold text-green-800 mb-4">✅ With useCallback</h3>
          <MemoizedChildComponent
            onButtonClick={handleClickWithCallback}
            label="Memoized Function"
            renderCount={renderCount}
          />
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 text-sm">
              <strong>Solution:</strong> Stable function reference, child only re-renders when props change
            </p>
          </div>
        </div>
      </div>

      {/* useCallback with Dependencies */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🔄 useCallback with Dependencies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-3">Good useCallback</h4>
            <MemoizedChildComponent
              onButtonClick={handleClickWithDependencies}
              label="With Dependencies"
              renderCount={renderCount}
            />
            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-700 text-sm">
                Function updates when <code>otherState</code> changes
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-3">Bad useCallback</h4>
            <MemoizedChildComponent
              onButtonClick={handleClickBadCallback}
              label="Bad Dependencies"
              renderCount={renderCount}
            />
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">
                Function changes every render due to <code>Math.random()</code>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Console Instructions */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-yellow-800 mb-3">🔍 Console Logs & DevTools</h3>
        <p className="text-yellow-700 mb-2">
          Open your browser's developer console and React DevTools to see:
        </p>
        <ul className="text-yellow-700 space-y-1">
          <li>• 🔄 Child component render logs</li>
          <li>• ✅ Function call logs</li>
          <li>• 📊 React DevTools Profiler to measure re-renders</li>
          <li>• 🎯 Component tree highlighting in DevTools</li>
        </ul>
        <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
          <p className="text-yellow-800 text-sm">
            <strong>Tip:</strong> Use React DevTools Profiler to record and analyze component re-renders. 
            Click "Force Re-render" and compare which child components re-render.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseCallbackDemo;
