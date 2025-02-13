import React from 'react';
import './App';
import './styles/Squares.css'

const Square = ({ label, type = 'default', size = 'medium', isAnimated = false }) => {
  return (
    <span className={`square square-${type} square-${size} ${isAnimated ? 'square-animated' : ''}`}>
      {label}
    </span>
  );
};

export default Square;