import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navBar.css';

const NavBar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    navigate('/');
  };

  // Public navigation bar (when not logged in)
  const publicNav = (
    <>
      <li className="nav-item">
        <Link to="/drugs" className="nav-link nav-link-modern">
          <i className="fa-solid fa-pills"></i> Drugs Info
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/disease" className="nav-link nav-link-modern">
          <i className="fa-solid fa-stethoscope"></i> Disease & Treatment
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/pregnancy" className="nav-link nav-link-modern">
          <i className="fa-solid fa-person-pregnant"></i> Pregnancy Care
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link nav-link-modern">
          <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
        </Link>
      </li>
    </>
  );

  // Private navigation bar (when logged in)
  const privateNav = (
    <>
      {/* Core Info Links */}
      <li className="nav-item">
        <Link to="/drugs" className="nav-link nav-link-modern">
          <i className="fa-solid fa-pills"></i> Drugs
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/disease" className="nav-link nav-link-modern">
          <i className="fa-solid fa-stethoscope"></i> Disease
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/pregnancy" className="nav-link nav-link-modern">
          <i className="fa-solid fa-person-pregnant"></i> Pregnancy
        </Link>
      </li>
      
      {/* Clinical Tools - Dropdown or separate section */}
      <li className="nav-item">
        <Link to="/common-illness" className="nav-link nav-link-modern">
          <i className="fa-solid fa-temperature-high"></i> Common Illness
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/clinical/filling" className="nav-link nav-link-modern">
          <i className="fa-solid fa-user-doctor"></i> Data Entry
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/clinical/access" className="nav-link nav-link-modern">
          <i className="fa-solid fa-calendar-plus"></i> Data Access
        </Link>
      </li>
      
      {/* User Actions */}
      <li className="nav-item">
        <button onClick={handleLogout} className="btn logout-btn-modern ms-2">
          <i className="fa-solid fa-right-from-bracket"></i> Logout
        </button>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg modern-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand navbar-brand-modern">
          <i className="fa-solid fa-heartbeat me-2"></i>
          PharmaCare Pro
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {user ? privateNav : publicNav}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
