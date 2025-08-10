import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css"

const Register = ({ setUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    occupation: 'employed'
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { name, email, password, confirmPassword, occupation } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // Validate password strength
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }
    
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        occupation
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUser(data);
      navigate('/');
    } catch (err) { 
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Create Account</h2>
        <p className="login-subtitle">Join our healthcare community</p>
        
        {error && (
          <div className="alert-modern">
            <i className="fa-solid fa-triangle-exclamation me-2"></i>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group-modern">
            <input 
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
              className="form-control-modern form-control-with-icon"
              placeholder="Full name"
              disabled={isLoading}
            />
            <i className="fa-solid fa-user input-icon"></i>
          </div>

          <div className="form-group-modern">
            <input 
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="form-control-modern form-control-with-icon"
              placeholder="Email address"
              disabled={isLoading}
            />
            <i className="fa-solid fa-envelope input-icon"></i>
          </div>

          <div className="form-group-modern">
            <input 
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              className="form-control-modern form-control-with-icon"
              placeholder="Password (min 6 characters)"
              disabled={isLoading}
            />
            <i className="fa-solid fa-lock input-icon"></i>
          </div>

          <div className="form-group-modern">
            <input 
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              required
              className="form-control-modern form-control-with-icon"
              placeholder="Confirm password"
              disabled={isLoading}
            />
            <i className="fa-solid fa-lock-open input-icon"></i>
          </div>

          <div className="form-group-modern">
            <select 
              name="occupation" 
              value={occupation} 
              onChange={handleChange} 
              className="select-modern"
              disabled={isLoading}
            >
              <option value="employed">Employed</option>
              <option value="student">Student</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button 
            type="submit" 
            className={`btn-login-modern ${isLoading ? 'loading-state' : ''}`}
            disabled={isLoading}
          >
            {isLoading && <span className="loading-spinner-inline"></span>}
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>

          <div className="login-footer">
            <p>
              Already have an account? 
              <Link to="/login" className="register-link ms-2">
                <i className="fa-solid fa-sign-in-alt me-1"></i>
                Sign In
              </Link>
            </p>
            <p className="mt-2">
              <i className="fa-solid fa-shield-halved me-2"></i>
              Secure healthcare professional registration
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
