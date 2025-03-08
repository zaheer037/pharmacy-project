import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
    occupation: 'employed'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { name, emailOrPhone, password, occupation } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth', formData);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUser(data);
      navigate('/');
    } catch (err) { 
      setError(err.response?.data?.message || 'Authentication failed');
    }
  };

  return (
    <div className="login-container container-fluid">
      <div className="login-box">
        <h2 className="text-center fw-bold">WELCOME!</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input 
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
              className="form-control rounded-pill p-2"
              placeholder="Your username"
            />
          </div>
          <div className="mb-3">
            <input 
              type="text"
              name="emailOrPhone"
              value={emailOrPhone}
              onChange={handleChange}
              required
              className="form-control rounded-pill p-2"
              placeholder="Email or Phone"
            />
          </div>
          <div className="mb-3">
            <input 
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              className="form-control rounded-pill p-2"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <select name="occupation" value={occupation} onChange={handleChange} className="form-select rounded-pill p-2">
              <option value="employed">Employed</option>
              <option value="student">Student</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-pill">Login</button>
          <div className="d-flex justify-content-between mt-3">
            <div>
              <input type="checkbox" id="remember" className="me-1" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <a href="#" className="text-decoration-none text-primary">Forgot your password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
