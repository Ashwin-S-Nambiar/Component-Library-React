import React from 'react';
import './styles/Banners.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = ({ title, subtitle, variant = 'default', icon, isDismissible = false }) => {
  return (
    <div className={`banner banner-${variant}`}>
      <div className="banner-glass-effect"></div>
      <div className="banner-content">
        {icon && <FontAwesomeIcon icon={icon} className="banner-icon" />}
        <div className="banner-text">
          <h1 className="banner-title">{title}</h1>
          <p className="banner-subtitle">{subtitle}</p>
        </div>
        {isDismissible && (
          <button className="banner-close">
            <FontAwesomeIcon icon="times" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
