import React from 'react';
import './styles/Badges.css';

const Badge = ({ label, type = 'default', size = 'medium', isGlowing = false }) => {
  return (
    <span className={`badge badge-${type} badge-${size} ${isGlowing ? 'badge-glow' : ''}`}>
      {label}
    </span>
  );
};

export default Badge;