import React from 'react';
import { Link } from 'react-router-dom';
import HelloWorld from '../HelloWorld';
import Counter from '../Counter';

function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-pink-500/10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        
        {/* Navigation Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl font-black gradient-text mb-6 animate-neon-pulse">
            React Router Demo
          </h1>
          <p className="text-2xl text-gray-300 mb-12 font-medium">
            Client-side routing with React Router DOM
          </p>
          
          {/* Navigation Links */}
          <div className="flex justify-center space-x-8">
            <Link 
              to="/" 
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-2 hover:scale-105 border border-cyan-400/50 backdrop-blur-sm"
            >
              <span className="relative z-10">🏠 Home</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </Link>
            <Link 
              to="/profile" 
              className="group relative bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 hover:scale-105 border border-purple-400/50 backdrop-blur-sm"
            >
              <span className="relative z-10">👤 Profile</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </Link>
          </div>
        </div>

        {/* Page Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-in-left">
            <h2 className="text-4xl font-bold gradient-text-cyan mb-6 animate-fade-in-up">
              Welcome to the Home Page!
            </h2>
            <p className="text-gray-300 text-xl font-medium">
              This page demonstrates our React components with client-side routing.
            </p>
          </div>

          {/* HelloWorld Component Demo */}
          <div className="max-w-5xl mx-auto mb-16 animate-slide-in-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-bounce-in">
                <HelloWorld name="Focus Bear" />
              </div>
              <div className="animate-bounce-in" style={{animationDelay: '0.2s'}}>
                <HelloWorld name="React Developer" />
              </div>
            </div>
          </div>

          {/* Counter Component Demo */}
          <div className="max-w-4xl mx-auto mb-16 animate-scale-in">
            <Counter />
          </div>

          {/* Router Information */}
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <div className="relative group">
              {/* Holographic background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main card */}
              <div className="relative glass-dark rounded-3xl p-8 border border-emerald-500/30 backdrop-blur-lg hover-lift">
                <h3 className="text-3xl font-bold gradient-text mb-8 text-center">
                  🚀 React Router Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20">
                    <span className="text-2xl">✅</span>
                    <span className="text-gray-300 font-medium">Client-side routing</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                    <span className="text-2xl">✅</span>
                    <span className="text-gray-300 font-medium">No page refreshes</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <span className="text-2xl">✅</span>
                    <span className="text-gray-300 font-medium">Browser history support</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                    <span className="text-2xl">✅</span>
                    <span className="text-gray-300 font-medium">Programmatic navigation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
