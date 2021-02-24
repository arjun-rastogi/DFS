import React from 'react';
import {Container, Col, Row, Image, Jumbotron, Media} from 'react-bootstrap'; 


import image1 from '../Assets/testimonial/1.jpg'
import image2 from '../Assets/testimonial/2.jpg'

function Client() {
    return (
        <Container>
        <Jumbotron>
        <h2 className="text-center">
            WHAT CLIENT SAY
        </h2>
        <p className="text-secondary text-center">
            Clean and Modern design is our best specialist
        </p>

        <Row>
    <Col sm={6}>
    <Media>
        <Image src={image1} roundedCircle />
  <Media.Body>
    <h5>Sarah Smith</h5>
    <p>envato.com</p>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
  </Media.Body>
</Media>
    </Col>
    <Col sm={6}>
    <Media>
        <Image src={image2} roundedCircle />
  <Media.Body>
  <h5>Sarah Smith</h5>
  <p>envato.com</p>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
  </Media.Body>
</Media>
    </Col>
  </Row>

</Jumbotron>
</Container>
    )
}

export default Client
