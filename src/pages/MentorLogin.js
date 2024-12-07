import React, { useState } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';

const MentorLogin = () => {
  const [mentorId, setMentorId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!mentorId || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Here you would typically add your login logic
    // For now, we'll just log the credentials
    console.log('Mentor Login Attempt:', { mentorId, password });

    // Reset form and error
    setError('');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Mentor Login</Card.Title>
          
          {error && <Alert variant="danger">{error}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formMentorId">
              <Form.Label>Mentor ID</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Mentor ID" 
                value={mentorId}
                onChange={(e) => setMentorId(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                Your unique Mentor Identification Number
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>

            <div className="text-center mt-3">
              <a href="/mentor-forgot-password" className="text-decoration-none">Forgot Password?</a>
            </div>

            <div className="text-center mt-3">
              Need to become a mentor? <a href="/mentor-application" className="text-decoration-none">Apply Here</a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MentorLogin;