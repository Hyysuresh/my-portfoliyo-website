import React from "react";
import { FaHackerrank } from "react-icons/fa";
import {
  SiLeetcode,
  SiHackerearth,
  SiCodechef,
  SiCodeforces,
} from "react-icons/si";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function Ranking() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1> O Coming my Ranking 🤫</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
        <Col md={2} sm={4} xs={6} className="text-center">
            <h1> Comming Soon 💁‍♂️ </h1>
        </Col>
        </Row>
      </Container>
    </div>
  );
}
