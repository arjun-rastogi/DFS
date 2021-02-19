import React from 'react';
import {Media, Row, Col, Container} from 'react-bootstrap';

function Menu() {
    return (
        <Container>
        <Row>
        <Col sm={3}>
        <Media>
        <i className="fa fa-thumbs-o-up fa-3x text-primary" aria-hidden="true" />
        <Media.Body>
          <h5>DIGITAL MARKETING</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
          </p>
    
        </Media.Body>
      </Media>

        </Col>
        <Col sm={3}>
        <Media>
        <i className="fa fa-mobile fa-3x text-primary" aria-hidden="true" />
        <Media.Body>
          <h5>WEB MAKERS</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
          </p>
    
        </Media.Body>
      </Media>

        </Col>
        <Col sm={3}>
        <Media>
        <i className="fa fa-sliders fa-3x text-primary" aria-hidden="true" />
        <Media.Body>
          <h5>GRAPHIC DESIGNING</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
          </p>
    
        </Media.Body>
      </Media>

        </Col>
        <Col sm={3}>
        <Media>
        <i className="fa fa-sliders fa-3x text-primary" aria-hidden="true" />
        <Media.Body>
          <h5>CONTENT MARKETING</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
          </p>
    
        </Media.Body>
      </Media>
        </Col>
      </Row>
      </Container>    

          )
}

export default Menu
