
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


function App() {
  const testimonials = [
    {
      name: 'Jane Cody',
      message: 'This is an amazing product! Highly recommend.',
      image: 'https://via.placeholder.com/80'
    },
  ];
    
  return (
    <>
     <div className='badge-cont'>
      <h1 className='badges-title'> Badges </h1>
      <div className='badges-div'>
        <Badge label="Pill" type="secondary" />
        <Badge label="Pill" type="danger" />
        <Badge label="Pill" type="warning" />
        <Badge label="Pill" type="success" />
        <Badge label="Pill" type="blue" />
        <Badge label="Pill" type="purple" />
        <Badge label="Pill" type="pink" />
        <Badge label="Pill" type="indigo" />
      </div>  
      <br />
      <div className='squares-div'>
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

    <div>
    <h1 className="banners-title"> Banners </h1>
     <Banner
        title="Congratulations"
        subtitle="We provide the best services for you."
        backgroundColor="green"
        textColor="black"
        icon={faCircleCheck}
      /> 
      <Banner
        title="Attention"
        subtitle="We provide the best services for you."
        backgroundColor="orange"
        textColor="black"
        icon={faTriangleExclamation}
        showSubtitle={true}
        showIcon={true}
      /> 
      <Banner
        title="Update Avaiable"
        subtitle="We provide the best services for you."
        backgroundColor="blue"
        textColor="black"
        icon={faCircleInfo}
      /> 
      <Banner
        title="There is a problem with your application"
        subtitle="We provide the best services for you."
        backgroundColor="red"
        textColor="black"
        icon={faCircleXmark}
      /> 
    </div>

    <div>
      <h1 className="card-main"> Card </h1>
      <Card
        title="React Card"
        content="This is the content of the card. The card can be as long or short as needed."
        icon={faCloudArrowUp}
      />
    </div>

    <div> 
    <h1 className="testimonial-title"> Testimonial </h1>
    {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          message={testimonial.message}
          image={testimonial.image}
        />
      ))}
    </div>

     <h1 className="tooltips-title"> ToolTips </h1>
      <div style={{ padding: '100px' }}>
        <Tooltip color="black" />
      </div>

      <div style={{ padding: '100px' }}>
        <Tooltip color="blue" />
      </div>

      <div style={{ padding: '100px' }}>
        <Tooltip color="purple" />
      </div>

      <div style={{ padding: '100px' }}>
        <Tooltip color="green" />
      </div>
    </>
  )
}

export default App
