import React from 'react';
import './styles/Testimonial.css'; 
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Testimonial = ({ name, message, image, rating }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-glass-effect"></div>
      <div className="testimonial-image-wrapper">
        <img src={image || "/api/placeholder/80/80"} alt={`${name}`} className="testimonial-image" />
      </div>
      <div className="testimonial-content">
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
        <blockquote className="testimonial-message">
          {message}
        </blockquote>
        <div className="testimonial-footer">
          <cite className="testimonial-name">— {name}</cite>
          {rating && (
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
