import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Awards from './components/Awards';
import Carousel from './components/carousel';
import Featured from './components/Featured';
import Business from './components/Business';
import Download from './components/Download';
import Footer from './components/Footer';

const App = () => {
  return(
    <>
    <Navbar/>
    <LandingPage/>
    <Awards/>
    <Carousel/>
    <Featured/>
    <Business/>
    <Download/>
    <Footer/>
    </>
  );
};

export default App;
