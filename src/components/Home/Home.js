import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/temp.png";
import Home2 from "./Home2";
import About from "../About/About";
import Footer from "../Footer";
import AboutCard from "../About/AboutCard"
import Projects from "../Projects/Projects";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <div className="blur-bg"></div>
        <Container className="home-content">
          <Row>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
        {/* <AboutCard /> */}
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Good food, good prices{" "}
                {/* <span className="wave" role="img" aria-labelledby="wave">
                🧛
                </span> */}
              </h1>

              <h1 className="heading-name">
                 
                <br/>
                <strong className="main-name"> RESTAURANT</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
      <Projects />
      <About />
      <Home2 />
    </section>
  );
}

export default Home;
