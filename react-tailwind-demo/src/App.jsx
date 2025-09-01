import HelloWorld from './HelloWorld'
import Counter from './Counter'
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 py-8">

        {/* HelloWorld Component Demo */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <HelloWorld name="Focus Bear" />
            <HelloWorld name="React Developer" />
          </div>
        </div>

        {/* Counter Component Demo */}
        <div className="max-w-2xl mx-auto mb-8">
          <Counter />
        </div>

      </div>
    </div>
  )
}

export default App
