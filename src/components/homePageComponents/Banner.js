import React from 'react';
import '../../css/Banner.css';
const Banner = () => {
  return (
    <header className='page-wrapper'>
      {/* <a href='#maid'> */}
      <img src='images/maidCircle .png' className='first' />
      {/* </a> */}
      {/* <a href='#sand'> */}
      <img src='images/sandalwoodCircle.png' className='second' />
      {/* </a> */}
      <img src='images/piaEdit22.png' className='page-wrapper__logo' />
      {/* <a href='#san'> */}
      <img src='images/sanitizeCircle.png' className='third' />
      {/* </a> */}
      {/* <a href='#coal'> */}
      <img src='images/coalCircle.png' className='fourth' />
      {/* </a> */}
      <h2 class='heading2'>محطتك لأجود المنتجات والخدمات</h2>
    </header>
  );
};

export default Banner;
