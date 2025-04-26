import React from 'react';
import './Display.css';

function Display() {
  const userData = JSON.parse(localStorage.getItem('userData')) || {};

  return (
    <div className="display-container">
        <h2 className="display-header">Account Settings</h2>

        <div className="profile-card">
            <img className="profile-image" src="https://via.placeholder.com/100" alt="Profile" />
            <h3 className="profile-name">{userData.fullName || 'Name'}</h3>
            <p className="profile-email">{userData.email || 'Email'}</p>
            <p className="profile-description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
            </p>
        </div>
    </div>
  );
}

export default Display;
