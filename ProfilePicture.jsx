import React from 'react';
import thumbnail from './assets/thumbnail-4.webp'; 

function ProfilePicture() {
  const handleClick = () => {
    alert(1);
  };

  return (
    <img 
      onClick={handleClick} 
      src={thumbnail} 
      alt="Profile" 
      style={{ cursor: 'pointer' }} // Optional: to indicate the image is clickable
    />
  );
}

export default ProfilePicture;
