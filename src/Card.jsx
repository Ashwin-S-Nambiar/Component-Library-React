import React from 'react';
import './app.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, content, icon }) => {
  return (
  <>
    <div className='card-icon'>
    <FontAwesomeIcon icon={icon} className="cloud-icon" />
   </div>
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
      </div>
    </div>
  </>
  );
};

export default Card;
