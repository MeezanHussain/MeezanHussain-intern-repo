import React, { useState } from 'react';
import { testApiRequest, setAuthToken, makeAuthenticatedRequest } from './api/axiosConfig';

const AxiosDemo = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState('');
  const [currentToken, setCurrentToken] = useState(localStorage.getItem('authToken') || '');

  const handleTestRequest = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);
    
    try {
      const result = await testApiRequest();
      setResponse(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSetToken = () => {
    setAuthToken(token);
    setCurrentToken(token);
    alert('Token saved to localStorage!');
  };

  const handleClearToken = () => {
    setAuthToken(null);
    setToken('');
    setCurrentToken('');
    alert('Token removed from localStorage!');
  };

  const handleAuthenticatedRequest = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);
    
    try {
      const result = await makeAuthenticatedRequest('GET', '/posts/1');
      setResponse(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Axios Configuration Demo</h2>
      
      {/* Token Management Section */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Authentication Token Management</h3>
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter authentication token"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSetToken}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Set Token
          </button>
          <button
            onClick={handleClearToken}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Clear Token
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Current token: {currentToken || 'None'}
        </p>
      </div>

      {/* API Request Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button
          onClick={handleTestRequest}
          disabled={loading}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 transition-colors font-medium"
        >
          {loading ? 'Testing...' : 'Test POST Request'}
        </button>
        
        <button
          onClick={handleAuthenticatedRequest}
          disabled={loading}
          className="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 disabled:bg-gray-400 transition-colors font-medium"
        >
          {loading ? 'Loading...' : 'Test Authenticated GET'}
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"></div>
            <span className="text-blue-700">Making API request...</span>
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
          <h4 className="text-red-800 font-semibold">Error:</h4>
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* Response Display */}
      {response && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
          <h4 className="text-green-800 font-semibold mb-2">Response:</h4>
          <pre className="text-sm text-green-700 overflow-x-auto bg-white p-3 rounded border">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}

      {/* Features Documentation */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Axios Features Demonstrated:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Base URL Configuration:</strong> All requests use the configured base URL</li>
          <li><strong>Default Headers:</strong> Includes Content-Type and accept headers</li>
          <li><strong>Dynamic Request ID:</strong> Each request gets a unique ID for tracking</li>
          <li><strong>Authentication Interceptor:</strong> Automatically adds Bearer token from localStorage</li>
          <li><strong>Request Timeout:</strong> 10-second timeout to prevent hanging requests</li>
          <li><strong>Request Cancellation:</strong> Uses AbortController for cancelling requests</li>
          <li><strong>Error Handling:</strong> Comprehensive error handling with different scenarios</li>
          <li><strong>Response Logging:</strong> Console logs for debugging and monitoring</li>
        </ul>
      </div>
    </div>
  );
};

export default AxiosDemo;
