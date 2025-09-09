import axios from 'axios';

// Generate a unique request ID for tracking
const generateRequestId = () => {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Create an Axios instance with base configuration
const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Example API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    'accept': '*/*',
  },
});

// Request interceptor to add authentication token and request ID
apiClient.interceptors.request.use(
  (config) => {
    try {
      // Add dynamic request ID to headers
      config.headers['X-Request-ID'] = generateRequestId();
      
      // Retrieve authentication token from localStorage
      const token = localStorage.getItem('authToken');
      
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      
      console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
      console.log('Request headers:', config.headers);
      
      return config;
    } catch (error) {
      console.error('Error in request interceptor:', error);
      return Promise.reject(error);
    }
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for handling responses and errors
apiClient.interceptors.response.use(
  (response) => {
    console.log(`Response received from: ${response.config.url}`);
    console.log('Response status:', response.status);
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout - the request took too long to complete');
    } else if (error.response?.status === 401) {
      console.error('Unauthorized - removing invalid token');
      localStorage.removeItem('authToken');
      // Could redirect to login page here
      window.location.href = '/login';
    } else if (error.response?.status >= 500) {
      console.error('Server error - please try again later');
    }
    
    return Promise.reject(error);
  }
);

// Function to create AbortController for request cancellation
export const createCancelToken = () => {
  const controller = new AbortController();
  return {
    signal: controller.signal,
    cancel: () => controller.abort(),
  };
};

// Test API request function
export const testApiRequest = async () => {
  try {
    // Create cancel token for this request
    const { signal, cancel } = createCancelToken();
    
    // Set up automatic cancellation after 8 seconds (before timeout)
    const cancelTimeout = setTimeout(() => {
      cancel();
      console.log('Request cancelled due to taking too long');
    }, 8000);
    
    const response = await apiClient.post('/posts', {
      title: 'Test Post from Axios Setup',
      body: 'This is a test post to demonstrate Axios functionality',
      userId: 1,
    }, {
      signal, // Pass the abort signal
    });
    
    // Clear the cancel timeout since request completed
    clearTimeout(cancelTimeout);
    
    console.log('Test API request successful:', response.data);
    
    // Example of conditional redirect based on response
    if (response.data.id) {
      console.log('Post created successfully! Redirecting...');
      // In a real app, you might redirect to the post page
      // window.location.href = `/posts/${response.data.id}`;
    }
    
    return response.data;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request was cancelled');
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timeout occurred');
    } else {
      console.error('Error making test request:', error.message);
    }
    throw error;
  }
};

// Utility function to set authentication token
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    localStorage.removeItem('authToken');
  }
};

// Utility function to make authenticated requests
export const makeAuthenticatedRequest = async (method, url, data = null) => {
  try {
    const { signal } = createCancelToken();
    
    const config = {
      method,
      url,
      signal,
    };
    
    if (data) {
      config.data = data;
    }
    
    const response = await apiClient(config);
    return response.data;
  } catch (error) {
    console.error(`Error making ${method} request to ${url}:`, error);
    throw error;
  }
};

export default apiClient;
