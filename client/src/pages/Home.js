import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Navbar, Nav, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Target, Star } from 'lucide-react';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleTestimonialSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const keyFeatures = [
    {
      icon: <Users className="text-primary" size={48} />,
      title: "Expert Mentorship",
      description: "Personalized guidance from industry leaders",
      color: "primary"
    },
    {
      icon: <Target className="text-success" size={48} />,
      title: "Global Connections",
      description: "Network with professionals across industries",
      color: "success"
    },
    {
      icon: <Star className="text-warning" size={48} />,
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Product Manager",
      company: "TechInnovate",
      quote: "ScaleUp Network transformed my career trajectory. The personalized mentorship helped me land my dream role.",
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      company: "GlobalSoft Solutions",
      quote: "The platform's networking opportunities and learning resources are unparalleled. Highly recommend!",
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director",
      company: "CreativeBrands Inc.",
      quote: "ScaleUp Network's strategic guidance has been crucial in my professional development and leadership growth.",
      avatar: "/api/placeholder/80/80"
    }
  ];

  const platformBenefits = [
    {
      title: "AI-Powered Matching",
      description: "Advanced algorithms connect you with the perfect mentor tailored to your career goals."
    },
    {
      title: "Comprehensive Learning Paths",
      description: "Curated resources and interactive workshops across multiple disciplines."
    },
    {
      title: "Community & Support",
      description: "Join a vibrant network of ambitious professionals and industry experts."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero bg-dark text-white text-center py-5">
        <Container>
          <div className="launch-effect">
            <h1 className="display-4 fw-bold mb-3 text-warning">
              ScaleUp Network
            </h1>
            <p className="lead mb-4 px-md-5">
              Unlock Your Professional Potential Through Personalized Mentorship and Strategic Networking
            </p>
            <Link to="/mentor-selection">
              <Button 
                variant="outline-light" 
                size="lg" 
                className="px-5 py-3 fw-bold shadow-lg d-flex align-items-center justify-content-center mx-auto"
              >
                Start Your Journey <ChevronRight className="ms-2" />
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
              <Card className={`text-center p-4 border-0 shadow-sm feature-card border-bottom border-${feature.color}`}>
                <div className="mb-3">{feature.icon}</div>
                <Card.Title className="fw-bold mb-3">{feature.title}</Card.Title>
                <Card.Text className="text-muted">
                  {feature.description}
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Testimonials Carousel */}
      <Container fluid className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">What Our Members Say</h2>
          <Carousel 
            activeIndex={index} 
            onSelect={handleTestimonialSelect}
            controls={false}
            interval={5000}
            className="text-center"
          >
            {testimonials.map((testimonial, idx) => (
              <Carousel.Item key={idx}>
                <div className="px-md-5">
                  <p className="lead mb-4">"{testimonial.quote}"</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="rounded-circle me-3" 
                    />
                    <div>
                      <h5 className="mb-0 fw-bold">{testimonial.name}</h5>
                      <p className="text-muted">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </Container>

      {/* Platform Benefits */}
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold">Why Choose ScaleUp Network</h2>
        <Row>
          {platformBenefits.map((benefit, index) => (
            <Col key={index} md={4} className="text-center mb-4">
              <div className="p-4">
                <div className="display-4 mb-3 text-primary">
                  {index === 0 ? "🤖" : index === 1 ? "📚" : "🤝"}
                </div>
                <h5 className="fw-bold mb-3">{benefit.title}</h5>
                <p className="text-muted">{benefit.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;