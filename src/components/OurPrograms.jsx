import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  HeartPulseFill, MortarboardFill, AwardFill, HandThumbsUpFill, 
  PlusCircleFill, ShieldShaded, TreeFill, PeopleFill 
} from 'react-bootstrap-icons';
import './OurPrograms.css';

function OurPrograms() {

  const programsData = [
    {
      icon: <HeartPulseFill />,
      title: "Mental Health & Well-being",
      text: "Promoting mental wellness and emotional well-being through counselling and awareness."
    },
    {
      icon: <MortarboardFill />,
      title: "Education & Skill Development",
      text: "Supporting quality education and skill development for students and youth."
    },
    {
      icon: <AwardFill />,
      title: "Youth Leadership & Empowerment",
      text: "Developing leaders and empowering youth to become change makers."
    },
    {
      icon: <HandThumbsUpFill />,
      title: "Community Welfare",
      text: "Helping underprivileged communities through welfare and support initiatives."
    },
    {
      icon: <PlusCircleFill />,
      title: "Health & Medical Initiatives",
      text: "Organizing medical camps and health awareness programs for all."
    },
    {
      icon: <ShieldShaded />,
      title: "Environment & Sustainability",
      text: "Working towards a greener future through conservation and sustainable practices."
    },
    {
      icon: <TreeFill />,
      title: "Agriculture & Rural Development",
      text: "Supporting farmers and promoting sustainable agriculture and rural development."
    },
    {
      icon: <PeopleFill />,
      title: "Social Awareness & Civic Responsibility",
      text: "Creating awareness on social issues and promoting responsible citizenship."
    }
  ];

  return (
    <div className="programs-section">
      <Container>
        
        <div className="text-center mb-5">
          <h2 className="programs-main-title text-uppercase">Our Programs</h2>
        </div>

        
        <Row className="g-4">
          {programsData.map((prog, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="program-card text-center p-4 h-100 shadow-sm">
                <Card.Body className="p-0">
                  <div className="program-icon-box shadow-sm">
                    {prog.icon}
                  </div>
                  <Card.Title className="program-card-title mb-3">
                    {prog.title}
                  </Card.Title>
                  <Card.Text className="program-card-text">
                    {prog.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default OurPrograms;