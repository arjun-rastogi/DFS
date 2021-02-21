import React from 'react'
import { Container, Col, Row, Media } from 'react-bootstrap';

import image1 from '../Assets/icon/1.png';
import image2 from '../Assets/icon/2.jpg';
import image3 from '../Assets/icon/3.png';

function Service() {
    return (
        <Container>
            <h1 className="text-center text-primary">Digital Marketing Services</h1>
            <hr className="mt-2 mb-3"/>
            <Row>
           <Col sm>
           <Media className="shadow-lg p-3 mb-5 bg-white rounded">
  <Media.Body>
  <img
    width={64}
    height={64}
    className="rounded mx-auto d-block"
    src={image1}
    alt="Generic placeholder"
    />
    <h5 className="text-center">Search Engine Optimization</h5>
    <p className='text-center'>
        Whether you want to enhance online presence or increase website traffic, 
        we provide you the best SEO strategy....    
    </p>
  </Media.Body>
</Media>

           </Col>
           <Col sm>
           <Media className="shadow-lg p-3 mb-5 bg-white rounded">
  <Media.Body>
  <img
    width={64}
    height={64}
    className="rounded mx-auto d-block"
    src={image2}
    alt="Generic placeholder"
    />
    <h5 className="text-center">Social Media Marketing</h5>
    <p className='text-center'>
        With our effective social media marketing strategy engage your 
        audience craetively and spread your...
    </p>
  </Media.Body>
</Media>

           </Col>
           <Col sm>
           <Media className="shadow-lg p-3 mb-5 bg-white rounded">
  <Media.Body>
  <img
    width={64}
    height={64}
    className="rounded mx-auto d-block"
    src={image3}
    alt="Generic placeholder"
    />
    <h5 className="text-center">Pay Per Click</h5>
    <p className='text-center'>
        Search Engine Marketing is an effective tool but not enough to beat
        the competition. Our PPC management... 
    </p>
  </Media.Body>
</Media>

           </Col>
           </Row>

           <Row>
           <Col sm>
           <Media className="shadow-lg p-3 mb-5 bg-white rounded">
  <Media.Body>
  <img
    width={64}
    height={64}
    className="rounded mx-auto d-block"
    src={image1}
    alt="Generic placeholder"
    />
    <h5 className="text-center">Display Advertising</h5>
    <p className='text-center'>
        Make the best of Display advertising company in Delhi and
        drive your advertisement campaign to success... 
    </p>
  </Media.Body>
</Media>

           </Col>
           <Col sm>
           <Media className="shadow-lg p-3 mb-5 bg-white rounded">
  <Media.Body>
  <img
    width={64}
    height={64}
    className="rounded mx-auto d-block"
    src={image2}
    alt="Generic placeholder"
    />
    <h5 className="text-center">Content Marketing</h5>
    <p className='text-center'>
    Content is king. It is an engaging way to increase organic traffic 
    for your website. Our agency provides.
    </p>
  </Media.Body>
</Media>

           </Col>
           <Col sm>
           <Media className="shadow-lg p-3 mb-5 bg-white rounded">
  <Media.Body>
  <img
    width={64}
    height={64}
    className="rounded mx-auto d-block"
    src={image3}
    alt="Generic placeholder"
    />
    <h5 className="text-center">Online Reputation Management</h5>
    <p className='text-center'>
    We as the top Reputation Management Company in Delhi, offer our 
    services to improve and mantain a good...
    </p>
 </Media.Body>
</Media>

           </Col>
           </Row>

        </Container>
    )
}

export default Service
