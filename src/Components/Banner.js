import React from 'react';
import {Carousel, Button, Container} from 'react-bootstrap';

import image1 from '../Assets/banner/1.png'; 
import image2 from '../Assets/banner/2.png';
import image3 from '../Assets/banner/3.png';


function Banner() {
  return (
    <Container>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <CarouselCaption />
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <CarouselCaption />
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <CarouselCaption />
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
  )
}

const CarouselCaption = () => {
  return (
    <React.Fragment>
      <h2>Welcome To Digital Fly Solutions</h2>
      <h2>We Do Business All of Time</h2>
      <p>-We Create a Concept Into The Market -</p>
      <Button variant="primary">Buy Now</Button>{' '}
      <Button variant="outline-secondary">Take a Tour</Button>
    </React.Fragment>
    );
}


export default Banner;
