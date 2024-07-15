import React, { useState } from 'react';
import '../../Assets/Css/Profile.css'; // Make sure to create and style this CSS file

const Profile = () => {
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email'); // Ensure you have stored email in localStorage
  const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic')); // Ensure you have stored profile picture URL in localStorage

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem('profilePic', reader.result);
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-pic">
        <img src={profilePic} alt={`${username}'s profile`} />
        <input type="file" onChange={handleProfilePicChange} />
      </div>
      <div className="profile-info">
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Profile;
