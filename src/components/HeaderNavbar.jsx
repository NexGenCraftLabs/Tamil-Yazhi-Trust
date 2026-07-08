import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { GeoAltFill, TelephoneFill } from 'react-bootstrap-icons';
import './HeaderNavbar.css';
import headerNav from "../assets/logo.png";

function HeaderNavbar() {
  return (
    <>
      {}
      <div className="top-header py-3">
        <Container fluid="lg">
          <Row className="align-items-center text-center text-md-start g-3">
            
            {}
            <Col md={4} lg={3} className="d-flex align-items-center justify-content-center justify-content-md-start">
              <GeoAltFill className="fs-3 me-2 text-danger" />
              <div style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                <strong>தலைமை அலுவலகம்</strong><br />
                தமிழ் யாழி அறக்கட்டளை, இந்தியன் கேஸ் எதிரில், காமராஜர் நகர், துறையூர் - 621010
              </div>
            </Col>

            {}
            <Col md={4} lg={6} className="text-center">
              <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                <img 
                  src={headerNav} 
                  alt="Tamil Yazhi Trust Logo" 
                  className="me-sm-3 mb-2 mb-sm-0"
                  style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                  onError={(e) => { e.target.src = "https://via.placeholder.com/80" }}
                />
                <div>
                  <h2 className="trust-title-ta m-0 fs-3">தமிழ் யாழி அறக்கட்டளை</h2>
                  <h1 className="trust-title-en m-0 fs-4">TAMIL YAZHI TRUST</h1>
                  <small className="fw-bold text-muted" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                    YAZHI IS HERE TO LEAD THE CHANGE...
                  </small>
                </div>
              </div>
            </Col>

            {}
            <Col md={4} lg={3} className="text-center text-md-end">
              <div className="d-inline-block text-md-start">
                <div className="d-flex align-items-center mb-1 justify-content-center justify-content-md-start">
                  <TelephoneFill className="fs-4 me-2 text-success" />
                  <div className="fw-bold" style={{ fontSize: '0.9rem' }}>
                    தொடர்புக்கு:<br />
                    9994846616 / 9087535322
                  </div>
                </div>
                <div className="mt-2 text-center text-md-start">
                  <span className="reg-badge">REG. NO. : 24/2021</span>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      {}
      <Navbar expand="lg" variant="dark" className="custom-navbar sticky-top shadow-sm">
        <Container>
          <Navbar.Toggle aria-controls="trust-navbar-nav" className="ms-auto my-2" />
          <Navbar.Collapse id="trust-navbar-nav">
            <Nav className="mx-auto text-center w-100 d-flex justify-content-between align-items-center">
              {}
              <Nav.Link as={Link} to="/" className="active-home">🏠 HOME</Nav.Link>
              <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
              
              <Nav.Link as={Link} to="/programs">OUR PROGRAMS</Nav.Link>

              <Nav.Link as={Link} to="/gallery">GALLERY</Nav.Link>
              <Nav.Link as={Link} to="/events">EVENTS</Nav.Link>
              <Nav.Link as={Link} to="/admin">ADMIN</Nav.Link>

              

              <Nav.Link as={Link} to="/donate" className="nav-donate-btn">DONATE</Nav.Link>
              <Nav.Link as={Link} to="/contact">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderNavbar;