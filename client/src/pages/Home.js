import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const keyFeatures = [
    {
      icon: "👥",
      title: "Expert Mentorship",
      description: "Personalized guidance from industry leaders",
      color: "primary"
    },
    {
      icon: "🌐",
      title: "Global Connections",
      description: "Network with professionals across industries",
      color: "success"
    },
    {
      icon: "🎯",
      title: "Career Acceleration",
      description: "Tailored strategies for professional growth",
      color: "warning"
    }
  ];

  const advantageList = [
    {
      icon: "📚",
      title: "Comprehensive Learning",
      description: "Access curated resources and interactive workshops"
    },
    {
      icon: "📊",
      title: "Performance Tracking",
      description: "Monitor your progress with advanced analytics"
    },
    {
      icon: "🏆",
      title: "Certification Support",
      description: "Guidance for professional certifications and skill validation"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero bg-dark text-white text-center py-5">
        <Container>
          <div className="launch-effect">
            <h1 className="display-4 fw-bold mb-3 text-warning">
              ScaleUp Network
            </h1>
            <p className="lead mb-4">
              Transform Your Professional Potential
            </p>
            <Link to="/mentor-selection">
              <Button 
                variant="outline-light" 
                size="lg" 
                className="px-5 py-3 fw-bold shadow-lg"
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </Container>
      </div>

      {/* Key Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold">Professional Development Reimagined</h2>
        <Row className="g-4">
          {keyFeatures.map((feature, index) => (
            <Col key={index} md={4}>
              <Card 
                className={`text-center p-4 border-0 shadow-sm feature-card border-bottom border-${feature.color}`}
              >
                <div className="display-4 mb-3">{feature.icon}</div>
                <Card.Title className="fw-bold mb-3">{feature.title}</Card.Title>
                <Card.Text className="text-muted">
                  {feature.description}
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Advantages Section */}
      <Container fluid className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Your Path to Success</h2>
          <Row>
            {advantageList.map((advantage, index) => (
              <Col key={index} md={4} className="text-center mb-4">
                <div className="advantage-card p-4">
                  <div className="display-4 mb-3 text-primary">{advantage.icon}</div>
                  <h5 className="fw-bold mb-3">{advantage.title}</h5>
                  <p className="text-muted">{advantage.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Home;