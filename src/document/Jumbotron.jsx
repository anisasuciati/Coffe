import React, { Component } from "react";
import { Row, Col, Jumbotron, Button } from "reactstrap";

export default class Jumbotrons extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="bgr">
          <Row>
            <Col md="4"> </Col>
            <Col md="8">
              <h1 className="display-3 lead font-Jumbotron">Rumah Coffe</h1>
              <p className="lead font-Jumbotron">
                Kami menyediakan kopi dengan berbagai varian rasa.Dengan tekstur
                keharuman kopi alami yang diolah dengan Hand Made petani kopi
                lokal,harga yang terjangkau dengan kualitas kopi yang tinggi
                mampu dijadikan teman anda untuk menambah inspirasi di pagi
                hari.Kopi yang kami suguhkan berkualitas tinggi tanpa serbuk
                sari dengan tujuan agar memberikan sensasi kelembutan saat di
                sedu.
              </p>
              <hr className="my-2" />

              <p className="lead" />
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}
