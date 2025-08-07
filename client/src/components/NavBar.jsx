import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './navBar.css';
import logo from '../assets/logo.jpg';

const NavBar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    navigate('/');
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Helper function to check if a path is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Helper function to get nav link classes with active state
  const getNavLinkClasses = (path) => {
    const baseClasses = "nav-link nav-link-modern btn-link";
    return isActive(path) ? `${baseClasses} active` : baseClasses;
  };

  const toggleDropdown = (e) => {
    // Handle click for both mobile and desktop as fallback
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  // Public navigation bar (when not logged in)
  const publicNav = (
    <>
      <li className="nav-item">
        <button onClick={() => handleNavigation('/drugs')} className={getNavLinkClasses('/drugs')}>
          <i className="fa-solid fa-pills"></i> Drugs Info
        </button>
      </li>
      <li className="nav-item">
        <button onClick={() => handleNavigation('/disease')} className={getNavLinkClasses('/disease')}>
          <i className="fa-solid fa-stethoscope"></i> Disease & Treatment
        </button>
      </li>
      <li className="nav-item">
        <button onClick={() => handleNavigation('/pregnancy')} className={getNavLinkClasses('/pregnancy')}>
          <i className="fa-solid fa-person-pregnant"></i> Pregnancy Care
        </button>
      </li>
      <li className="nav-item">
        <button onClick={() => handleNavigation('/common-illness')} className={getNavLinkClasses('/common-illness')}>
          <i className="fa-solid fa-temperature-high"></i> Common Illness
        </button>
      </li>
      <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''} ${isActive('/toxicity') ? 'active' : ''}`}>
        <Link 
          to="#" 
          className={`nav-link nav-link-modern dropdown-toggle ${isActive('/toxicity') ? 'active' : ''}`}
          id="toxicityDropdown"
          onClick={toggleDropdown}
        >
          <i className="fa-solid fa-skull-crossbones"></i> Toxicity
        </Link>
        <ul className="dropdown-menu dropdown-menu-modern" aria-labelledby="toxicityDropdown">
          <li onClick={() => {setDropdownOpen(false); handleNavigation('/toxicity/poison-antidote');}}>
            <button className="dropdown-item dropdown-item-modern btn-link">
              <i className="fa-solid fa-flask-vial me-2"></i>Poison-Antidote
            </button>
          </li>
          <li onClick={() => {setDropdownOpen(false); handleNavigation('/toxicity/general-management');}}>
            <button className="dropdown-item dropdown-item-modern btn-link">
              <i className="fa-solid fa-user-doctor me-2"></i>General Management
            </button>
          </li>
          <li onClick={() => {setDropdownOpen(false); handleNavigation('/toxicity/medicolegal-aspects');}}>
            <button className="dropdown-item dropdown-item-modern btn-link">
              <i className="fa-solid fa-scale-balanced me-2"></i>Medicolegal Aspects
            </button>
          </li>
          <li onClick={() => {setDropdownOpen(false); handleNavigation('/toxicity/types-of-poisoning');}}>
            <button className="dropdown-item dropdown-item-modern btn-link">
              <i className="fa-solid fa-biohazard me-2"></i>Types of Poisoning
            </button>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <button onClick={() => handleNavigation('/login')} className={getNavLinkClasses('/login')}>
          <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
        </button>
      </li>
    </>
  );

  // Private navigation bar (when logged in)
  const privateNav = (
    <>
      {/* Core Info Links */}
      <li className="nav-item">
        <button onClick={() => handleNavigation('/drugs')} className={getNavLinkClasses('/drugs')}>
          <i className="fa-solid fa-pills"></i> Drugs
        </button>
      </li>
      <li className="nav-item">
        <button onClick={() => handleNavigation('/disease')} className={getNavLinkClasses('/disease')}>
          <i className="fa-solid fa-stethoscope"></i> Disease
        </button>
      </li>
      <li className="nav-item">
        <button onClick={() => handleNavigation('/pregnancy')} className={getNavLinkClasses('/pregnancy')}>
          <i className="fa-solid fa-person-pregnant"></i> Pregnancy
        </button>
      </li>
      
      {/* Clinical Tools - Dropdown or separate section */}
      <li className="nav-item">
        <button onClick={() => handleNavigation('/common-illness')} className={getNavLinkClasses('/common-illness')}>
          <i className="fa-solid fa-temperature-high"></i> Common Illness
        </button>
      </li>
      <li className="nav-item">
        <button onClick={() => handleNavigation('/clinical/filling')} className={getNavLinkClasses('/clinical/filling')}>
          <i className="fa-solid fa-user-doctor"></i> Data Entry
        </button>
      </li>
      <li className="nav-item">
        <button onClick={() => handleNavigation('/clinical/access')} className={getNavLinkClasses('/clinical/access')}>
          <i className="fa-solid fa-calendar-plus"></i> Data Access
        </button>
      </li>
      
      {/* Toxicity Dropdown */}
      <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''} ${isActive('/toxicity') ? 'active' : ''}`}>
        <Link 
          to="#" 
          className={`nav-link nav-link-modern dropdown-toggle ${isActive('/toxicity') ? 'active' : ''}`}
          id="toxicityDropdownPrivate"
          onClick={toggleDropdown}
        >
          <i className="fa-solid fa-skull-crossbones"></i> Toxicity
        </Link>
        <ul className="dropdown-menu dropdown-menu-modern" aria-labelledby="toxicityDropdownPrivate">
          <li onClick={() => {setDropdownOpen(false); handleNavigation('/toxicity/poison-antidote');}}>
            <button className="dropdown-item dropdown-item-modern btn-link">
              <i className="fa-solid fa-flask-vial me-2"></i>Poison-Antidote
            </button>
          </li>
          <li onClick={() => {setDropdownOpen(false); handleNavigation('/toxicity/general-management');}}>
            <button className="dropdown-item dropdown-item-modern btn-link">
              <i className="fa-solid fa-user-doctor me-2"></i>General Management
            </button>
          </li>
          <li onClick={() => {setDropdownOpen(false); handleNavigation('/toxicity/medicolegal-aspects');}}>
            <button className="dropdown-item dropdown-item-modern btn-link">
              <i className="fa-solid fa-scale-balanced me-2"></i>Medicolegal Aspects
            </button>
          </li>
          <li onClick={() => {setDropdownOpen(false); handleNavigation('/toxicity/types-of-poisoning');}}>
            <button className="dropdown-item dropdown-item-modern btn-link">
              <i className="fa-solid fa-biohazard me-2"></i>Types of Poisoning
            </button>
          </li>
        </ul>
      </li>
      
      {/* User Actions */}
      <li className="nav-item">
        <button onClick={handleLogout} className="btn btn-danger btn-sm rounded-pill">
          <i className="fa-solid fa-right-from-bracket"></i> Logout
        </button>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg modern-navbar">
      <div className="container-fluid px-3">
        <div onClick={() => handleNavigation('/')} className="navbar-brand navbar-brand-modern" style={{cursor: 'pointer'}}>
          <img src={logo} alt="Clin PharmNet" className="navbar-logo me-2" />
          <span>Clin PharmNet</span>
        </div>
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
