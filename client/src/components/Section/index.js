import React from 'react';
import ian from "../image/ian.jpg";
import hannahsm from "../image/hannahsm.jpg";
import stephanie from "../image/stephanie.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


import "./style.css";




function Section() {
  return (
    <div className="container">
      <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              {/* <Card.Img className="img" variant="top" src={ian} /> */}
              <Card.Body>
                <Card.Title>ian</Card.Title>
                <Card.Text>
                  Ian had so much fun in the beach play date with Emma and her human.
                </Card.Text>
              </Card.Body>
            </Card>
              </Col>
              <Col>
            <Card className="card">
              {/* <Card.Img className="img" variant="top" src={hannahsm} /> */}
              <Card.Body>
                <Card.Title>hannah</Card.Title>
                <Card.Text>
                  We made so many friends at our play date. Thank you Pinder!!!!.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              {/* <Card.Img className="img" variant="top" src={stephanie} /> */}
              <Card.Body>
                <Card.Title>stephanie</Card.Title>
                <Card.Text>
                Luke had a doctor's appointment so we decided to wait for him with Sam
                and Luke's dad at a human friendly coffee shop.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>
  );
}


export default Section;






    



