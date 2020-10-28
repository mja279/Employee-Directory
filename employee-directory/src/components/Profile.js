import React from 'react';

function Profile(props) {
    // Import result is the URL of your image
    return <img src={props.image} alt="profile" />;
  }
  
  export default Profile;