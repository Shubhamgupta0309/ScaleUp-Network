import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      bio: "Serial entrepreneur with 15+ years in startup ecosystem",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      bio: "AI and machine learning expert with background in mentor matching technologies",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Thompson",
      role: "Head of Mentorship",
      bio: "Former startup founder and angel investor",
      image: "/api/placeholder/300/300"
    }
  ];

  const milestones = [
    {
      year: 2021,
      event: "ScaleUp Network Founded",
      description: "Launched with a mission to democratize startup mentorship"
    },
    {
      year: 2022,
      event: "AI Matching Algorithm Developed",
      description: "Implemented advanced AI to connect startups with ideal mentors"
    },
    {
      year: 2023,
      event: "Global Expansion",
      description: "Expanded mentorship network across 15 countries"
    }
  ];

  return (
    <div className="about-page">
      <Container className="py-5">
        <h1 className="text-center mb-5 fw-bold">About ScaleUp Network</h1>
        
        <Row className="mb-5">
          <Col md={6}>
            <h2 className="mb-4">Our Mission</h2>
            <p className="lead">
              We believe every startup deserves world-class mentorship. 
              Our platform connects ambitious entrepreneurs with experienced 
              mentors using cutting-edge AI technology to fuel innovation 
              and accelerate growth.
            </p>
          </Col>
          <Col md={6}>
            <img 
              src="/api/placeholder/600/400" 
              alt="ScaleUp Network Mission" 
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <h2 className="text-center mb-5">Our Leadership Team</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="text-center border-0 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={member.image} 
                  className="rounded-circle mx-auto mt-3"
                  style={{width: '200px', height: '200px', objectFit: 'cover'}}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                  <Card.Text>{member.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="text-center my-5">Our Journey</h2>
        <Row>
          {milestones.map((milestone, index) => (
            <Col key={index} md={4}>
              <div className="text-center p-4 bg-light rounded">
                <h3 className="text-primary">{milestone.year}</h3>
                <h4 className="mb-3">{milestone.event}</h4>
                <p>{milestone.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default About;