import React from 'react';
import './app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = ({ title, subtitle, backgroundColor, textColor, icon }) => {
  return (
    <div
      className="banner"
      style={{ 
        backgroundColor: backgroundColor,
        color: textColor
      }}>
      <div className="banner-content">
        <h1 className="banner-title">
        <FontAwesomeIcon icon={icon} className="icon" />
          {title}
        </h1>
        <p className="banner-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
