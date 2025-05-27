import React, { useState } from 'react';
import '../styles/Login.css';
import EmployeeProfile from './EmployeeProfile';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showProfile, setShowProfile] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
    console.log('Forgot password clicked');
  };

  const handleSignUp = () => {
    // Handle sign up navigation
    console.log('Sign up clicked');
  };

  if (showProfile) {
    return <EmployeeProfile />;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Please enter your details to sign in</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button 
              type="button" 
              className="forgot-password"
              onClick={handleForgotPassword}
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>

          <div className="signup-link">
            Don't have an account?{' '}
            <button 
              type="button" 
              className="signup-button"
              onClick={handleSignUp}
            >
              Sign up
            </button>
          </div>
        </form>
        <button className="employee-button" onClick={() => setShowProfile(true)}>
          Employee
        </button>
      </div>
    </div>
  );
};

export default Login; 