import React from 'react';
import {Card, Button, Container, Col, Row, Image} from 'react-bootstrap';


import image1 from '../Assets/brand/1.png'; 
import image2 from '../Assets/brand/2.png';
import image3 from '../Assets/brand/3.png';
import image4 from '../Assets/brand/4.png'; 
import image5 from '../Assets/brand/5.png';
import image6 from '../Assets/brand/6.png';


function Brand() {
    return (
        <Container>
 <Row>
    <Col sm={2}><Card.Img variant="top" src={image1} /></Col>
    <Col sm={2}><Card.Img variant="top" src={image2} /></Col>
    <Col sm={2}><Card.Img variant="top" src={image3} /></Col>
    <Col sm={2}><Card.Img variant="top" src={image4} /></Col>
    <Col sm={2}><Card.Img variant="top" src={image5} /></Col>
    <Col sm={2}><Card.Img variant="top" src={image6} /></Col>
  </Row>

</Container>

    )
}

export default Brand
