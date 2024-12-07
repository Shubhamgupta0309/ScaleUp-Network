import React, { useState } from 'react';
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
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
    <Navbar bg="light" expand="lg" className="px-5">
      <Navbar.Brand href="/" className="me-auto">ScaleUp Network</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="align-items-center">
          {navLinks.map((link, index) => (
            <Nav.Link 
              as={Link} 
              to={link.to} 
              key={index} 
              className="mx-2"
            >
              {link.label}
            </Nav.Link>
          ))}
          
          <Dropdown>
            <Dropdown.Toggle 
              variant="outline-primary" 
              id="login-dropdown" 
              className="mx-2"
            >
              Login
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/user-login">
                User Login
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/mentor-login">
                Mentor Login
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;