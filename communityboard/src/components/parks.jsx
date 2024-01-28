import React from 'react';
import "../styles/parkstyle.css"; 

const Park = ({ name, type, image, parkLink }) => {
  return (
    <div className="park-style">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{type}</p>
      <a href={parkLink} className="park-button">View Park</a>
    </div>
  );
};

export default Park;
