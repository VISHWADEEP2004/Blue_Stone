// src/Home.js
import React from 'react';
import '../../Assets/Css/Home.css';
import Destination from './Destinations'
import MyCarousel from './MyCarousel';
import Details from './Details';
import Footer from './Footer';
import Services from './Services';

function Home() {
  return (
  <>
    <MyCarousel/>
    <Details/>
     <Destination/>
    </>
  );
}

export default Home;
