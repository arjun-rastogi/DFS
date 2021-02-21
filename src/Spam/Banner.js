import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import image4 from '../Assets/banner/4.jpg';


function Banner() {
    return (
        <Carousel>
            <img src={image4} />
            <img src={image4} />
            <img src={image4} />
    </Carousel>
    )
}

export default Banner;
