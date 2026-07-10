import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';


const PhoneIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="me-2 text-warning">
    <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="me-2 text-warning">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="me-2 text-warning">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="me-2">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.142 1.233 8.38 3.473 2.238 2.24 3.466 5.22 3.461 8.384-.01 6.537-5.335 11.861-11.865 11.861-2.015-.001-3.999-.513-5.753-1.488L0 24zm6.49-4.22c1.54.916 3.16 1.458 4.802 1.459 5.26 0 9.54-4.276 9.544-9.539.002-2.55-1.01-4.947-2.812-6.75A9.458 9.458 0 0011.86 2.32c-5.265 0-9.55 4.275-9.554 9.542-.001 1.745.485 3.398 1.411 4.787l-.995 3.633 3.73-.977zm11.382-6.223c-.302-.151-1.787-.881-2.062-.982-.275-.1-.476-.151-.676.151-.2.302-.776.982-.95 1.183-.176.201-.352.226-.654.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.086-.176-.302-.019-.465.132-.615.136-.135.302-.352.453-.528.151-.176.201-.302.302-.503.1-.201.05-.377-.025-.528-.075-.151-.676-1.631-.926-2.233-.243-.585-.49-.505-.676-.515-.175-.01-.377-.01-.577-.01-.2 0-.528.075-.804.377-.276.302-1.055 1.03-1.055 2.513s1.08 2.916 1.23 3.118c.15.201 2.127 3.248 5.155 4.557.72.311 1.282.498 1.721.638.723.23 1.381.198 1.9.121.579-.086 1.787-.73 2.038-1.434.25-.704.25-1.307.176-1.433-.075-.127-.276-.202-.577-.353z"/>
  </svg>
);

const FacebookFill = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramFill = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YoutubeFill = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const XFill = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const newInquiry = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleDateString()
    };
    
    const existingMessages = JSON.parse(localStorage.getItem('trust_messages') || '[]');
    localStorage.setItem('trust_messages', JSON.stringify([newInquiry, ...existingMessages]));

    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  
  const handleWhatsappChat = () => {
    const number = " 9994846616"; 
    const text = encodeURIComponent("வணக்கம் தமிழ் யாழி அறக்கட்டளை, நான் தங்களை தொடர்பு கொள்ள விரும்புகிறேன். (Hello Tamil Yazhi Trust, I would like to connect with you.)");
    const whatsappUrl = `https://wa.me/${number}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact-section py-5 text-dark" style={{ background: 'linear-gradient(135deg, #fcedc9 0%, #dfb15b 100%)', minHeight: '100vh' }}>
      
      
      {showNotification && (
        <div className="position-fixed top-0 start-50 translate-middle-x mt-4 p-3 rounded shadow-lg text-white" 
             style={{ 
               backgroundColor: '#2e7d32', 
               border: '2px solid #dfb15b', 
               zIndex: 2000, 
               minWidth: '320px' 
             }}>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-semibold">📢 உங்களது செய்தி வெற்றிகரமாக அனுப்பப்பட்டது! (Message Sent Successfully!)</span>
            <Button variant="link" className="text-white p-0 ms-2 fw-bold" onClick={() => setShowNotification(false)}>✕</Button>
          </div>
        </div>
      )}

      <Container>
        
        {}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold font-cinzel text-uppercase" style={{ color: '#250407', fontFamily: "'Cinzel', serif, Georgia" }}>CONTACT US</h1>
          <p className="lead mt-2 fw-semibold" style={{ color: '#3d0c11', opacity: '0.8' }}>தொடர்பு கொள்ள | Get in Touch with Us</p>
          <div className="heading-line mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#250407' }}></div>
        </div>

        <Row className="g-5">
          
          {}
          <Col lg={5}>
            <Card className="border-0 shadow-lg text-white h-100" style={{ backgroundColor: '#250407', border: '1px solid #dfb15b', borderRadius: '15px' }}>
              <Card.Body className="p-4 d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(180deg, #32080c, #1f0305)' }}>
                
                <div>
                  <h3 className="font-cinzel fw-bold mb-4" style={{ color: '#dfb15b' }}>Reach Us Directly</h3>
                  <p className="small mb-4 text-white-50">
                    எங்களை நேரடியாகவோ, வாட்ஸ்அப் மூலமாகவோ அல்லது சமூக ஊடகங்களின் வாயிலாகவோ தொடர்பு கொள்ள நீங்கள் வரவேற்கப்படுகிறீர்கள்.
                  </p>

                  {}
                  <div className="d-flex align-items-start mb-4">
                    <PhoneIcon />
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: '#dfb15b' }}>PHONE & WHATSAPP</h6>
                      <span className="small d-block text-white">+91 99948 46616</span>
                      <span className="small d-block text-white">+91 90875 35322</span>
                    </div>
                  </div>

                  {}
                  <div className="d-flex align-items-start mb-4">
                    <EmailIcon />
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: '#dfb15b' }}>EMAIL ADDRESS</h6>
                      <span className="small text-white">tamilyazhitrust@gmail.com</span>
                    </div>
                  </div>

                  {}
                  <div className="d-flex align-items-start mb-4">
                    <LocationIcon />
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: '#dfb15b' }}>OFFICE ADDRESS</h6>
                      <span className="small text-white-50" style={{ lineHeight: '1.6' }}>
                        Kamarajar Nagar, <br />
                        Opposite Indian Gas Office, <br />
                        Near Megana Skills, <br />
                        Thuraiyur - 621010, Tamil Nadu.
                      </span>
                    </div>
                  </div>
                </div>

                {}
                <div className="pt-3 my-3" style={{ borderTop: '1px dashed rgba(223, 177, 91, 0.3)' }}>
                  <Button 
                    onClick={handleWhatsappChat}
                    className="w-100 fw-bold py-2.5 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: '#25d366', border: 'none', color: '#fff', borderRadius: '30px' }}
                    onMouseEnter={(e) => e.target.style.filter = 'brightness(1.1)'}
                    onMouseLeave={(e) => e.target.style.filter = 'none'}
                  >
                    <WhatsappIcon /> WHATSAPP DIRECT CHAT
                  </Button>
                </div>

                {}
                <div className="pt-4 mt-2" style={{ borderTop: '1px dashed rgba(223, 177, 91, 0.3)' }}>
                  <h6 className="fw-bold mb-3 small tracking-wider" style={{ color: '#dfb15b' }}>FOLLOW OUR JOURNEY</h6>
                  <div className="d-flex gap-3">
                    
                    {}
                    <a 
                      href="https://www.facebook.com/share/191kfyKqAy/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white bg-dark p-2 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '42px', height: '42px', border: '1px solid #dfb15b', transition: 'all 0.3s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dfb15b'; e.currentTarget.style.color = '#250407'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#fff'; }}
                    >
                      <FacebookFill />
                    </a>
                    
                    {}
                    <a 
                      href="https://www.facebook.com/share/191kfyKqAy/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white bg-dark p-2 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '42px', height: '42px', border: '1px solid #dfb15b', transition: 'all 0.3s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dfb15b'; e.currentTarget.style.color = '#250407'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#fff'; }}
                    >
                      <XFill />
                    </a>
                    
                    {}
                    <a 
                      href="https://www.instagram.com/tamil_yazhi_trust?igsh=YWxtZTF6YnB0Zjlo" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white bg-dark p-2 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '42px', height: '42px', border: '1px solid #dfb15b', transition: 'all 0.3s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dfb15b'; e.currentTarget.style.color = '#250407'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#fff'; }}
                    >
                      <InstagramFill />
                    </a>
                    
                    {}
                    <a 
                      href="https://youtube.com/@yazhishinesmedia_?si=gk9vks4D-kWQHFfj" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white bg-dark p-2 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '42px', height: '42px', border: '1px solid #dfb15b', transition: 'all 0.3s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dfb15b'; e.currentTarget.style.color = '#250407'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#fff'; }}
                    >
                      <YoutubeFill />
                    </a>

                  </div>
                </div>

              </Card.Body>
            </Card>
          </Col>

          {}
          <Col lg={7}>
            <Card className="border-0 shadow-lg text-white h-100" style={{ backgroundColor: '#250407', border: '1px solid #dfb15b', borderRadius: '15px' }}>
              <Card.Header className="p-4" style={{ backgroundColor: '#1a0204', borderBottom: '2px solid #dfb15b' }}>
                <h3 className="font-cinzel fw-bold m-0" style={{ color: '#dfb15b' }}>
                  ✍️ Send Us a Message
                </h3>
                <small style={{ color: '#f7e7c4', opacity: '0.8' }}>
                  Have questions, ideas, or feedback? Drop us a line and we will reply as soon as possible.
                </small>
              </Card.Header>
              <Card.Body className="p-4" style={{ background: 'linear-gradient(180deg, #32080c, #1f0305)' }}>
                <Form onSubmit={handleSubmit}>
                  
                  {}
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold" style={{ color: '#dfb15b' }}>YOUR NAME (உங்கள் பெயர்)</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="name"
                      placeholder="Enter your full name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                    />
                  </Form.Group>

                  {}
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold" style={{ color: '#dfb15b' }}>EMAIL ADDRESS (மின்னஞ்சல் முகவரி)</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email"
                      placeholder="yourname@gmail.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                    />
                  </Form.Group>

                  {}
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold" style={{ color: '#dfb15b' }}>SUBJECT (தலைப்பு)</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="subject"
                      placeholder="e.g. Partnership, Volunteering query" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                    />
                  </Form.Group>

                  {}
                  <Form.Group className="mb-4">
                    <Form.Label className="small fw-bold" style={{ color: '#dfb15b' }}>MESSAGE (உங்கள் கருத்து / செய்தி)</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      name="message"
                      placeholder="Write your thoughts here..." 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                    />
                  </Form.Group>

                  {}
                  <Button 
                    type="submit"
                    className="w-100 font-cinzel fw-bold py-2.5 text-black rounded-pill shadow"
                    style={{ backgroundColor: '#dfb15b', border: 'none', letterSpacing: '0.5px' }}
                    onMouseEnter={(e) => e.target.style.filter = 'brightness(1.1)'}
                    onMouseLeave={(e) => e.target.style.filter = 'none'}
                  >
                    🚀 SEND MESSAGE
                  </Button>

                </Form>
              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default Contact;