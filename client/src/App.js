import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';
import MovieDetail from './components/MovieDetail';  
import Landing from './pages/Landing';
import NotFound from './pages/NotFound'; // Import the custom NotFound component

import './stylesheets/alignment.css';
import './stylesheets/sizes.css';
import './stylesheets/form-elements.css';
import './stylesheets/custom.css';
import './stylesheets/theme.css';

function App() {
  const { loading } = useSelector((state) => state.loaders);

  return (
    <div>
      {loading && (
        <div className="loader-parent">
          <div className="loader"></div>
        </div>
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies/:movieName" element={<MovieDetail />} />

          {/* Catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
