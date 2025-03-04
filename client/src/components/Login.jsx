import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
      // Call the combined authentication endpoint
      const { data } = await axios.post('http://localhost:5000/api/auth', formData);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUser(data);
      navigate('/');
    } catch (err) { 
      setError(err.response?.data?.message || 'Authentication failed');
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Login / Registration</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input 
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email or Phone:</label>
          <input 
            type="text"
            name="emailOrPhone"
            value={emailOrPhone}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input 
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Occupation:</label>
          <select name="occupation" value={occupation} onChange={handleChange} className="form-select">
            <option value="employed">Employed</option>
            <option value="student">Student</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;
