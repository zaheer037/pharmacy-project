import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css"

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUser(data);
      navigate('/');
    } catch (err) { 
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back!</h2>
        
        {error && (
          <div className="alert-modern">
            <i className="fa-solid fa-triangle-exclamation me-2"></i>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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
              placeholder="Password"
              disabled={isLoading}
            />
            <i className="fa-solid fa-lock input-icon"></i>
          </div>

          <button 
            type="submit" 
            className={`btn-login-modern ${isLoading ? 'loading-state' : ''}`}
            disabled={isLoading}
          >
            {isLoading && <span className="loading-spinner-inline"></span>}
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>

          <div className="login-footer">
            <p>
              Don't have an account? 
              <Link to="/register" className="register-link ms-2">
                <i className="fa-solid fa-user-plus me-1"></i>
                Create Account
              </Link>
            </p>
            <p className="mt-2">
              <i className="fa-solid fa-shield-halved me-2"></i>
              Secure healthcare professional access
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
