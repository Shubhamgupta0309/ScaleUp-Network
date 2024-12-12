import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  MessageCircle, 
  LogIn, 
  UserPlus,
  Info,
  Video,
  FileText,
  Star,
  CreditCard,
  Layout,
  Layers,
  User
} from 'lucide-react';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { 
      to: '/', 
      label: 'Home', 
      icon: <Home size={18} className="me-2" />
    },
    { 
      to: '/mentors', 
      label: 'Find Mentors', 
      icon: <Users size={18} className="me-2" />,
      dropdown: [
        { to: '/mentors/selection', label: 'Mentor Selection' },
        { to: '/mentors/booking', label: 'Book a Mentor' }
      ]
    },
    { 
      to: '/programs', 
      label: 'Programs', 
      icon: <Layers size={18} className="me-2" />,
      dropdown: [
        { to: '/programs/list', label: 'Program List' },
        { to: '/programs/groups', label: 'Communities' }
      ]
    },
    { 
      to: '/pricing', 
      label: 'Pricing', 
      icon: <CreditCard size={18} className="me-2" />,
      dropdown: [
        { to: '/pricing/plans', label: 'Plans & Pricing' },
        { to: '/pricing/payment', label: 'Payment' }
      ]
    },
    { 
      to: '/events', 
      label: 'Events', 
      icon: <Calendar size={18} className="me-2" />
    },
    { 
      to: '/community', 
      label: 'Community', 
      icon: <MessageCircle size={18} className="me-2" />
    },
    { 
      to: '/dashboard', 
      label: 'Dashboard', 
      icon: <Layout size={18} className="me-2" />
    },
    { 
      to: '/videos', 
      label: 'Videos', 
      icon: <Video size={18} className="me-2" />
    },
    { 
      to: '/blog', 
      label: 'Blog', 
      icon: <FileText size={18} className="me-2" />
    }
  ];

  const renderNavLinks = () => {
    return navLinks.map((link, index) => {
      if (link.dropdown) {
        return (
          <NavDropdown 
            key={index} 
            title={
              <span>
                {link.icon}
                {link.label}
              </span>
            } 
            id={`nav-dropdown-${link.label.toLowerCase().replace(' ', '-')}`}
          >
            {link.dropdown.map((subLink, subIndex) => (
              <NavDropdown.Item 
                key={subIndex} 
                onClick={() => navigate(subLink.to)}
              >
                {subLink.label}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        );
      }
      return (
        <Nav.Link 
          key={index} 
          as={Link} 
          to={link.to}
          className="d-flex align-items-center"
        >
          {link.icon}
          {link.label}
        </Nav.Link>
      );
    });
  };

  return (
    <Navbar 
      expand="lg" 
      bg="white" 
      variant="light" 
      expanded={expanded}
      onToggle={setExpanded}
      className="shadow-sm py-3"
    >
      <Container fluid className="px-4">
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold text-primary d-flex align-items-center"
        >
          ScaleUp Network
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto align-items-center">
            {renderNavLinks()}
          </Nav>
          
          <Nav className="align-items-center">
            <NavDropdown 
              title={
                <span>
                  <LogIn size={18} className="me-2" />
                  Login
                </span>
              } 
              id="login-dropdown"
              align="end"
            >
              <NavDropdown.Item onClick={() => navigate('/login/startup')}>
                Startup Login
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/login/mentor')}>
                Mentor Login
              </NavDropdown.Item>
            </NavDropdown>

            <Button 
              variant="primary" 
              className="ms-3 d-flex align-items-center"
              onClick={() => navigate('/signup')}
            >
              <UserPlus size={18} className="me-2" />
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;