import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';


const GiftIcon = () => (
  <svg width="36" height="36" fill="currentColor" className="mb-3 text-warning" viewBox="0 0 24 24">
    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.65-.5-.65C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83l1.41 1.41L12 8.64l3.59 3.59 1.41-1.41L14.92 8H20v6z"/>
  </svg>
);

const HandsIcon = () => (
  <svg width="36" height="36" fill="currentColor" className="mb-3 text-warning" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const PartnerIcon = () => (
  <svg width="36" height="36" fill="currentColor" className="mb-3 text-warning" viewBox="0 0 24 24">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm14 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
  </svg>
);

function GetInvolved() {
  const [partners, setPartners] = useState([]);
  const [orgName, setOrgName] = useState('');
  const [website, setWebsite] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [logoPreview, setLogoPreview] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    
    const savedPartners = localStorage.getItem('trust_partners');
    if (savedPartners) {
      const parsed = JSON.parse(savedPartners);
      
      const cleanList = parsed.filter(p => p.id !== 1 && p.id !== 2 && p.id !== 3 && p.id !== 4);
      setPartners(cleanList);
      localStorage.setItem('trust_partners', JSON.stringify(cleanList));
    } else {
      setPartners([]);
    }
  }, []);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    if (!orgName || !contactName || !email || !logoPreview) return;

    const newPartner = {
      id: Date.now(),
      orgName,
      logo: logoPreview,
      website: website || "#",
      contactName,
      email,
      status: "Approved"
    };

    const updatedPartners = [newPartner, ...partners];
    setPartners(updatedPartners);
    localStorage.setItem('trust_partners', JSON.stringify(updatedPartners));

    
    setOrgName('');
    setWebsite('');
    setContactName('');
    setEmail('');
    setLogoPreview('');
    setShowSuccessModal(true);
  };

  return (
    <section className="get-involved-section py-5 text-dark" style={{ background: 'linear-gradient(135deg, #fcedc9 0%, #dfb15b 100%)', minHeight: '100vh' }}>
      <Container>
        
        {}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold font-cinzel text-uppercase" style={{ color: '#250407', fontFamily: "'Cinzel', serif, Georgia" }}>
            Get Involved
          </h1>
          <p className="lead mt-2 fw-semibold" style={{ color: '#3d0c11', opacity: '0.8' }}>
            எங்களுடன் கைகோர்த்து சமூக மாற்றத்திற்கான பாதையை உருவாக்குங்கள்
          </p>
          <div className="heading-line mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#250407' }}></div>
        </div>

        {}
        <Row className="g-4 mb-5">
          {}
          <Col md={4}>
            <Card className="text-center h-100 border-0 shadow-lg" style={{ backgroundColor: '#250407', color: '#f7e7c4', borderRadius: '15px', border: '1px solid #dfb15b' }}>
              <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-between">
                <div>
                  <GiftIcon />
                  <h4 className="font-cinzel text-warning mb-3 fw-bold">Donation</h4>
                  <p className="small text-white-50 text-justify" style={{ lineHeight: '1.6' }}>
                    உங்கள் சிறு நிதியுதவி பல ஏழை எளிய மாணவர்களின் கல்விக்கும், மனநல விழிப்புணர்வு முகாம்களுக்கும் நேரடியாகப் பயன்படும்.
                  </p>
                </div>
                <Button 
                  onClick={() => window.location.href = '/donate'}
                  className="w-100 font-cinzel fw-bold border-0 mt-3 py-2.5 text-black"
                  style={{ backgroundColor: '#dfb15b', borderRadius: '25px' }}
                >
                  Donate Now 💖
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {}
          <Col md={4}>
            <Card className="text-center h-100 border-0 shadow-lg" style={{ backgroundColor: '#250407', color: '#f7e7c4', borderRadius: '15px', border: '1px solid #dfb15b' }}>
              <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-between">
                <div>
                  <HandsIcon />
                  <h4 className="font-cinzel text-warning mb-3 fw-bold">Join the Movement</h4>
                  <p className="small text-white-50 text-justify" style={{ lineHeight: '1.6' }}>
                    தன்னார்வலராக எங்களோடு இணைந்து களப்பணிகள், கல்வி கற்பித்தல் மற்றும் மரம் நடுதல் போன்ற உன்னத நோக்கங்களில் பங்கெடுங்கள்.
                  </p>
                </div>
                <Button 
                  onClick={() => window.location.href = '/volunteer'}
                  className="w-100 font-cinzel fw-bold border-0 mt-3 py-2.5 text-black"
                  style={{ backgroundColor: '#dfb15b', borderRadius: '25px' }}
                >
                  Join as Volunteer 🤝
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {}
          <Col md={4}>
            <Card className="text-center h-100 border-0 shadow-lg" style={{ backgroundColor: '#250407', color: '#f7e7c4', borderRadius: '15px', border: '1px solid #dfb15b' }}>
              <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-between">
                <div>
                  <PartnerIcon />
                  <h4 className="font-cinzel text-warning mb-3 fw-bold">Partner with Us</h4>
                  <p className="small text-white-50 text-justify" style={{ lineHeight: '1.6' }}>
                    தங்களின் கல்வி நிறுவனங்கள், நிறுவனங்கள் அல்லது அரசு சாரா அமைப்புகள் எங்களோடு இணைந்து கூட்டுச் சேவைகளை வழங்கலாம்.
                  </p>
                </div>
                <a 
                  href="#partner-form-section"
                  className="w-100 font-cinzel fw-bold border-0 mt-3 py-2.5 btn text-black text-decoration-none"
                  style={{ backgroundColor: '#dfb15b', borderRadius: '25px' }}
                >
                  Partner With Us 🏢
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {}
        <Row className="g-5 pt-5" id="partner-form-section">
          <Col lg={7}>
            <Card className="p-4 border-0 shadow-lg h-100" style={{ backgroundColor: '#250407', border: '1px solid #dfb15b', borderRadius: '15px', color: '#f7e7c4' }}>
              <h3 className="font-cinzel text-warning mb-4 pb-2" style={{ borderBottom: '1px solid rgba(223,177,91,0.2)' }}>
                🏢 Our Valued Partners / எங்களின் கூட்டாளிகள்
              </h3>

              {}
              {partners.length > 0 ? (
                <Row className="g-3">
                  {partners.map((partner) => (
                    <Col xs={6} sm={4} key={partner.id} className="text-center">
                      <Card 
                        className="p-3 border-0 h-100 d-flex flex-column align-items-center justify-content-center"
                        style={{ backgroundColor: '#1a0204', border: '1px solid rgba(223, 177, 91, 0.2)', borderRadius: '12px' }}
                      >
                        <div className="bg-white p-2 rounded mb-2 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', overflow: 'hidden' }}>
                          <img 
                            src={partner.logo} 
                            alt={partner.orgName} 
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          />
                        </div>
                        <small className="fw-semibold text-white d-block text-truncate w-100" style={{ fontSize: '0.8rem' }}>
                          {partner.orgName}
                        </small>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                <div className="text-center py-5 text-white-50">
                  <p className="m-0 fs-5">இன்னும் கூட்டாளிகள் யாரும் பதியவில்லை.</p>
                  <p className="small">வலதுபுறம் உள்ள படிவத்தைப் பயன்படுத்தி எங்களோடு இணையும் முதல் கூட்டாளியாக மாறுங்கள்!</p>
                </div>
              )}
            </Card>
          </Col>

          {}
          <Col lg={5}>
            <Card className="p-4 border-0 shadow-lg h-100" style={{ backgroundColor: '#250407', border: '1px solid #dfb15b', borderRadius: '15px', color: '#f7e7c4' }}>
              <h3 className="font-cinzel text-warning mb-3 pb-2" style={{ borderBottom: '1px solid rgba(223,177,91,0.2)' }}>
                ✍️ Register as Partner
              </h3>
              <p className="small text-white-50 mb-4">
                உங்கள் அமைப்பின் பெயர் மற்றும் முத்திரையை (Logo) பதிவேற்றி எங்களோடு கைகோர்க்கவும்.
              </p>

              <Form onSubmit={handlePartnerSubmit}>
                
                {}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">ORGANIZATION NAME / அமைப்பின் பெயர் <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="உதாரணம்: பசுமை அறக்கட்டளை" 
                    className="custom-placeholder" 
                    value={orgName} 
                    onChange={(e) => setOrgName(e.target.value)} 
                    required 
                    style={{ backgroundColor: '#1a0204', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                  />
                </Form.Group>

                {}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">CONTACT PERSON / தொடர்பு நபர் <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="முழு பெயர்" 
                    className="custom-placeholder" 
                    value={contactName} 
                    onChange={(e) => setContactName(e.target.value)} 
                    required 
                    style={{ backgroundColor: '#1a0204', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                  />
                </Form.Group>

                {}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">EMAIL ADDRESS <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="partner@company.com" 
                    className="custom-placeholder" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    style={{ backgroundColor: '#1a0204', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                  />
                </Form.Group>

                {}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">WEBSITE LINK (optional)</Form.Label>
                  <Form.Control 
                    type="url" 
                    placeholder="https://yourwebsite.com" 
                    className="custom-placeholder" 
                    value={website} 
                    onChange={(e) => setWebsite(e.target.value)} 
                    style={{ backgroundColor: '#1a0204', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                  />
                </Form.Group>

                {}
                <Form.Group className="mb-4">
                  <Form.Label className="small fw-bold">UPLOAD LOGO / முத்திரை படம் <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="file" 
                    accept="image/*" 
                    onChange={handleLogoChange} 
                    required 
                    style={{ backgroundColor: '#1a0204', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                  />
                  {logoPreview && (
                    <div className="mt-3 text-center">
                      <small className="d-block text-white-50 mb-2">Logo Preview:</small>
                      <div className="bg-white p-2 d-inline-block rounded shadow" style={{ width: '80px', height: '80px', overflow: 'hidden' }}>
                        <img src={logoPreview} alt="Logo Preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                    </div>
                  )}
                </Form.Group>

                {}
                <Button 
                  type="submit" 
                  className="w-100 font-cinzel fw-bold py-2.5 text-black border-0 rounded-pill"
                  style={{ backgroundColor: '#dfb15b' }}
                >
                  🚀 Register as Partner
                </Button>

              </Form>
            </Card>
          </Col>
        </Row>

      </Container>

      {}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
        <Modal.Body className="text-center p-5 text-white" style={{ background: 'linear-gradient(135deg, #250407 0%, #1a0204 100%)', border: '2px solid #dfb15b', borderRadius: '15px' }}>
          <div className="display-1 text-warning mb-4">🤝</div>
          <h3 className="font-cinzel fw-bold mb-3" style={{ color: '#dfb15b' }}>Thank You Partner!</h3>
          <p style={{ color: '#f7e7c4', fontSize: '0.95rem', lineHeight: '1.6' }}>
            எங்கள் அறக்கட்டளையோடு இணைந்தமைக்கு நன்றி. உங்களது முத்திரை (Logo) மற்றும் விவரங்கள் வெற்றிகரமாகப் பதியப்பட்டு பொதுமக்களின் பார்வைக்குக் காட்டப்படுகிறது!
          </p>
          <div className="bg-warning mx-auto my-4" style={{ width: '60px', height: '1.5px' }}></div>
          <Button 
            onClick={() => setShowSuccessModal(false)}
            className="font-cinzel fw-bold px-4 py-2 text-black border-0"
            style={{ backgroundColor: '#dfb15b', borderRadius: '25px' }}
          >
            Close & Continue
          </Button>
        </Modal.Body>
      </Modal>

    </section>
  );
}

export default GetInvolved;