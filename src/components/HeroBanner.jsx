import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HeartFill, PeopleFill } from 'react-bootstrap-icons';
import './HeroBanner.css';

function HeroBanner() {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center g-5">
          
          {}
          {}
          <Col lg={6} className="text-center text-lg-start">
            <h1 className="hero-title mb-4">
              Empowering Lives,<br />
              <span>Inspiring Change</span>
            </h1>
            
            {}
            <div className="d-flex justify-content-center justify-content-lg-start mb-4">
              <div style={{ width: '100px', height: '2px', backgroundColor: '#F9D043' }}></div>
            </div>

            <p className="hero-subtitle mb-5 mx-auto mx-lg-0">
              We empower individuals, inspire youth and communities, and create 
              meaningful social change for a better tomorrow.
            </p>

            {}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              {}
              <Button 
                onClick={() => navigate('/donate')}
                className="btn-donate-now d-flex align-items-center gap-2 shadow"
              >
                <HeartFill /> Donate Now
              </Button>
              
              {}
              <Button 
                onClick={() => navigate('/volunteer')}
                className="btn-volunteer-outline d-flex align-items-center gap-2"
              >
                <PeopleFill /> Join the Movement
              </Button>
            </div>
          </Col>

          {}
          {}
          <Col lg={6} className="text-center position-relative">
            <div className="hero-graphics-container d-flex align-items-center justify-content-center">
            
              <img 
                src="/src/assets/hero-group.png" 
                alt="Yazhi Statue & Impact Grids" 
                className="yazhi-statue-placeholder"
                onError={(e) => { e.target.src = "https://via.placeholder.com/500x400/500608/F9D043?text=Yazhi+Statue+%26+Hexagon+Grid" }}
              />
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default HeroBanner;