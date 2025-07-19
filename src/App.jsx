import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Login from "./pages/Login";
import './App.css';

function App() {
    return (
        <BrowserRouter>
          <div style={{ width: '100vw', padding: '2rem' }}>
              <Navbar expand="lg" style={{ backgroundColor: "#FF6347", position: "sticky", top: 0, zIndex: 1000 }} className="w-100">
                <Container>
                  <Navbar.Brand className="fw-bold text-white">Strawberry Farm</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
                      <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
                      <Nav.Link as={Link} to="/products" className="text-white">Products</Nav.Link>
                      <Nav.Link as={Link} to="/Login" className="text-white">Login</Nav.Link>
                      <Nav.Link as={Link} to="/register" className="text-white">Register</Nav.Link>

                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
      
              {/* ตั้งค่า Routes */}
              <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </BrowserRouter>
  
    );
}

export default App;
