import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Drugs from './components/drugsTab/Drugs';
import Disease from './components/diseaseTab/Disease';
import Pregnancy from './components/pregnancyTab/Pregnancy';
import Login from './components/Login';
import Register from './components/Register';
import ClinicalFilling from './components/ClinicalFiliing';
import ClinicalAccess from './components/ClinicalAccess';
import CommonIllness from './components/commonTab/CommonIllness';
import PoisonAntidote from './components/toxicityTab/PoisonAntidote';
import GeneralManagement from './components/toxicityTab/GeneralManagement';
import MedicolegalAspects from './components/toxicityTab/MedicolegalAspects';
import TypesOfPoisoning from './components/toxicityTab/TypesOfPoisoning';
import './App.css';

const App = () => {
  // Check for user in localStorage to set authentication state
  const [user, setUser] = useState(null);
  //console.log(DrugsInfo);

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
    <div className="app-container">
      <Router>
        <NavBar user={user} setUser={setUser} />

        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/drugs" element={<Drugs />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/pregnancy" element={<Pregnancy />} />
          <Route path="/toxicity/poison-antidote" element={<PoisonAntidote />} />
          <Route path="/toxicity/general-management" element={<GeneralManagement />} />
          <Route path="/toxicity/medicolegal-aspects" element={<MedicolegalAspects />} />
          <Route path="/toxicity/types-of-poisoning" element={<TypesOfPoisoning />} />
          <Route path="/common-illness" element={<CommonIllness />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route 
            path="/register" 
            element={user ? <Navigate to="/" replace /> : <Register setUser={setUser} />} 
          />
          <Route path="/clinical/filling" element={
            <ProtectedRoute>
              <ClinicalFilling />
            </ProtectedRoute>
          } />
          <Route path="/clinical/access" element={
            <ProtectedRoute>
              <ClinicalAccess />
            </ProtectedRoute>
          } />
        </Routes>

      </Router>
    </div>
  );
};

export default App;
