import React from 'react';

// Functional component that accepts props
function HelloWorld({ name = "Focus Bear" }) {
  return (
    <div className="card-professional p-8 text-center group">
      <h2 className="text-4xl font-bold mb-4 text-gradient-blue">
        Hello, {name}!
      </h2>
      <p className="text-xl text-gray-600 mb-6">
        Welcome to React Components & Props!
      </p>
      
      {/* Decorative elements */}
      <div className="flex justify-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Professional badge */}
      <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
        <span className="text-sm font-semibold text-blue-700">React Component</span>
      </div>
    </div>
  );
}

export default HelloWorld;
