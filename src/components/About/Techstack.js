import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  FaApple,
  FaBandcamp,
  FaSpotify,
  FaAmazon,
  FaYoutube
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.amazon.com"><FaAmazon title="Amazon Music" color="black"/></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.apple.com"><FaApple title="Apple Music" color="black"/></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.bandcamp.com"><FaBandcamp title="Bandcamp" color="black"/></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.spotify.com"><FaSpotify title="Spotify Music" color="black"/></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.youtube.com"><FaYoutube title="YouTube" color="black"/></a>
      </Col>
      
    </Row>
  );
}

export default Techstack;
