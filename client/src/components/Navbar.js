import React, { useState } from 'react';
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/programs', label: 'Programs' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' }
  ];

  const handleNavLinkClick = (to) => {
    navigate(to);
    setExpanded(false);
  };

  return (
    <Navbar 
      bg="light" 
      expand="lg" 
      expanded={expanded}
      onToggle={setExpanded}
      className="px-5"
    >
      <Navbar.Brand as={Link} to="/" className="me-auto">
        ScaleUp Network
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="align-items-center">
          {navLinks.map((link, index) => (
            <Nav.Link
              as={Link}
              to={link.to}
              key={index}
              className="mx-2"
              onClick={() => handleNavLinkClick(link.to)}
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
              <Dropdown.Item 
                onClick={() => handleNavLinkClick('/user-login')}
              >
                User Login
              </Dropdown.Item>
              <Dropdown.Item 
                onClick={() => handleNavLinkClick('/mentor-login')}
              >
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