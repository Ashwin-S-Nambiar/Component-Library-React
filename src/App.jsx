import React from 'react';
import './App.css';
import Badge from './Badges';
import Squares from './Squares';
import Banner from './Banners';
import Card from './Card';
import Tooltip from './ToolTips';
import Testimonial from './Testimonial';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const testimonials = [
    {
      name: 'Jane Cody',
      message: 'This is an amazing product! Highly recommend.',
      image: 'https://via.placeholder.com/80'
    },
  ];
    
  return (
    <div className="app-container">
      <div className="grid-overlay"></div>
      
      <section className="section badges-section">
        <h1 className="section-title">Badges</h1>
        <div className="component-container">
          <div className="badges-grid">
            <Badge label="Pill" type="secondary" />
            <Badge label="Pill" type="danger" />
            <Badge label="Pill" type="warning" />
            <Badge label="Pill" type="success" />
            <Badge label="Pill" type="blue" />
            <Badge label="Pill" type="purple" />
            <Badge label="Pill" type="pink" />
            <Badge label="Pill" type="indigo" />
          </div>
          
          <div className="squares-grid">
            <Squares label="Square" type="secondary" />
            <Squares label="Square" type="danger" />
            <Squares label="Square" type="warning" />
            <Squares label="Square" type="success" />
            <Squares label="Square" type="blue" />
            <Squares label="Square" type="purple" />
            <Squares label="Square" type="pink" />
            <Squares label="Square" type="indigo" />
          </div>
        </div>
      </section>

      <section className="section banners-section">
        <h1 className="section-title">Banners</h1>
        <div className="component-container">
          <Banner
            title="Congratulations"
            subtitle="We provide the best services for you."
            backgroundColor="rgba(46, 160, 67, 0.1)"
            textColor="#1a7f37"
            icon={faCircleCheck}
          />
          <Banner
            title="Attention"
            subtitle="We provide the best services for you."
            backgroundColor="rgba(247, 153, 36, 0.1)"
            textColor="#9a6700"
            icon={faTriangleExclamation}
          />
          <Banner
            title="Update Available"
            subtitle="We provide the best services for you."
            backgroundColor="rgba(56, 139, 253, 0.1)"
            textColor="#0969da"
            icon={faCircleInfo}
          />
          <Banner
            title="There is a problem with your application"
            subtitle="We provide the best services for you."
            backgroundColor="rgba(248, 81, 73, 0.1)"
            textColor="#cf222e"
            icon={faCircleXmark}
          />
        </div>
      </section>

      <section className="section cards-section">
        <h1 className="section-title">Cards</h1>
        <div className="component-container cards-grid">
          <Card
            title="Deploy Instantly"
            content="Push to git and your site is live. Zero configuration required."
            icon={faCloudArrowUp}
          />
        </div>
      </section>

      <section className="section testimonials-section">
        <h1 className="section-title">Testimonials</h1>
        <div className="component-container testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              message={testimonial.message}
              image={testimonial.image}
            />
          ))}
        </div>
      </section>

      <section className="section tooltips-section">
        <h1 className="section-title">Tooltips</h1>
        <div className="component-container tooltips-grid">
          <div className="tooltip-wrapper">
            <Tooltip color="#000000" />
          </div>
          <div className="tooltip-wrapper">
            <Tooltip color="#0969da" />
          </div>
          <div className="tooltip-wrapper">
            <Tooltip color="#8250df" />
          </div>
          <div className="tooltip-wrapper">
            <Tooltip color="#1a7f37" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;