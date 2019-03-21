import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
export default class Art extends Component {
  render() {
    return (
      <div>
        <center>
          <h2>Coffe Art</h2>
        </center>
        <Container>
          <Row>
            <Col md="6">
              <img
                src="http://daily.oktagon.co.id/wp-content/uploads/2017/10/shutterstock_521711431.jpg?412b0e"
                width="100%"
                height="300px"
                alt=""
              />
            </Col>
            <Col md="6">
              <div className="bawah">
                <center>
                  Kami menyediakan kopi Art Flower,dengan sensasi keharuman kopi
                  bercover choco creamy dan tekstur yang lembut.Sangat cocok
                  untuk dinikmati saat musim panas maupun musim dingin.
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
                  Kami menyediakan kopi Art Cappucino,dengan varian rasa
                  cappucino bercampur serbuk coklat.
                </center>
              </div>
            </Col>

            <Col md="6">
              <img
                src="https://www.coffindo.id/images/news/news_20161021112149.jpg"
                width="100%"
                height="300px"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
