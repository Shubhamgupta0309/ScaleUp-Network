import React, { useState } from 'react';
import { Form, Button, Container, Card, Alert, Row, Col } from 'react-bootstrap';

const MentorApplication = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    profession: '',
    expertise: '',
    yearsOfExperience: '',
    linkedinProfile: '',
    motivationStatement: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError('Please fill in all required fields');
      return;
    }

    // Here you would typically add your mentor application logic
    console.log('Mentor Application Attempt:', formData);

    // Reset form and error
    setError('');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '700px' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Mentor Application</Card.Title>
          
          {error && <Alert variant="danger">{error}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter first name" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter last name" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formPhoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control 
                    type="tel" 
                    placeholder="Enter phone number" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formProfession">
                  <Form.Label>Current Profession</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your profession" 
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formExpertise">
              <Form.Label>Areas of Expertise</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Describe your areas of expertise" 
                name="expertise"
                value={formData.expertise}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formYearsOfExperience">
                  <Form.Label>Years of Experience</Form.Label>
                  <Form.Control 
                    type="number" 
                    placeholder="Enter years of experience" 
                    name="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formLinkedinProfile">
                  <Form.Label>LinkedIn Profile</Form.Label>
                  <Form.Control 
                    type="url" 
                    placeholder="Enter LinkedIn profile URL" 
                    name="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formMotivationStatement">
              <Form.Label>Motivation Statement</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4} 
                placeholder="Why do you want to become a mentor?" 
                name="motivationStatement"
                value={formData.motivationStatement}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Submit Application
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MentorApplication;