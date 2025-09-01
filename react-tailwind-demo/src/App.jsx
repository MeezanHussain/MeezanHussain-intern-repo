import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-8 mb-8">
            <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
              <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
              <img src={reactLogo} className="h-16 w-16 animate-spin" alt="React logo" />
            </a>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Vite + React + Tailwind CSS
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Modern development stack with beautiful styling
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Interactive Counter Demo
              </h2>
              
              <div className="mb-8">
                <div className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  {count}
                </div>
                <button 
                  onClick={() => setCount((count) => count + 1)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Increment Counter
                </button>
              </div>

              <div className="space-y-4 text-left">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <p className="text-green-800 dark:text-green-200">
                    <strong>✅ React:</strong> Component state management working perfectly
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                  <p className="text-blue-800 dark:text-blue-200">
                    <strong>✅ Tailwind CSS:</strong> Responsive design and dark mode support
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                  <p className="text-purple-800 dark:text-purple-200">
                    <strong>✅ Vite:</strong> Fast development server with HMR
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Edit <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-sm">src/App.jsx</code> and save to test Hot Module Replacement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
