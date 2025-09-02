import React from 'react';
import { Link } from 'react-router-dom';
import HelloWorld from '../HelloWorld';
import Counter from '../Counter';
import TodoList from '../TodoList';
import UseEffectDemo from '../UseEffectDemo';
import UseMemoDemo from '../UseMemoDemo';
import UseCallbackDemo from '../UseCallbackDemo';

function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-transparent to-purple-50/50"></div>
      
      {/* Gentle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl animate-gentle-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-100/15 rounded-full blur-3xl animate-gentle-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green-100/10 rounded-full blur-3xl animate-gentle-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        
        {/* Navigation Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl font-black text-gradient-blue mb-6">
            React Router Demo
          </h1>
          <p className="text-2xl text-gray-600 mb-12 font-medium">
            Client-side routing with React Router DOM
          </p>
          
          {/* Navigation Links */}
          <div className="flex justify-center space-x-8">
            <Link 
              to="/" 
              className="btn-professional inline-flex items-center space-x-2 text-lg font-semibold"
            >
              <span>🏠</span>
              <span>Home</span>
            </Link>
            <Link 
              to="/profile" 
              className="btn-professional-secondary inline-flex items-center space-x-2 text-lg font-semibold"
            >
              <span>👤</span>
              <span>Profile</span>
            </Link>
          </div>
        </div>

        {/* Page Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-in-left">
            <h2 className="text-4xl font-bold text-gradient-blue mb-6">
              Welcome to the Home Page!
            </h2>
            <p className="text-gray-700 text-xl font-medium">
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

          {/* TodoList Component Demo */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
            <TodoList />
          </div>

          {/* UseEffectDemo Component Demo */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
            <UseEffectDemo />
          </div>

          {/* UseMemoDemo Component Demo */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
            <UseMemoDemo />
          </div>

          {/* UseCallbackDemo Component Demo */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
            <UseCallbackDemo />
          </div>

          {/* Router Information */}
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <div className="card-professional p-8">
              <h3 className="text-3xl font-bold text-gradient-green mb-8 text-center">
                🚀 React Router Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
                  <span className="text-2xl">✅</span>
                  <span className="text-gray-700 font-medium">Client-side routing</span>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-green-50 border border-green-200">
                  <span className="text-2xl">✅</span>
                  <span className="text-gray-700 font-medium">No page refreshes</span>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-purple-50 border border-purple-200">
                  <span className="text-2xl">✅</span>
                  <span className="text-gray-700 font-medium">Browser history support</span>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-indigo-50 border border-indigo-200">
                  <span className="text-2xl">✅</span>
                  <span className="text-gray-700 font-medium">Programmatic navigation</span>
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
