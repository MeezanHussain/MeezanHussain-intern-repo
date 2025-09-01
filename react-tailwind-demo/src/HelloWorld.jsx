import React from 'react';

// Functional component that accepts props
function HelloWorld({ name = "Focus Bear" }) {
  return (
    <div className="relative group">
      {/* Holographic background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      
      {/* Main card */}
      <div className="relative glass-dark text-white p-8 rounded-2xl shadow-2xl border border-cyan-500/30 text-center hover-lift hover-glow backdrop-blur-md">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{padding: '2px'}}>
          <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4 gradient-text-cyan animate-neon-pulse">
            Hello, {name}!
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Welcome to React Components & Props!
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 rounded-2xl animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
}

export default HelloWorld;
