import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import restaurant from "../Assets/temp.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMenuFold
} from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={restaurant} className="img-fluid logo" alt="brand" />
          {/* <h1 className="h1-fluid logo" alt="brand">meow</h1> */}

        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            
          
            <Nav.Item>
              <Nav.Link as={Link} to="/#home" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Home"
                onClick={() => updateExpanded(false)}
              >
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <HashLink class="nav-link" 
                to="/#about"
                scroll={(el) => el.scrollIntoView({ behavior: "auto" })} 
                onClick={() => updateExpanded(false)}>

            <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </HashLink>
              </Nav.Item>
              
               <Nav.Item>
              <HashLink class="nav-link" 
                to="/#projects"
                scroll={(el) => el.scrollIntoView({ behavior: "auto" })} 
                onClick={() => updateExpanded(false)}>

            <AiOutlineUser style={{ marginBottom: "2px" }} /> Menu
            </HashLink>
              </Nav.Item>
            
            

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Mcutrer5"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" Support Me "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
