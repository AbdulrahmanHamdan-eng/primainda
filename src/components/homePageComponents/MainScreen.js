import React from 'react';

import { Carousel, Container } from 'react-bootstrap';
import Cards from './Cards';
const MainScreen = () => {
  return (
    <section>
      <Container>
        <div className='mb-5'>
          <Carousel fade>
            <Carousel.Item>
              <img
                style={{ width: '100%', height: '28rem' }}
                src='images/carsl1.png'
                alt='First slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ width: '100%', height: '28rem' }}
                src='images/carsl2.png'
                alt='First slide'
                fluid
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <Cards />
      </Container>
    </section>
  );
};

export default MainScreen;
