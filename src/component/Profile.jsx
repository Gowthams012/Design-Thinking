import React, { useState } from 'react';
import './profile.css';
import { FaEdit, FaSave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = typeof useNavigate === 'function' ? useNavigate() : null;

  const [isEditing, setIsEditing] = useState(false);
  const [isEmailEditing, setIsEmailEditing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: 'Mickel A',
    nickName: 'Mick',
    gender: 'Male',
    country: 'United States',
    language: 'English',
    timeZone: 'GMT-4',
  });

  const [email, setEmail] = useState('mickela@gmail.com');
  const [lastUpdated, setLastUpdated] = useState('1 month ago'); // Initial time

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    updateLastUpdated(); // Update the timestamp
  };

  // Toggle edit mode for profile info
  const toggleEdit = () => {
    if (isEditing) {
      console.log('Saving profile data:', formData);
      updateLastUpdated(); // Update the timestamp
    }
    setIsEditing(!isEditing);
  };

  // Toggle edit mode for email
  const toggleEmailEdit = () => {
    if (isEmailEditing) {
      console.log('Saving new email:', email);
      updateLastUpdated(); // Update the timestamp
    }
    setIsEmailEditing(!isEmailEditing);
  };

  // Handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Update the last updated timestamp
  const updateLastUpdated = () => {
    const now = new Date();
    const formattedTime = `${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`;
    setLastUpdated(formattedTime);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    sessionStorage.removeItem('userSession');
    if (navigate) {
      navigate('/signin');
    } else {
      window.location.href = '/signin';
    }
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1 className="logo">
          <span className="blue">StudySync</span>
          <p className="tagline">Power Up Your Learning Journey!</p>
        </h1>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/plans">Plans</a>
          <a href="/xpzones">XP Zones</a>
          <a href="/profile" className="active">
            Profile
          </a>
        </nav>
      </header>

      <section className="profile-body">
        <div className="profile-info">
          <img
            src="src/assets/profile.jpg"
            alt="Profile"
            className="avatar"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150';
            }}
          />
          <div>
            <h3>{formData.fullName}</h3>
            <p>{email}</p>
          </div>
          <button className="edit-button" onClick={toggleEdit}>
            {isEditing ? <FaSave /> : <FaEdit />}
            {isEditing ? ' Save' : ' Edit'}
          </button>
        </div>

        <form className="profile-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nickName">Nick Name</label>
            <input
              id="nickName"
              type="text"
              name="nickName"
              value={formData.nickName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              disabled={!isEditing}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              disabled={!isEditing}
            >
              <option value="">Select Country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Japan">Japan</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="language">Language</label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              disabled={!isEditing}
            >
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Chinese">Chinese</option>
              <option value="Japanese">Japanese</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="timeZone">Time Zone</label>
            <select
              id="timeZone"
              name="timeZone"
              value={formData.timeZone}
              onChange={handleInputChange}
              disabled={!isEditing}
            >
              <option value="">Select Time Zone</option>
              <option value="GMT-12">GMT-12</option>
              <option value="GMT-11">GMT-11</option>
              <option value="GMT-10">GMT-10</option>
              <option value="GMT-9">GMT-9</option>
              <option value="GMT-8">GMT-8 (PST)</option>
              <option value="GMT-7">GMT-7 (MST)</option>
              <option value="GMT-6">GMT-6 (CST)</option>
              <option value="GMT-5">GMT-5 (EST)</option>
              <option value="GMT-4">GMT-4</option>
              <option value="GMT-3">GMT-3</option>
              <option value="GMT-2">GMT-2</option>
              <option value="GMT-1">GMT-1</option>
              <option value="GMT+0">GMT+0</option>
              <option value="GMT+1">GMT+1</option>
              <option value="GMT+2">GMT+2</option>
              <option value="GMT+3">GMT+3</option>
              <option value="GMT+4">GMT+4</option>
              <option value="GMT+5">GMT+5</option>
              <option value="GMT+6">GMT+6</option>
              <option value="GMT+7">GMT+7</option>
              <option value="GMT+8">GMT+8</option>
              <option value="GMT+9">GMT+9</option>
              <option value="GMT+10">GMT+10</option>
              <option value="GMT+11">GMT+11</option>
              <option value="GMT+12">GMT+12</option>
            </select>
          </div>
        </form>

        <div className="email-section">
          <p className="email-label">My email Address</p>
          <div className="email-box">
            <div className="email-info">
              <div className="email-icon">📧</div>
              <div>
                {isEmailEditing ? (
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="email-input"
                  />
                ) : (
                  <p>{email}</p>
                )}
                <span>Last updated: {lastUpdated}</span>
              </div>
              <button className="edit-button" onClick={toggleEmailEdit}>
              {isEmailEditing ? 'Save' : 'Edit'}
            </button>
            </div>

          </div>
          <button className="logout-button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </section>
    </div>
  );
};

export default Profile;