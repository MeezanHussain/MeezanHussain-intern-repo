import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: 'Focus Bear',
    email: 'focus.bear@example.com',
    bio: 'A passionate developer learning React Router!',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'React Router']
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you'd save to a backend here
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-purple-500/10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        
        {/* Navigation Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl font-black gradient-text-pink mb-6 animate-neon-pulse">
            User Profile
          </h1>
          <p className="text-2xl text-gray-300 mb-12 font-medium">
            Profile page with programmatic navigation
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

        {/* Profile Content */}
        <div className="max-w-5xl mx-auto animate-scale-in">
          <div className="relative group">
            {/* Holographic background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-cyan-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 animate-gradient-shift"></div>
            
            {/* Main container */}
            <div className="relative glass-dark rounded-3xl shadow-2xl p-10 border border-purple-500/40 backdrop-blur-lg overflow-hidden">
              {/* Animated background patterns */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-gradient-shift"></div>
              
              <div className="relative z-10">
              
              {/* Profile Header */}
              <div className="text-center mb-12 animate-fade-in-up">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                    <span className="text-5xl font-black text-white animate-float">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  {/* Floating particles around avatar */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
                <h2 className="text-4xl font-black gradient-text-pink mb-4 animate-neon-pulse">
                  {user.name}
                </h2>
                <p className="text-gray-300 text-xl font-medium">
                  {user.email}
                </p>
              </div>

              {/* Profile Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">
                    📝 Bio
                  </h3>
                  {isEditing ? (
                    <textarea
                      value={user.bio}
                      onChange={(e) => setUser({...user, bio: e.target.value})}
                      className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                      rows="3"
                    />
                  ) : (
                    <p className="text-gray-300">
                      {user.bio}
                    </p>
                  )}
                </div>

                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">
                    🛠️ Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                <Button 
                  onClick={handleEdit}
                  variant={isEditing ? "secondary" : "primary"}
                  size="large"
                >
                  {isEditing ? "Cancel" : "Edit Profile"}
                </Button>
                
                {isEditing && (
                  <Button 
                    onClick={handleSave}
                    variant="success"
                    size="large"
                  >
                    Save Changes
                  </Button>
                )}
                
                <Button 
                  onClick={handleGoHome}
                  variant="outline"
                  size="large"
                >
                  Go to Home
                </Button>
              </div>

              {/* Navigation Demo Info */}
              <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-2">
                  🧭 Navigation Methods Demonstrated:
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>Link Component:</strong> Declarative navigation (Home/Profile buttons)</p>
                  <p><strong>useNavigate Hook:</strong> Programmatic navigation (Go to Home button)</p>
                  <p><strong>URL Changes:</strong> Notice the URL updates without page refresh</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
