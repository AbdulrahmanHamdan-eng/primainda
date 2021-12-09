import React from 'react';
import '../css/Main.css';
import Banner from './homePageComponents/Banner';
import MainScreen from './homePageComponents/MainScreen';
import Cards from './homePageComponents/Cards';

const HomePage = () => {
  return (
    <>
      <Banner />
      <main>
        <MainScreen />
      </main>
    </>
  );
};

export default HomePage;
