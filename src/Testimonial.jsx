import React from 'react';
import PropTypes from 'prop-types';
import './app.css'; 
import main from './image.jpg';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Testimonial = ({ name, message }) => {
  return (
    <div className="testimonial">
      <img src={main} alt={`${name}'s profile`} className="testimonial-image" />
      <div className="testimonial-content">
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
        <blockquote className="testimonial-message">
          {message}
        </blockquote>
        <cite className="testimonial-name">— {name}</cite>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Testimonial;
