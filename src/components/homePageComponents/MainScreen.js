import React from 'react';

import { Carousel, Container } from 'react-bootstrap';
import Cards from './Cards';
const MainScreen = () => {
  return (
    <section>
      <div className='mb-5'>
        <Carousel className='carousel-style' fade>
          <Carousel.Item interval={1000}>
            <img
              style={{ width: '100%', height: '80vh' }}
              src='images/carsl2.png'
              alt='First slide'
              fluid
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              style={{ width: '100%', height: '80vh' }}
              src='images/carsl3.png'
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              style={{ width: '100%', height: '80vh' }}
              src='images/carsl1.png'
              alt='First slide'
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Cards />
    </section>
  );
};

export default MainScreen;
