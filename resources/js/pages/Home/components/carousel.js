import React from 'react';
import { Carousel } from 'react-bootstrap';
import Cat from "../image/cat.jpg";
import Sea from '../image/sea.jpeg';

const MyCarousel = () => {
  return (
    <Carousel fade>
        <Carousel.Item>
            <img
            className="w-100 center"
            src={Cat}
            alt="First slide"
            style={{height:300,objectFit:'cover'}}
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="w-100 center"
            src={Cat}
            alt="Second slide"
            style={{height:300,objectFit:'cover',transform:"rotateY(180deg)"}}
            />
        </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel