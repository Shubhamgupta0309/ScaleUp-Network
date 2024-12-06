import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <h4 className="text-warning mb-3">ScaleUp Network</h4>
            <p className="text-warning">
              Empowering professionals through personalized mentorship and strategic career development.
            </p>
          </Col>
          <Col md={3}>
            <h5 className="mb-3">Quick Links</h5>
            <Nav className="flex-column">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/programs', label: 'Programs' },
                { to: '/contact', label: 'Contact' }
              ].map((link, index) => (
                <Nav.Link 
                  key={index} 
                  as={Link} 
                  to={link.to} 
                  className="text-white p-0 mb-2"
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
          <Col md={3}>
            <h5 className="mb-3">Connect With Us</h5>
            <Nav className="flex-column">
              {[
                { href: '#facebook', label: 'Facebook' },
                { href: '#twitter', label: 'Twitter' },
                { href: '#linkedin', label: 'LinkedIn' }
              ].map((social, index) => (
                <Nav.Link 
                  key={index} 
                  href={social.href} 
                  className="text-white p-0 mb-2"
                >
                  {social.label}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
          <Col md={2}>
            <h5 className="mb-3">Legal</h5>
            <Nav className="flex-column">
              {[
                { to: '/privacy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms of Service' }
              ].map((link, index) => (
                <Nav.Link 
                  key={index} 
                  as={Link} 
                  to={link.to} 
                  className="text-white p-0 mb-2"
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
        </Row>
        <hr className="border-secondary my-4" />
        <div className="text-center text-white">
          © {currentYear} ScaleUp Network. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;