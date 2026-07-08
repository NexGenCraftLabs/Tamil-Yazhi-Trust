import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';


import mentalHealthImg from '../assets/mental-health.jpg';
import educationImg from '../assets/education.jpg';
import youthImg from '../assets/youth-leadership.png';
import communityImg from '../assets/community-welfare.jpg';
import healthImg from '../assets/healthcare.jpg';
import environmentImg from '../assets/environment.png';
import agricultureImg from '../assets/agriculture.png';
import socialAwarenessImg from '../assets/social-awareness.jpg';

function Programs() {
  
  const programsData = [
    { 
      title: "1. Mental Health & Well-being", 
      desc: "Providing mental health awareness, counselling, emotional well-being programs, and psychological support for individuals, students, families, and communities.", 
      progress: 85,
      image: mentalHealthImg
    },
    { 
      title: "2. Education & Skill Development", 
      desc: "Supporting education, career guidance, life skills, leadership training, and personal development for students and youth.", 
      progress: 90,
      image: educationImg
    },
    { 
      title: "3. Youth Leadership & Empowerment", 
      desc: "Developing responsible leaders through leadership training, volunteerism, personality development, and community engagement.", 
      progress: 75,
      image: youthImg
    },
    { 
      title: "4. Community Welfare", 
      desc: "Supporting underprivileged individuals and families through welfare initiatives, food assistance, relief programs, and community outreach.", 
      progress: 80,
      image: communityImg
    },
    { 
      title: "5. Health & Medical Initiatives", 
      desc: "Conducting medical camps, health awareness programs, blood donation drives, preventive healthcare, and wellness activities.", 
      progress: 70,
      image: healthImg
    },
    { 
      title: "6. Environment & Sustainability", 
      desc: "Promoting tree plantation, environmental conservation, waste management awareness, clean-up drives, and sustainable development.", 
      progress: 95,
      image: environmentImg
    },
    { 
      title: "7. Agriculture & Rural Development", 
      desc: "Creating awareness on sustainable agriculture, supporting farmers, and promoting rural development initiatives.", 
      progress: 65,
      image: agricultureImg
    },
    { 
      title: "8. Social Awareness & Civic Responsibility", 
      desc: "Organizing awareness campaigns on civic responsibility, constitutional values, road safety, digital literacy, social issues, and responsible citizenship.", 
      progress: 85,
      image: socialAwarenessImg
    }
  ];

  return (
    <section className="programs-section py-5 text-dark" style={{ background: 'linear-gradient(135deg, #fcedc9 0%, #dfb15b 100%)', minHeight: '100vh' }}>
      <Container>
        
        
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold font-cinzel" style={{ color: '#250407', fontFamily: "'Cinzel', serif, Georgia" }}>OUR CORE PROGRAMS</h1>
          <p className="lead mt-2 fw-semibold" style={{ color: '#3d0c11', opacity: '0.8' }}>Empowering people to become the change that shapes a better tomorrow.</p>
          <div className="heading-line mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#250407' }}></div>
        </div>

        
        <Row className="g-4">
          {programsData.map((prog, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 border-0 shadow" style={{ backgroundColor: '#250407', border: '1px solid #dfb15b', borderRadius: '12px', overflow: 'hidden' }}>
                
                
                <div className="position-relative overflow-hidden" style={{ height: '220px', borderBottom: '2px solid #dfb15b' }}>
                  <Card.Img 
                    variant="top" 
                    src={prog.image} 
                    alt={prog.title}
                    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                  />
                </div>

                
                <Card.Body className="p-4 d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(180deg, #32080c, #1f0305)' }}>
                  <div>
                    <Card.Title className="fw-bold mb-3 fs-5 font-cinzel" style={{ color: '#dfb15b', fontFamily: "'Cinzel', serif, Georgia" }}>
                      {prog.title}
                    </Card.Title>
                    
                    <Card.Text style={{ textAlign: 'justify', fontSize: '0.88rem', color: '#f7e7c4', opacity: '0.95', lineHeight: '1.6' }}>
                      {prog.desc}
                    </Card.Text>
                  </div>

                  
                  <div className="mt-4">
                    <div className="d-flex justify-content-between mb-1">
                      <small className="font-monospace fw-bold" style={{ color: '#f7e7c4', opacity: '0.7', fontSize: '0.75rem' }}>
                        Project Reach / Progress
                      </small>
                      <small className="fw-bold" style={{ color: '#dfb15b' }}>{prog.progress}%</small>
                    </div>
                    <ProgressBar 
                      now={prog.progress} 
                      style={{ height: '8px', backgroundColor: '#1a0204', border: '1px solid #dfb15b' }} 
                      variant="warning"
                    />
                  </div>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Programs;