import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

import Home from "./pages/Home";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Basket from "./pages/Basket";
import OrderStatus from "./pages/OrderStatus";
import './App.css';

function App() {
    return (
        <BrowserRouter>
          <div style={{ width: '100vw' }}>
              <Navbar expand="lg" style={{ backgroundColor: "#FF6347", position: "sticky", top: 0, zIndex: 1000 }} className="w-100">
                <Container>
                  <Navbar.Brand className="fw-bold text-white">Strawberry Farm</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
                      <Nav.Link as={Link} to="/products" className="text-white">Products</Nav.Link>
                      <Nav.Link as={Link} to="/cart" className="text-white">Basket</Nav.Link>
                      <Nav.Link as={Link} to="/order-status" className="text-white">Order Status</Nav.Link>
                      <Nav.Link as={Link} to="/Login" className="text-white">Login</Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              
              {/* เนื้อหาหลักมี padding แยกต่างหาก */}
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/cart" element={<Basket />} />
                        <Route path="/order-status" element={<OrderStatus />} />
                    </Routes>
            </div>
        </BrowserRouter>
       );
}

export default App;