import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Drugs from './components/Drugs';
import Disease from './components/Disease';
import Pregnancy from './components/Pregnancy';
import Login from './components/Login';
import ClinicalFilling from './components/ClinicalFiliing';
import ClinicalAccess from './components/ClinicalAccess';

const App = () => {
  // Check for user in localStorage to set authentication state
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  // A simple ProtectedRoute component
  const ProtectedRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <div className='container-fluid' style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drugs" element={<Drugs />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/pregnancy" element={<Pregnancy />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/clinical/filling" element={
            <ProtectedRoute>
              <ClinicalFilling />
            </ProtectedRoute>
          }/>
          <Route path="/clinical/access" element={
            <ProtectedRoute>
              <ClinicalAccess />
            </ProtectedRoute>
          }/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
