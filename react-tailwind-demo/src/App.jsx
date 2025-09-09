import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AxiosDemo from './AxiosDemo';
import I18nDemo from './I18nDemo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/axios-demo" element={<AxiosDemo />} />
          <Route path="/i18n-demo" element={<I18nDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
