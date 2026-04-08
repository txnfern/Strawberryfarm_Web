import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
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
      setError('❌ เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
    }
  };

  return (
    <Container fluid className="wrapper">
      <div className="form-header">
        <div className="title-login">Login</div>
      </div>

      <Form onSubmit={handleLoginSubmit}>
        <Form.Group controlId="log-email" className="input-box">
          <Form.Control
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="log-email" className="label">Email</label>
        </Form.Group>

        <Form.Group controlId="log-password" className="input-box">
          <Form.Control
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="log-password" className="label">Password</label>
        </Form.Group>

        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}

        <Button variant="dark" className="btn-submit w-100 mb-3" type="submit">
          Sign In
        </Button>

        <div className="switch-form">
          <span>
            Don't have an account? <a href="/register">Register</a>
          </span>
        </div>
      </Form>
    </Container>
  );
};

export default Login;