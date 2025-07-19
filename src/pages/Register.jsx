import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap'; 

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setError('');
      } else {
        setMessage('');
        setError(data.error);
      }
    } catch (err) {
      setError('❌ เกิดข้อผิดพลาดในการลงทะเบียน');
    }
  };

  return (
    <Container fluid className="wrapper">
      <div className="form-header">
        <div className="title-register">Register</div>
      </div>

      <Form onSubmit={handleRegisterSubmit}>
        <Form.Group controlId="reg-name" className="input-box">
          <Form.Control
            type="text"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="reg-name" className="label">Username</label>
        </Form.Group>

        <Form.Group controlId="reg-email" className="input-box">
          <Form.Control
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="reg-email" className="label">Email</label>
        </Form.Group>

        <Form.Group controlId="reg-password" className="input-box">
          <Form.Control
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="reg-password" className="label">Password</label>
        </Form.Group>

        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}

        <Button variant="dark" className="btn-submit w-100 mb-3" type="submit">
          Sign Up
        </Button>

        <div className="switch-form">
          <span>
            Already have an account? <a href="/login">Login</a>
          </span>
        </div>
      </Form>
    </Container>
  );
};

export default Register;