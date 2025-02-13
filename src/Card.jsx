import React from 'react';
import './styles/Card.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, content, icon, variant = 'default' }) => {
  return (
    <div className={`card card-${variant}`}>
      <div className="card-glass-effect"></div>
      <FontAwesomeIcon icon={icon} className="card-icon" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
      </div>
    </div>
  );
};

export default Card;
