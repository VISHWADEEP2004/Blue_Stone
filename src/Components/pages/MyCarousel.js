import React from 'react';
import { Carousel } from 'react-bootstrap';
import bs1 from '../../Assets/Img/bs1.png';
import bs2 from '../../Assets/Img/bs2.jpeg';
import bs3 from '../../Assets/Img/bs3.jpeg';
import bs4 from '../../Assets/Img/bs4.jpeg';
import bs5 from '../../Assets/Img/bs5.jpeg';
import CarouselImage from './CarouselImage';
const MyCarousel = () => {
  const arrowStyles = {
    fontSize: '0px',
    color: 'trabsperant',
    borderRadius: '50%', 
    padding: '10px', 
    transition: 'border-radius 0.3s ease',
  };

  return (
    <Carousel interval={2000} nextIcon={<span style={arrowStyles}>&gt;</span>} prevIcon={<span style={arrowStyles}>&lt;</span>}>
      {/* <Carousel.Item>
        <CarouselImage src={bs1} alt="Second Image" />
      </Carousel.Item> */}
      <Carousel.Item>
        <CarouselImage src={bs3} alt="First Image" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={bs4} alt="First Image" />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src={bs5} alt="First Image" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;