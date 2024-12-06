import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/programs', label: 'Programs' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      className="py-3 shadow-sm"
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold text-warning"
        >
          ScaleUp Network
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link, index) => (
              <Nav.Link 
                key={index} 
                as={Link} 
                to={link.to} 
                className="mx-2 nav-link-hover"
              >
                {link.label}
              </Nav.Link>
            ))}
            <Nav.Link 
              as={Link} 
              to="/login" 
              className="btn btn-outline-light ms-3"
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;