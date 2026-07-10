import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import newYazhi from '../assets/logo.png';
import vivekanandaImg from '../assets/vivekananda.jpeg';
import kalamImg from '../assets/kalam.jpeg';
import netajiImg from '../assets/netaji.jpeg';
import prabhakaranImg from '../assets/prabhakaran.jpeg';

import founderImg from '../assets/founder.png'

import './AboutUs.css';

function AboutUs() {
  const leaders = [
    {
      name: "SWAMI VIVEKANANDA",
      role: "Spiritual Leader",
      image: vivekanandaImg,
      quote: '“All power is within you; you can do anything and everything.”',
    },
    {
      name: "DR. A.P.J. ABDUL KALAM",
      role: "Former President of India",
      image: kalamImg,
      quote: '“Dream is not that which you see while sleeping; it is something that does not let you sleep.”',
    },
    {
      name: "NETAJI SUBHAS CHANDRA BOSE",
      role: "Freedom Fighter",
      image: netajiImg,
      quote: '“One individual may die for an idea, but that idea will, after his death, incarnate itself in a thousand lives.”',
    },
    {
      name: "VELUPILLAI PRABHAKARAN",
      role: "Freedom Fighter",
      image: prabhakaranImg,
      quote: '“If one is determined to die for the truth, even a common man can create history.”',
    },
  ];

  return (
    
    <section className="about-section py-5 text-dark" style={{ background: 'linear-gradient(135deg, #fcedc9 0%, #dfb15b 100%)', minHeight: '100vh' }}>
      <Container>
        
        {}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold font-cinzel" style={{ color: '#250407' }}>ABOUT US</h1>
            <p className="lead mt-2 fw-bold" style={{ color: '#3d0c11', opacity: '0.8' }}>EMPOWERING LIVES, INSPIRING CHANGE</p>
            <div className="heading-line mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#250407' }}></div>
          </Col>
        </Row>

        <Row className="align-items-center g-5 mb-5">
          <Col lg={7}>
            <p className="lead fw-bold" style={{ color: '#3d0c11' }}>Empowering Lives, Inspiring Change</p>
            <p className="text-justify fw-semibold" style={{ color: '#1a0204', lineHeight: '1.7' }}>
              Tamil Yazhi Trust is a registered non-governmental organization (NGO), established in 2021 at Thuraiyur, Tamil Nadu, India by Mr. R.D. Harish (M.Sc. Clinical Psychology). Tamil Yazhi Trust is dedicated to transforming lives through initiatives that promote mental and physical well-being, quality education, environmental conservation, agriculture, youth empowerment, community development, and social awareness. We believe that meaningful change begins with empowered individuals and united communities.
            </p>
            <p className="text-justify fw-semibold" style={{ color: '#1a0204', lineHeight: '1.7' }}>
              At Tamil Yazhi Trust, we recognize that every individual possesses unique talents and untapped potential. Our role is to identify, nurture, and provide opportunities that enable people—especially youth—to become confident leaders, responsible citizens, and active contributors to society.
            </p>
            <p className="text-justify fw-semibold" style={{ color: '#1a0204', lineHeight: '1.7' }}>
              Beyond providing support, we strive to inspire change by encouraging leadership, innovation, and community participation. Through counselling, awareness campaigns, educational initiatives, and sustainable development programs, we work towards creating lasting social impact and improving the quality of life for individuals and communities.
            </p>
          </Col>
          
          <Col lg={5} className="text-center">
            <img 
              src={newYazhi} 
              alt="Tamil Yazhi" 
              className="img-fluid rounded shadow-lg"
              style={{ border: '4px solid #250407', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
            />
          </Col>
        </Row>

        {}
        <Row className="g-4 mb-5 text-center">
          <Col md={6}>
            <Card className="h-100 p-4 border-0 shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(5px)' }}>
              <Card.Body>
                <div className="fs-1 mb-2"></div>
                <Card.Title className="fw-bold font-cinzel" style={{ color: '#250407' }}>OUR VISION</Card.Title>
                <Card.Text className="fw-semibold" style={{ color: '#3d0c11' }}>
                  To build a progressive and compassionate society where every individual has access to quality education, mental well-being, and opportunities to thrive in harmony with nature.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 p-4 border-0 shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(5px)' }}>
              <Card.Body>
                <div className="fs-1 mb-2"></div>
                <Card.Title className="fw-bold font-cinzel" style={{ color: '#250407' }}>OUR MISSION</Card.Title>
                <Card.Text className="fw-semibold" style={{ color: '#3d0c11' }}>
                  To empower communities through sustainable development, psychological support, inclusive education, environmental conservation, and nurturing leadership among youth.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {}
        <div className="mb-5 py-5 px-4 rounded shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          <h2 className="text-center font-cinzel mb-5 fw-bold" style={{ color: '#250407' }}>OUR VALUES</h2>
          <Row className="justify-content-center g-4 text-center">
            <Col md={4} lg={2.4} className="px-3">
              <div className="fs-2 mb-2"></div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1rem', color: '#250407' }}>INTEGRITY</h5>
              <p className="small fw-semibold" style={{ color: '#3d0c11' }}>We uphold the highest standards of honesty and ethical conduct in all our actions.</p>
            </Col>
            <Col md={4} lg={2.4} className="px-3">
              <div className="fs-2 mb-2"></div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1rem', color: '#250407' }}>EQUITY</h5>
              <p className="small fw-semibold" style={{ color: '#3d0c11' }}>We believe in equal opportunities and fair treatment for all individuals.</p>
            </Col>
            <Col md={4} lg={2.4} className="px-3">
              <div className="fs-2 mb-2"></div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1rem', color: '#250407' }}>TRANSPARENCY</h5>
              <p className="small fw-semibold" style={{ color: '#3d0c11' }}>We are committed to openness and accountability in everything we do.</p>
            </Col>
            <Col md={4} lg={2.4} className="px-3">
              <div className="fs-2 mb-2"></div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1rem', color: '#250407' }}>EMPOWERMENT</h5>
              <p className="small fw-semibold" style={{ color: '#3d0c11' }}>We empower individuals and communities to unlock their true potential and lead change.</p>
            </Col>
            <Col md={4} lg={2.4} className="px-3">
              <div className="fs-2 mb-2"></div>
              <h5 className="fw-bold mb-2" style={{ fontSize: '1rem', color: '#250407' }}>SOCIAL RESPONSIBILITY</h5>
              <p className="small fw-semibold" style={{ color: '#3d0c11' }}>We are dedicated to serving society and promoting responsible citizenship.</p>
            </Col>
          </Row>
        </div>

        {}
        <div className="leaders-section py-4 mb-5" style={{ backgroundColor: '#1a0204', borderRadius: '15px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}>
          <h2 className="text-center mb-5 font-cinzel" style={{ color: '#dfb15b', letterSpacing: '2px' }}>
             LEADERS WHO INSPIRE US
          </h2>

          <Row className="g-4">
            {leaders.map((leader, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="h-100 text-center text-white border-0" style={{ backgroundColor: '#250407', border: '1px solid #dfb15b' }}>
                  <div className="position-relative overflow-hidden" style={{ height: '280px' }}>
                    <Card.Img 
                      variant="top" 
                      src={leader.image} 
                      alt={leader.name}
                      style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(180deg, #32080c, #1f0305)', borderTop: '2px solid #dfb15b' }}>
                    <div>
                      <h6 className="font-cinzel fw-bold m-0" style={{ color: '#dfb15b', fontSize: '0.9rem' }}>{leader.name}</h6>
                      
                      {}
                      <small className="d-block mb-3 fw-medium" style={{ color: '#f7e7c4', fontSize: '0.78rem', opacity: '0.85', letterSpacing: '0.5px' }}>
                        {leader.role}
                      </small>
                    </div>
                    
                    <div className="p-2 rounded mt-2" style={{ backgroundColor: '#1a0204', border: '1px dashed #dfb15b', minHeight: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <p className="m-0 card-text text-warning italic-quote" style={{ fontSize: '0.8rem', fontStyle: 'italic', lineHeight: '1.4' }}>
                        {leader.quote}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {}
        <Row className="justify-content-center align-items-center g-4 mt-4 p-4 rounded shadow" style={{ border: '2px solid #250407', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <Col md={4} className="text-center">
            <div className="position-relative d-inline-block">
              <img 
                src={founderImg}
                alt="Founder" 
                className="rounded-circle img-fluid shadow"
                style={{ width: '200px', height: '200px', objectFit: 'cover', border: '4px solid #250407' }}
              />
            </div>
          </Col>
          <Col md={8}>
            <h3 className="font-cinzel fw-bold mb-1" style={{ color: '#250407' }}>FOUNDER'S MESSAGE</h3>
            <div className="mb-3" style={{ width: '60px', height: '2px', backgroundColor: '#250407' }}></div>
            <p className="fst-italic fw-semibold" style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#3d0c11' }}>
              "Tamil Yazhi Trust was founded with a vision to empower individuals, inspire youth, and create meaningful social change. We believe that every person has unique potential, and through guidance, education, mental health awareness, and community service, we can build a stronger and more progressive society. Together, let us create opportunities, transform lives, and build a better tomorrow."
            </p>
            <h5 className="fw-bold m-0 mt-3" style={{ color: '#250407' }}>R.D. Harish, <span style={{ fontSize: '0.9rem', opacity: '0.8' }}>M.Sc. (Clinical Psychology)</span></h5>
            <small className="fw-bold" style={{ color: '#3d0c11' }}>Founder & Managing Trustee, Tamil Yazhi Trust</small>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default AboutUs;