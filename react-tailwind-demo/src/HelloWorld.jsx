import React from 'react';

// Functional component that accepts props
function HelloWorld({ name = "Focus Bear" }) {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-xl border border-gray-700 text-center">
      <h2 className="text-3xl font-bold mb-2 text-cyan-400">
        Hello, {name}!
      </h2>
      <p className="text-lg text-gray-300">
        Welcome to React Components & Props!
      </p>
    </div>
  );
}

export default HelloWorld;
