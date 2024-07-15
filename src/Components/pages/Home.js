import React from 'react';
import '../../Assets/Css/Home.css';
import MyCarousel from './MyCarousel';
import Details from './Details';
import Destination from './Destinations';
import Services from './Services';

function Home() {
  return (
  <>
    <MyCarousel/>
    <Details/>
    <Destination/>
    <Services/>
    </>
  );
}

export default Home;
