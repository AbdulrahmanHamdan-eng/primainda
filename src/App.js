import React from 'react';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoalPage from './components/CoalPage';
import SandalPage from './components/SandalPage';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/coal-page' element={<CoalPage />} />
          <Route exact path='/sandal-page' element={<SandalPage />} />
        </Routes>
        <ContactSection />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
