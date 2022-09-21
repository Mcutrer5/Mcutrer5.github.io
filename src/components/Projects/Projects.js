import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section home-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Stuff here
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Item 1"
              description=""
              ghLink="#"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Item 2"
              description=""
              ghLink="#"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Item 3"
              description=""
              ghLink="#"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Item 4"
              description=""
              ghLink="#"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Item 5"
              description=""
              ghLink="#"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXc" 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Item 6"
              description=""
              ghLink="#"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
