import React from 'react';

// Functional component that accepts props
function HelloWorld({ name = "Focus Bear" }) {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-2">
        Hello, {name}!
      </h2>
      <p className="text-lg opacity-90">
        Welcome to React Components & Props!
      </p>
    </div>
  );
}

export default HelloWorld;
