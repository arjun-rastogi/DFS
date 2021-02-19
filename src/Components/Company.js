import React from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import image1 from '../Assets/services/1.jpg';

function Company() {
    return (
        <Container>
            <h1 classNameName="text-center">
            Digital Marketing Company in DELHI, INDIA  that Offers Guaranted Improvements
            </h1>
            <hr classNameName="mt-2 mb-3"/>
           <Row>
    <Col sm={8}>
    <div className="p-3 mb-2 bg-light text-dark">
        Digital Markitors is a leading Digital Marketing Agency which offers a wide range of 
       digital marketing services like SEO, SEM, PPC, Content Marketing, ORM, etc. with a comprehensive
       range of services, we represent  a fully-equippped team of digital marketing experts. Over the past
       few years, we have established our niche in the Delhi NCR market irrespective of business domains.
       We are known for our tech-savvy digital marketing approach to connect with prospective clients. Our
       digital marketing services play a significant role in boosting market presence of business and startups.
       We consistently strive to apply our professional expertise to mark a difference in the market. The team 
       of Digital Markitors stands out in the market by helping business work on their corporate identity.
    </div>
    </Col>
    <Col sm={4}>
    <img className="col" src={image1} alt="sans"/>
                
    </Col>
  </Row>
  </Container>
    )
}

export default Company
