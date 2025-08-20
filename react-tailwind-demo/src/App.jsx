import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            React + Tailwind CSS Demo
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to the new React application with Tailwind CSS!
          </p>
        </header>
        
        <main className="max-w-4xl mx-auto">
          <div className="mt-12 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>
        </main>

        <footer className="text-center mt-16 text-gray-500">
          <p>Built with React and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  )
}

export default App
