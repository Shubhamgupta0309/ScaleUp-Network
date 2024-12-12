import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About Us' },
      { to: '/programs', label: 'Programs' },
      { to: '/contact', label: 'Contact' }
    ],
    connect: [
      { href: '#facebook', label: 'Facebook' },
      { href: '#twitter', label: 'Twitter' },
      { href: '#linkedin', label: 'LinkedIn' }
    ],
    legal: [
      { to: '/privacy', label: 'Privacy Policy' },
      { to: '/terms', label: 'Terms of Service' }
    ]
  };

  const renderLinkGroup = (links, isInternal = true) => (
    <Nav className="flex-column">
      {links.map((link, index) => (
        isInternal ? (
          <Nav.Link
            key={index}
            as={Link}
            to={link.to}
            className="text-light p-0 mb-2 text-decoration-none"
          >
            {link.label}
          </Nav.Link>
        ) : (
          <Nav.Link
            key={index}
            href={link.href}
            className="text-light p-0 mb-2 text-decoration-none"
          >
            {link.label}
          </Nav.Link>
        )
      ))}
    </Nav>
  );

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      className="py-5"
    >
      <Container>
        <div className="row w-100 g-4">
          <div className="col-12 col-md-4">
            <Navbar.Brand as={Link} to="/" className="text-primary mb-3">
              ScaleUp Network
            </Navbar.Brand>
            <p className="text-primary">
              Empowering professionals through personalized mentorship and strategic career development.
            </p>
          </div>
          <div className="col-12 col-md-3">
            <h5 className="text-light mb-3">Quick Links</h5>
            {renderLinkGroup(footerLinks.quickLinks)}
          </div>
          <div className="col-12 col-md-3">
            <h5 className="text-light mb-3">Connect With Us</h5>
            {renderLinkGroup(footerLinks.connect, false)}
          </div>
          <div className="col-12 col-md-2">
            <h5 className="text-light mb-3">Legal</h5>
            {renderLinkGroup(footerLinks.legal)}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <hr className="border-secondary my-3" />
            <p className="text-light mb-0">
              © {currentYear} ScaleUp Network. All Rights Reserved.
            </p>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;