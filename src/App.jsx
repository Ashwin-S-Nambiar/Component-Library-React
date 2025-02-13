import React, { useState, useEffect } from 'react';
import './App.css';
import Badge from './Badges';
import Squares from './Squares';
import Banner from './Banners';
import Card from './Card';
import Tooltip from './ToolTips';
import Testimonial from './Testimonial';
import { faInfo, faCheck, faLock, faTriangleExclamation, faCircleXmark, faCircleInfo, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import main from './image.jpg';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: 'Jane Cody',
      message: 'This is an amazing product! Highly recommend.',
      image: 'https://via.placeholder.com/80'
    },
  ];

  return (
    <div className={`app-container ${isVisible ? 'visible' : ''}`}>
      <div className="grid-background"></div>
      
      <header className="page-header">
        <h1 className="gradient-title">Modern Components</h1>
        <p className="header-subtitle">A collection of beautiful, reusable components</p>
      </header>

      <section className="section badges-section">
        <div className="section-header">
          <h2 className="section-title">Badges</h2>
          <div className="section-divider"></div>
        </div>
        <div className="component-container">
          <div className="badges-grid">
            <Badge label="Default" type="default" />
            <Badge label="Success" type="success" />
            <Badge label="Warning" type="warning" />
            <Badge label="Danger" type="danger" />
            <Badge label="Purple" type="purple" />
            <Badge label="Default" type="blue" />
            <Badge label="Success" type="pink" />
            <Badge label="Warning" type="indigo" />
          </div>
          
          <div className="squares-grid">
            <Squares label="Default" type="secondary" />
            <Squares label="Success" type="success" isAnimated={true} />
            <Squares label="Warning" type="warning" />
            <Squares label="Square" type="success" />
            <Squares label="Default" type="secondary" />
            <Squares label="Purple" type="purple" />
            <Squares label="Pink" type="pink" />
            <Squares label="Indigo" type="indigo" />
          </div>
        </div>
      </section>

      <section className="section banners-section">
        <div className="section-header">
          <h2 className="section-title">Banners</h2>
          <div className="section-divider"></div>
        </div>
        <div className="component-container">
          <Banner
            title="Welcome Back!"
            subtitle="Discover new features and updates"
            variant="primary"
            icon={faInfo}
            isDismissible={true}
          />
          <Banner
            title="Attention"
            subtitle="Urgent changes required."
            variant='warning'
            icon={faTriangleExclamation}
            />
          <Banner
            title="Update"
            variant='success'
            subtitle="New version ready to be downloaded."
            icon={faCircleInfo}
          />
          <Banner
            title="Error"
            subtitle="There was an issue with that action."
            variant='danger'
            icon={faCircleXmark}
          />
        </div>
      </section>

      <section className="section cards-section">
        <div className="section-header">
          <h2 className="section-title">Cards</h2>
          <div className="section-divider"></div>
        </div>
        <div className="component-container cards-grid">
          <Card
            title="Deploy Instantly"
            content="Push to git and your site is live. Zero configuration required."
            icon={faCloudArrowUp}
          />
          <Card
            title="Security"
            content="Enterprise-grade security features"
            icon={faLock}
            variant="success"
          />
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="section-header">
          <h2 className="section-title">Testimonials</h2>
          <div className="section-divider"></div>
        </div>
        <div className="component-container testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              name="John Doe"
              message="This product has completely transformed our workflow."
              rating={5}
              image={main}
            />
          ))}
        </div>
      </section>

      <section className="section tooltips-section">
        <div className="section-header">
          <h2 className="section-title">Tooltips</h2>
          <div className="section-divider"></div>
        </div>
        <div className="component-container tooltips-grid">
          <div className="tooltip-wrapper">
            <Tooltip 
              title="Archive Notes"
              description="Click to archive note"
              variant="primary"
              icon={faCheck}
            />
          </div>
          <div className="tooltip-wrapper">
            <Tooltip 
              title="Add Note"
              description="Click to add new note"
              variant="success"
            />
          </div>
          <div className="tooltip-wrapper">
            <Tooltip 
              title="Delete Note"
              description="Delete the note?"
              variant="danger"
              icon={faTriangleExclamation}
            />
          </div>
          <div className="tooltip-wrapper">
            <Tooltip 
              title="Unsaved Note"
              description="Save the note?"
              variant="warning"
              icon={faCircleInfo}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;