// src/components/SignIn.jsx
import React from 'react';
import './SignIn.css';
import { FcGoogle } from 'react-icons/fc'; // Google icon from react-icons
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <div className="sign-in-content">
        <h1 className="sign-in-title">StudySync</h1>
        <p className="sign-in-subtitle">Power Up Your Learning Journey!</p>
        <div className="login-box">
          <h2>Log in to your account</h2>
          <p className="welcome-text">Welcome back! Please enter your details.</p>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">Forgot password</a>
            </div>
            <div className="button-group">
              <button type="submit" className="sign-in-button">Sign in</button>
              <button className="google-sign-in">
                <FcGoogle /> Continue with Google
              </button>
            </div>
            <p className="sign-up-link">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;