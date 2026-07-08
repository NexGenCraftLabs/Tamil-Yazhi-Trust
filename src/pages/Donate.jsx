import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';

const HeartFill = () => (
  <svg width="22" height="22" fill="#dc3545" className="d-inline-block align-middle me-1" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const ShieldFillCheck = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" className="d-inline-block align-middle me-1" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
  </svg>
);

const PhoneFill = () => (
  <svg width="20" height="20" fill="#dfb15b" className="d-inline-block align-middle me-2" viewBox="0 0 24 24">
    <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-5 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7.5V4h9v14z"/>
  </svg>
);

const ArrowRightShort = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" className="d-inline-block align-middle ms-1" viewBox="0 0 24 24">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
  </svg>
);

function Donate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('General');
  const [txId, setTxId] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && amount && txId) {
      
      const newDonation = {
        id: Date.now(),
        name,
        email,
        phone,
        amount: parseFloat(amount),
        purpose,
        transactionId: txId,
        date: new Date().toISOString().split('T')[0],
        status: "Pending"
      };

      const existingDonations = JSON.parse(localStorage.getItem('trust_donations') || '[]');
      const updatedDonations = [newDonation, ...existingDonations];
      localStorage.setItem('trust_donations', JSON.stringify(updatedDonations));

      
      setName('');
      setEmail('');
      setPhone('');
      setAmount('');
      setPurpose('General');
      setTxId('');
      setShowSuccessModal(true);
    }
  };

  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #fcedc9 0%, #dfb15b 100%)', minHeight: '100vh' }}>
      <Container>
        
        <div className="text-center mb-5">
          <h1 className="fw-bold text-uppercase font-cinzel" style={{ color: '#250407', fontFamily: "'Cinzel', serif, Georgia", fontSize: 'clamp(2rem, 4vw, 3rem)' }}>SUPPORT OUR CAUSE</h1>
          <p className="lead fw-semibold mt-2" style={{ color: '#3d0c11', opacity: '0.9' }}>Your small contribution can bring big changes in someone's life.</p>
          <div className="mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#250407' }}></div>
        </div>

        <Row className="g-4">
          
          <Col lg={6}>
            
            {}
            <div className="mb-4 p-4 rounded shadow-sm text-white" style={{ background: 'linear-gradient(135deg, #32080c, #1a0204)', border: '1px solid #dfb15b' }}>
              <h3 className="font-cinzel fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#dfb15b' }}>
                <HeartFill /> Why Donate to Us?
              </h3>
              <p className="small mb-0" style={{ color: '#f7e7c4', lineHeight: '1.6', textAlign: 'justify' }}>
                At Tamil Yazhi Trust, every single rupee you donate goes directly towards facilitating mental healthcare counselling, conducting free educational and skill development programs, implementing agricultural awareness, and organizing environmental conservation activities. We ensure complete transparency in our records.
              </p>
            </div>

            
            <Card className="border-0 shadow-lg text-white mb-4" style={{ backgroundColor: '#250407', border: '1px solid #dfb15b', borderRadius: '15px' }}>
              <Card.Body className="p-4" style={{ background: 'linear-gradient(180deg, #32080c, #1f0305)' }}>
                <h4 className="font-cinzel fw-bold mb-3" style={{ color: '#dfb15b' }}>📱 Scan & Pay via UPI</h4>
                <Row className="align-items-center g-3">
                  <Col xs={12} sm={5} className="d-flex justify-content-center">
                    <div className="bg-white p-2 rounded shadow-sm" style={{ maxWidth: '170px' }}>
                      <img 
                        src="/qr-code.jpeg" 
                        alt="Tamil Yazhi UPI QR Code" 
                        className="img-fluid"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/150/ffffff/000000?text=Tamil+Yazhi+QR";
                        }}
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={7}>
                    <p className="small mb-2" style={{ color: '#f7e7c4', lineHeight: '1.5' }}>
                      Scan the QR code with any UPI app (GPay, PhonePe, Paytm) to make an instant contribution.
                    </p>
                    <div className="p-2.5 rounded text-start" style={{ backgroundColor: '#1a0204', border: '1px dashed #dfb15b' }}>
                      <span className="small text-muted d-block" style={{ fontSize: '0.75rem' }}>UPI ID:</span>
                      <strong style={{ color: '#dfb15b', fontSize: '1rem', letterSpacing: '0.5px' }}>tamilyazhitrust@okicici</strong>
                    </div>
                    <div className="mt-3 p-2 rounded d-flex align-items-center" style={{ backgroundColor: '#db0e1f', fontSize: '0.9rem' }}>
                      <PhoneFill />
                      <div>
                        <span className="d-block small text-white-50">GPay / PhonePe:</span>
                        <strong style={{ color: '#dfb15b', fontSize: '1rem' }}>9994846616</strong>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            
            <Card className="border-0 shadow-lg text-white" style={{ backgroundColor: '#250407', border: '1px solid #dfb15b', borderRadius: '15px' }}>
              <Card.Body className="p-4" style={{ background: 'linear-gradient(180deg, #32080c, #1f0305)' }}>
                <h4 className="font-cinzel fw-bold mb-3" style={{ color: '#dfb15b' }}>🏦 Direct Bank Transfer</h4>
                <div style={{ borderBottom: '1px dashed rgba(223, 177, 91, 0.3)', paddingBottom: '12px' }} className="mb-3 small">
                  Transfer directly to our official trust bank account using Net Banking, IMPS, NEFT, or RTGS.
                </div>
                
                <Row className="g-3 small">
                  <Col xs={5} className="text-muted fw-bold">ACCOUNT NAME:</Col>
                  <Col xs={7} className="fw-semibold text-white">Tamil yazhi trust</Col>

                  <Col xs={5} className="text-muted fw-bold">ACCOUNT NUMBER:</Col>
                  <Col xs={7} className="fw-bold" style={{ color: '#dfb15b', letterSpacing: '0.5px' }}>50200071637422</Col>

                  <Col xs={5} className="text-muted fw-bold">IFSC CODE:</Col>
                  <Col xs={7} className="fw-bold" style={{ color: '#dfb15b', letterSpacing: '0.5px' }}>HDFC0009560</Col>

                  <Col xs={5} className="text-muted fw-bold">BANK NAME:</Col>
                  <Col xs={7} className="fw-semibold text-white">HDFC BANK</Col>

                  <Col xs={5} className="text-muted fw-bold">BRANCH:</Col>
                  <Col xs={7} className="fw-semibold text-white">THURAIYUR BRANCH</Col>
                </Row>
              </Card.Body>
            </Card>

          </Col>

          
          <Col lg={6}>
            <Card className="border-0 shadow-lg text-white" style={{ backgroundColor: '#250407', border: '1px solid #dfb15b', borderRadius: '15px', height: '100%' }}>
              <Card.Header className="p-4" style={{ backgroundColor: '#1a0204', borderBottom: '2px solid #dfb15b' }}>
                <h3 className="font-cinzel fw-bold m-0" style={{ color: '#dfb15b' }}>✍️ Donation Intimation Form</h3>
                <small style={{ color: '#f7e7c4', opacity: '0.8' }}>
                  Please report your transaction below after transferring funds so that we can issue your receipt.
                </small>
              </Card.Header>
              <Card.Body className="p-4" style={{ background: 'linear-gradient(180deg, #32080c, #1f0305)' }}>
                <Form onSubmit={handleSubmit}>
                  
                  
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold" style={{ color: '#dfb15b' }}>YOUR FULL NAME</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter your name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                      style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      
                      <Form.Group className="mb-3">
                        <Form.Label className="small fw-bold" style={{ color: '#dfb15b' }}>EMAIL ADDRESS</Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="yourname@gmail.com" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          required 
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      
                      <Form.Group className="mb-3">
                        <Form.Label className="small fw-bold" style={{ color: '#dfb15b' }}>PHONE NUMBER</Form.Label>
                        <Form.Control 
                          type="tel" 
                          placeholder="Enter mobile number" 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)} 
                          required 
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      
                      <Form.Group className="mb-3">
                        <Form.Label className="small fw-bold" style={{ color: '#dfb15b' }}>DONATION AMOUNT (₹)</Form.Label>
                        <Form.Control 
                          type="number" 
                          placeholder="e.g. 1000" 
                          value={amount} 
                          onChange={(e) => setAmount(e.target.value)} 
                          required 
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      
                      <Form.Group className="mb-3">
                        <Form.Label className="small fw-bold" style={{ color: '#dfb15b' }}>PURPOSE OF CONTRIBUTION</Form.Label>
                        <Form.Select 
                          value={purpose} 
                          onChange={(e) => setPurpose(e.target.value)} 
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }}
                        >
                          <option value="General">General / Core Support</option>
                          <option value="Education">Education & Skill Development</option>
                          <option value="Mental Health">Mental Health & Counselling</option>
                          <option value="Youth Leadership">Youth Empowerment</option>
                          <option value="Environment">Environmental Activities</option>
                          <option value="Community Support">Community Welfare</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  
                  <Form.Group className="mb-4">
                    <Form.Label className="small fw-bold" style={{ color: '#dfb15b' }}>TRANSACTION ID / REF NO.</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter GPay, PhonePe, or Bank UPI Ref ID" 
                      value={txId} 
                      onChange={(e) => setTxId(e.target.value)} 
                      required 
                      style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                    />
                    <Form.Text className="text-white-50 small">
                      Please enter the correct reference number to help our team match with bank statements.
                    </Form.Text>
                  </Form.Group>

                  
                  <Button 
                    type="submit"
                    className="w-100 font-cinzel fw-bold py-2.5 text-black rounded-pill shadow d-flex align-items-center justify-content-center gap-1"
                    style={{ backgroundColor: '#dfb15b', border: 'none', letterSpacing: '0.5px' }}
                    onMouseEnter={(e) => e.target.style.filter = 'brightness(1.1)'}
                    onMouseLeave={(e) => e.target.style.filter = 'none'}
                  >
                    <ShieldFillCheck size={20} /> SUBMIT TRANSACTION REPORT
                  </Button>

                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
        <Modal.Body className="text-center p-5 text-white" style={{ background: 'linear-gradient(135deg, #250407 0%, #1a0204 100%)', border: '2px solid #dfb15b', borderRadius: '15px' }}>
          <div className="display-1 text-warning mb-4">😇</div>
          <h3 className="font-cinzel fw-bold mb-3" style={{ color: '#dfb15b' }}>Thank You So Much!</h3>
          <p style={{ color: '#f7e7c4', fontSize: '0.95rem', lineHeight: '1.6' }}>
            We have received your donation intimation report. Our admin team will verify the transaction ID in our bank records and issue an official receipt to your email address shortly.
          </p>
          <div className="bg-warning mx-auto my-4" style={{ width: '60px', height: '1.5px' }}></div>
          <Button 
            onClick={() => setShowSuccessModal(false)}
            className="font-cinzel fw-bold px-4 py-2 text-black"
            style={{ backgroundColor: '#dfb15b', border: 'none', borderRadius: '25px', fontSize: '0.85rem' }}
          >
            Close & Continue <ArrowRightShort size={20} />
          </Button>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Donate;