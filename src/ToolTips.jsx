import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faX } from '@fortawesome/free-solid-svg-icons';
import './styles/Tooltips.css';

const Tooltip = ({ title, description, variant = 'default', icon = faInbox }) => {
    const [isVisible, setIsVisible] = useState(true);
  
    return (
      <div className={`tooltip tooltip-${variant} ${isVisible ? 'tooltip-visible' : 'tooltip-hidden'}`}>
        <div className="tooltip-glass-effect"></div>
        <div className="tooltip-header">
          <FontAwesomeIcon icon={icon} className="tooltip-icon" />
          <h3>{title}</h3>
          <button className="tooltip-close" onClick={() => setIsVisible(false)}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <p className="tooltip-description">{description}</p>
      </div>
    );
};

export default Tooltip;

