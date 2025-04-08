// src/components/SignUp.jsx
import React from 'react';
import './SignUp.css';
import { FcGoogle } from 'react-icons/fc'; // Google icon from react-icons
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <div className="sign-up-content">
        <h1 className="sign-up-title">StudySync</h1>
        <p className="sign-up-subtitle">Power Up Your Learning Journey!</p>
        <div className="signup-box">
          <h2>Create your account</h2>
          <p className="welcome-text">Welcome ! Please enter your details.</p>
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
            </div>
            <div className="button-group">
              <button type="submit" className="sign-up-button">Sign up</button>
              <button className="google-sign-in">
                <FcGoogle /> Continue with Google
              </button>
            </div>
            <p className="sign-in-link">
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;