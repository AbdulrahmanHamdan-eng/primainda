import React from 'react';
import './css/Header.css';
import { Nav, Navbar, NavLink, Dropdown } from 'react-bootstrap';

const Header = () => {
  window.addEventListener('scroll', () => {
    const navStyle = document.querySelector('#mainNav');
    if (window.scrollY === 0) {
      navStyle.classList.remove('navStyle');
    } else {
      navStyle.classList.add('navStyle');
    }
  });
  return (
    <>
      <Navbar
        expand='lg'
        className='w-100 position-fixed no-padding'
        id='mainNav'
      >
        <Navbar.Collapse id='basic-navbar-nav '>
          <Nav className='d-flex justify-content-around align-items-center  align-flex-start w-100 text-white'>
            <div className='d-flex flex-column '>
              <NavLink className='align-self-start'>
                <i class='fab fa-whatsapp'></i> +62 {'  '}27{'  '} 638 51820
              </NavLink>
            </div>
            <Dropdown className='dropdown-align-style'>
              <Dropdown.Toggle id='dropdown-basic'> العربية</Dropdown.Toggle>
              <Dropdown.Menu className='dropdown-style'>
                <Dropdown.Item href='#/action-1'>الإنجليزية</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>الأندونوسية</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className='d-flex gap-4'>
              <Nav.Link href='#home'>من نحن</Nav.Link>
              <div className='dropdown'>
                <div class='dropdown-content'>
                  <a href='#'>العمالة</a>
                  <a href='#'>التعقيم</a>
                  <a href='/coal-page'>الفحم</a>
                  <a href='/sandal-page'>العود</a>
                </div>
                <button className='dropbtn'>
                  <i className='fas fa-caret-down caret-style'></i> خدماتنا
                </button>
              </div>
              <Nav.Link href='#home' id='active'>
                الرئيسية
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
