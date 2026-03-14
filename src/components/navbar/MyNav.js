import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import "../../style.css";

export default function MyNav() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/">
          <div className="d-flex flex-row align-items-center">
            <img
              src="./profile.png"
              className="img-fluid logo"
              alt="brand"
            />
            <h5
              id="navhead"
              style={{
                marginLeft: "15px",
                color: "#fbd9ad",
              }}
            >
              SURESH GHASAL
            </h5>
          </div>
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className="navbarmain">
          <Nav className="ms-auto">

            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projectspage"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certificatepage"
                onClick={() => updateExpanded(false)}
              >
                <ImBlog /> Certifications
              </Nav.Link>
            </Nav.Item>

            {/* Blogs Dropdown */}
            <NavDropdown title={<><FaBlog /> Blogs</>} id="blogs-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/blogs_page/networking"
                onClick={() => updateExpanded(false)}
              >
                Networking
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blogs_page/Linux"
                onClick={() => updateExpanded(false)}
              >
                Linux
              </NavDropdown.Item>

              <NavDropdown title="Docker" id="docker-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/blogs_page/docker/dockerTheory"
                  onClick={() => updateExpanded(false)}
                >
                  Docker Theory
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/blogs_page/docker/DockerCommand"
                  onClick={() => updateExpanded(false)}
                >
                  Docker Command
                </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown.Item
                as={Link}
                to="/blogs_page/Jenkins"
                onClick={() => updateExpanded(false)}
              >
                Jenkins
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blogs_page/Terraform"
                onClick={() => updateExpanded(false)}
              >
                Terraform
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blogs_page/Ansible"
                onClick={() => updateExpanded(false)}
              >
                Ansible
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blogs_page/kubernetes"
                onClick={() => updateExpanded(false)}
              >
                Kubernetes
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blogs_page/Argocd"
                onClick={() => updateExpanded(false)}
              >
                ArgoCD
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blogs_page/AWS"
                onClick={() => updateExpanded(false)}
              >
                AWS
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blogs_page/Python"
                onClick={() => updateExpanded(false)}
              >
                Python
              </NavDropdown.Item>
            </NavDropdown>


            {/* GitHub Button */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Hyysuresh/"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />
                <AiFillStar style={{ fontSize: "1.1em", marginLeft: "5px" }} />
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}