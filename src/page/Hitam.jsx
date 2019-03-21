import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
export default class Art extends Component {
  render() {
    return (
      <div>
        <center>
          <h2>Coffe Hitam</h2>
        </center>
        <Container>
          <Row>
            <Col md="6">
              <img
                src="https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970__340.jpg"
                width="100%"
                height="350px"
                alt=""
              />
            </Col>
            <Col md="6">
              <div className="bawah">
                <center>
                  Kami menyediakan Kopi Hitam yang terbuat dari biji kopi asli
                  dari petani lokal di Indonesia.Sensasi pahit dari biji kopi
                  yang sudah di proses manual.
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
                  Kami menyediakan Kopi Creamy Latte dengan perpaduan rasa
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
