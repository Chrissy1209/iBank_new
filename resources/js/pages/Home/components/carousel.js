import React from 'react';
import { Carousel } from 'react-bootstrap';

import BGimage1 from "../image/iBankImage1.png"
import BGimage2 from "../image/iBankImage2.png"

const MyCarousel = () => {
  return (
    <Carousel fade>
        <Carousel.Item>
            <img
            className="w-100 center"
            src={BGimage1}
            alt="First slide"
            style={{height:300}}
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="w-100 center"
            src={BGimage2}
            alt="Second slide"
            style={{height:300,objectFit:'cover'}}
            />
        </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel