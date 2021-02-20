import React from 'react';
import {Carousel, Container, Col, Row, Tab, ListGroup,
   Jumbotron, Button,ButtonGroup,ButtonToolbar} 
 from 'react-bootstrap';
 

import image5 from '../Assets/banner/5.jpg';


function Touch() {
    return (
        <Container>
            <Jumbotron>

  
   <Row>
    <Col sm={6}>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image5}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image5}
      alt="Second slide"
    />
</Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image5}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </Col>
    <Col sm={6}>
    <h2>DIGITAL FLY SOLUTIONS PROFILE</h2>
    <h6><i className="fa fa-arrow-circle-right" /> ABOUT US</h6>
    <h6><i className="fa fa-arrow-circle-right" /> WHO WE ARE</h6>
    <h6><i className="fa fa-arrow-circle-right" /> VISION &amp; MISSION</h6>
    <h6><i className="fa fa-arrow-circle-right" /> FAQ</h6>

  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque eleifend 
  in mi sit amet mattis suspendisse ac ligula volutpat nisl rhoncus sagittis cras 
  suscipit lacus quis erat malesuada lobortis eiam dui magna volutpat commodo 
  eget pretium vitae elit etiam luctus risus urna in malesuada ante convallis.</p>


<ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
    <ButtonGroup className="mr-2" aria-label="First group">
    <Button variant="outline-dark">Read More</Button>
    </ButtonGroup>
     <ButtonGroup className="mr-2" aria-label="First group">
     <Button variant="primary">Buy Now</Button>
     </ButtonGroup>
 </ButtonToolbar>
  
    </Col>
  </Row>




</Jumbotron>
        </Container>
    )
}

export default Touch
