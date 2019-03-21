import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
export default class Cards extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="4">
              <Card>
                <CardImg
                  top
                  width="50%"
                  src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/Ev6nSeNPx1.jpg"
                  alt=""
                />
                <CardBody>
                  <CardTitle>Coffe Art</CardTitle>
                  <Link to="/about/art">
                    <Button>View</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col md="4">
              <Card>
                <CardImg
                  topcontent
                  width="50%"
                  src="https://majalah.ottencoffee.co.id/wp-content/uploads/2015/07/Pumpkin-Spice-Latte-12.jpg"
                  alt=""
                />
                <CardBody>
                  <CardTitle>Coffe Creamylatte</CardTitle>
                  <Link to="/about/creamylatte">
                    <Button>View</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardImg
                  top
                  width="50%"
                  src="http://images.jurnas.com/posts/1/2017/2017-08-29/0e0de7636295e4fda8b508db7cf9a8be_1.jpg"
                  alt=""
                />
                <CardBody>
                  <CardTitle>Coffe Hitam</CardTitle>
                  <Link to="/about/hitam">
                    <Button>View</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
