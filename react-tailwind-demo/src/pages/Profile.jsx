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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/50 via-transparent to-pink-50/50"></div>
      
      {/* Gentle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl animate-gentle-float"></div>
        <div className="absolute top-3/4 left-1/4 w-96 h-96 bg-pink-100/15 rounded-full blur-3xl animate-gentle-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-100/10 rounded-full blur-3xl animate-gentle-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        
        {/* Navigation Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl font-black text-gradient-purple mb-6">
            User Profile
          </h1>
          <p className="text-2xl text-gray-600 mb-12 font-medium">
            Profile page with programmatic navigation
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

        {/* Profile Content */}
        <div className="max-w-5xl mx-auto animate-scale-in">
          <div className="card-professional p-10">
              
              {/* Profile Header */}
              <div className="text-center mb-12 animate-fade-in-up">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-black text-white">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  {/* Professional indicator */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <h2 className="text-4xl font-black text-gradient-purple mb-4">
                  {user.name}
                </h2>
                <p className="text-gray-600 text-xl font-medium">
                  {user.email}
                </p>
              </div>

              {/* Profile Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-700 mb-4">
                    📝 Bio
                  </h3>
                  {isEditing ? (
                    <textarea
                      value={user.bio}
                      onChange={(e) => setUser({...user, bio: e.target.value})}
                      className="w-full bg-white text-gray-700 p-3 rounded-lg border border-purple-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                      rows="3"
                    />
                  ) : (
                    <p className="text-gray-700">
                      {user.bio}
                    </p>
                  )}
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">
                    🛠️ Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm"
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
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <h4 className="text-lg font-bold text-green-700 mb-4">
                  🧭 Navigation Methods Demonstrated:
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Link Component:</strong> Declarative navigation (Home/Profile buttons)</p>
                  <p><strong>useNavigate Hook:</strong> Programmatic navigation (Go to Home button)</p>
                  <p><strong>URL Changes:</strong> Notice the URL updates without page refresh</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
