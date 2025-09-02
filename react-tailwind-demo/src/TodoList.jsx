import React, { useState } from 'react';

function TodoList() {
  // State for managing the input value and the list of todos
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to add a new todo to the list
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      // Create a new todo object with unique id and text
      const newTodo = {
        id: Date.now(), // Simple unique ID using timestamp
        text: inputValue.trim(),
        completed: false
      };
      
      // Add the new todo to the existing todos array
      setTodos([...todos, newTodo]);
      
      // Clear the input field
      setInputValue('');
    }
  };

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Function to toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          📝 Todo List
        </h2>
        <p className="text-gray-600 text-lg">
          Add items to your list and manage them dynamically
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter a new todo item..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
          />
          <button
            onClick={addTodo}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Add Todo
          </button>
        </div>
        
        {/* Stats */}
        <div className="flex justify-between text-sm text-gray-500">
          <span>Total: {todos.length}</span>
          <span>Completed: {todos.filter(todo => todo.completed).length}</span>
          <span>Remaining: {todos.filter(todo => !todo.completed).length}</span>
        </div>
      </div>

      {/* Todo List */}
      <div className="space-y-3">
        {todos.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
            <div className="text-6xl mb-4">📋</div>
            <p className="text-gray-500 text-lg">No todos yet. Add one above!</p>
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className={`bg-white rounded-xl p-4 shadow-lg border border-gray-100 transition-all duration-200 hover:shadow-xl ${
                todo.completed ? 'opacity-75 bg-gray-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      todo.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {todo.completed && <span className="text-sm">✓</span>}
                  </button>
                  <span
                    className={`text-lg transition-all duration-200 ${
                      todo.completed
                        ? 'line-through text-gray-500'
                        : 'text-gray-800'
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="ml-4 px-3 py-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Action Buttons */}
      {todos.length > 0 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={clearCompleted}
            className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Clear Completed
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
