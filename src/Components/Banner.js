import React, { Component } from 'react';
import {Carousel, Button, Container} from 'react-bootstrap';

import image1 from '../Assets/banner/1.png'; 
import image2 from '../Assets/banner/2.png';
import image3 from '../Assets/banner/3.png';
import image4 from '../Assets/banner/4.jpg';

class Banner extends Component {

  state = {
    items : [
      {src: image4, alt: "First slide"},
      {src: image4, alt: "Second slide"},
      {src: image4, alt: "Third slide"}
    ]
    }

    render() {
      const { items } = this.state; 
    return (
      <Container>
      <Carousel>
        {items.map(item => 
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={item.src}
      alt={item.alt}
    />
    <Carousel.Caption>
      <CarouselCaption />
    </Carousel.Caption>
  </Carousel.Item>)}

</Carousel>
</Container>
      );
  }
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
