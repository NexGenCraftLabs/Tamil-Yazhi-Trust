import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PeopleFill, MortarboardFill, MegaphoneFill, AwardFill, TreeFill, HeartFill } from 'react-bootstrap-icons';
import './ImpactStats.css';

function ImpactStats() {

  const statsData = [
    { icon: <PeopleFill />, number: "200+", label: "Lives Impacted" },
    { icon: <MortarboardFill />, number: "500+", label: "Students Reached" },
    { icon: <MegaphoneFill />, number: "25+", label: "Awareness Programs" },
    { icon: <AwardFill />, number: "15+", label: "Community Activities" },
    { icon: <TreeFill />, number: "300+", label: "Trees Planted" },
    { icon: <HeartFill />, number: "50+", label: "Volunteers" }
  ];

  return (
    <Container>
      <div className="impact-floating-card">
        <Row className="g-4 justify-content-center">
          {statsData.map((item, index) => (
            <Col 
              xs={6} 
              md={4} 
              lg={2} 
              key={index} 
              className={`stat-box ${index !== statsData.length - 1 ? 'stat-divider' : ''}`}
            >
              <div className="stat-icon">{item.icon}</div>
              <div className="stat-number">{item.number}</div>
              <div className="stat-label">{item.label}</div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default ImpactStats;