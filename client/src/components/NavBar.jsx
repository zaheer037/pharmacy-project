import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        <Link to="/drugs" className="nav-link"><i class="fa-solid fa-pills"></i> Drugs Info</Link>
      </li>
      <li className="nav-item">
        <Link to="/disease" className="nav-link"><i class="fa-solid fa-stethoscope"></i> Disease & Treatment</Link>
      </li>
      <li className="nav-item">
        <Link to="/pregnancy" className="nav-link"><i class="fa-solid fa-person-pregnant"></i> Pregnancy & Breastfeeding</Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link"><i class="fa-solid fa-arrow-right-to-bracket"></i> Login</Link>
      </li>
    </>
  );

  // Private navigation bar (when logged in)
  const privateNav = (
    <>
      <li className="nav-item">
        <Link to="/drugs" className="nav-link"><i class="fa-solid fa-pills"></i> Drugs Info</Link>
      </li>
      <li className="nav-item">
        <Link to="/common-illness" className="nav-link"><i class="fa-solid fa-temperature-high"></i> Common Illness</Link>
      </li>
      <li className="nav-item">
        <Link to="/disease" className="nav-link"><i class="fa-solid fa-stethoscope"></i> Disease & Treatment</Link>
      </li>
      <li className="nav-item">
        <Link to="/pregnancy" className="nav-link"><i class="fa-solid fa-person-pregnant"></i> Pregnancy & Breastfeeding</Link>
      </li>
      <li className="nav-item">
        <Link to="/clinical/filling" className="nav-link"><i class="fa-solid fa-user-doctor"></i> Clinical Data Filling</Link>
      </li>
      <li className="nav-item">
        <Link to="/clinical/access" className="nav-link"><i class="fa-solid fa-calendar-plus"></i> Clinical Data Access</Link>
      </li>
      <li className="nav-item">
        <button onClick={handleLogout} className="btn btn-outline-danger ms-3"><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Disease Prediction</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
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
