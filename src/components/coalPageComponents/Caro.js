import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Caro.css';

console.log('caro.js is working');

const Caro = () => {
  return (
    <div>
      <img
        src='images/piaEdit22-200x161.png'
        class='rounded position-absolute logo'
        alt='logo'
      />
      <Carousel position-relative fade>
        <Carousel.Item>
          <img
            className='d-block w-100 vh-100'
            src='images/coalImg2.png'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3 className='text-shadow'>
              تخفيضات تصل إلى ٣٠ ٪ على الفحم الأسود
            </h3>
            <p className='text-shadow'>غير شاملة الضريبة *</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 vh-100'
            src='images/coalImg3.png'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3 className='text-shadow'>أجود أنواع الفحم الصلب</h3>
            <p>************</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caro;
