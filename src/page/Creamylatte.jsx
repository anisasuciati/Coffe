import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
export default class Art extends Component {
  render() {
    return (
      <div>
        <center>
          <h2>Coffe Creamy Latte</h2>
        </center>
        <Container>
          <Row>
            <Col md="6">
              <img
                src="https://t4.ftcdn.net/jpg/02/45/54/87/240_F_245548739_wlD8xuX1VAgtmHUWY4rltNSMSKYDpukb.jpg"
                width="100%"
                height="350px"
                alt=""
              />
            </Col>
            <Col md="6">
              <div className="bawah">
                <center>
                  Kami menyediakan kopi Creamy Latte dengan campuran keharuman
                  alami dari kayu manis.Sensasi keharuman semerbak yang menambah
                  cita rasa dan khas dari kopi ini.
                </center>
              </div>
            </Col>
          </Row>

          <br />
          <br />
          <Row>
            <Col md="6">
              <div className="bawah">
                <center>
                  Kami menyediakan kopi Creamy Latte dengan perpaduan rasa
                  capuccino dan coklat,menambah rasa manis dan harum kopi.
                </center>
              </div>
            </Col>

            <Col md="6">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/02/f7/f7/95/f-r-e-a-k-cafe.jpg"
                width="100%"
                height="350px"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
