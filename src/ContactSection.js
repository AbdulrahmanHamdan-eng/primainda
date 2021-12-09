import React from 'react';
import './css/ContactSection.css';
import { Container } from 'react-bootstrap';
const ContactSection = () => {
  return (
    <section className='contact-section'>
      <Container>
        <div className='social d-flex justify-content-center '>
          <a href='#/' className='mx-2 contact-icon-style'>
            <i className='fab fa-twitter twitter'></i>
          </a>
          <a href='#' className='mx-2 contact-icon-style'>
            <i className='fab fa-facebook-f facebook'></i>
          </a>
          <a href='#' className='mx-2 contact-icon-style'>
            <i className='fab fa-instagram instagram'></i>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
