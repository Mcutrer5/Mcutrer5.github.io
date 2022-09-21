import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cover from "../../Assets/cover.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import {
  FaYoutube,
  FaFacebook
} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              THIS IS A <span className="purple"> #BAND </span> TITLE
            </h1>
            <p className="home-about-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              <br />
              <br />ad minim veniam, quis nostrud exercitation ullamco
              <i>
                <b className="purple"> Lorem ipsum dolor sit amet </b>
              </i>
              <br />
              <br />
              consectetur adipiscing elit, sed do eiusmod tempor &nbsp;
              <i>
                <b className="purple">incididunt ut labore </b> et
                dolore magna aliqua.{" "}
                <b className="purple">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </b>
              </i>
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              <b className="purple"> Ut enim</b>
              <i>
                <b className="purple">
                  {" "}
                  ad minim veniam, quis nostrud exercitation ullamco
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Additional Info etc etc</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt> */}
              <img src={cover} className="img-fluid" alt="avatar" />
            {/* </Tilt> */}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mcutrer5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    );
}
export default Home2;
