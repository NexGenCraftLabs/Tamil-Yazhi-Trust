import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '', 
    aadhaar: '',    
    gender: 'Male',
    dob: '',
    bloodGroup: 'O+',
    email: '',
    phone: '',
    whatsapp: '',
    education: '',
    occupation: '',
    district: '',
    interest: 'Education & Skill Development',
    mode: 'Fieldwork',
    experience: '',
    message: ''
  });

  const [notification, setNotification] = useState({ show: false, message: '', variant: 'success' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const showNotification = (message, variant = 'success') => {
    setNotification({ show: true, message, variant });
    setTimeout(() => {
      setNotification({ show: false, message: '', variant: 'success' });
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    
    if (!formData.name || !formData.fatherName || !formData.aadhaar || !formData.email || !formData.phone || !formData.district) {
      showNotification('தயவுசெய்து அனைத்து கட்டாயத் தகவல்களையும் நிரப்பவும் (Please fill all required fields).', 'danger');
      setIsSubmitting(false);
      return;
    }

    
    if (formData.aadhaar.length !== 12) {
      showNotification('தயவுசெய்து சரியான 12 இலக்க ஆதார் எண்ணை உள்ளிடவும்.', 'danger');
      setIsSubmitting(false);
      return;
    }

    const newVolunteer = {
      id: Date.now(),
      name: formData.name,
      fatherName: formData.fatherName, 
      aadhaar: formData.aadhaar,       
      gender: formData.gender,
      dob: formData.dob,
      bloodGroup: formData.bloodGroup,
      email: formData.email,
      phone: formData.phone,
      whatsapp: formData.whatsapp || formData.phone,
      education: formData.education,
      occupation: formData.occupation,
      district: formData.district,
      interest: formData.interest,
      mode: formData.mode,
      experience: formData.experience,
      message: formData.message,
      date: new Date().toISOString().split('T')[0], 
      status: 'Pending'
    };

    setTimeout(() => {
      const savedVolunteers = localStorage.getItem('trust_volunteers');
      const existingVolunteers = savedVolunteers ? JSON.parse(savedVolunteers) : [];
      const updatedVolunteers = [newVolunteer, ...existingVolunteers];
      
      localStorage.setItem('trust_volunteers', JSON.stringify(updatedVolunteers));

      showNotification('மிக்க நன்றி! உங்களது பதிவு வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது. எங்கள் குழு விரைவில் உங்களைத் தொடர்புகொள்ளும்.', 'success');
      
      setFormData({
        name: '',
        fatherName: '', 
        aadhaar: '',    
        gender: 'Male',
        dob: '',
        bloodGroup: 'O+',
        email: '',
        phone: '',
        whatsapp: '',
        education: '',
        occupation: '',
        district: '',
        interest: 'Education & Skill Development',
        mode: 'Fieldwork',
        experience: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500); 
  };

  return (
    <section className="volunteer-section py-5 text-dark position-relative" style={{ background: 'linear-gradient(135deg, #fcedc9 0%, #dfb15b 100%)', minHeight: '100vh' }}>
      
      {notification.show && (
        <div className="position-fixed top-0 start-50 translate-middle-x mt-4 p-3 rounded shadow-lg text-white" 
             style={{ 
               backgroundColor: notification.variant === 'success' ? '#2e7d32' : notification.variant === 'warning' ? '#ef6c00' : '#c62828',
               border: '2.5px solid #dfb15b',
               zIndex: 2000,
               minWidth: '320px',
               transition: 'all 0.3s ease-in-out'
             }}>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-semibold">📢 {notification.message}</span>
            <Button variant="link" className="text-white p-0 ms-3 fw-bold text-decoration-none" onClick={() => setNotification({ show: false, message: '', variant: 'success' })}>✕</Button>
          </div>
        </div>
      )}

      <Container>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold font-cinzel text-uppercase" style={{ color: '#250407', fontFamily: "'Cinzel', serif, Georgia" }}>
            Become a Volunteer
          </h1>
          <p className="lead mt-2 fw-semibold" style={{ color: '#3d0c11', opacity: '0.8' }}>
            தன்னார்வலர் சேர்க்கைப் படிவம் | Volunteer Registration Form
          </p>
          <div className="heading-line mx-auto mb-4" style={{ width: '100px', height: '3px', backgroundColor: '#250407' }}></div>
        </div>

        <Row className="g-5 align-items-stretch">
          
          <Col lg={4}>
            <div className="h-100 d-flex flex-column justify-content-center p-4 rounded-4 shadow-lg" style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }}>
              <h2 className="font-cinzel text-warning mb-4">🤝 Why Volunteer?</h2>
              
              <div className="mb-4">
                <h5 className="fw-bold text-white mb-2">🌟 Impact Lives Directly</h5>
                <p className="small text-white-50 text-justify" style={{ lineHeight: '1.6' }}>
                  உங்கள் சிறிய முயற்சி பலரது வாழ்வில் பெரிய மாற்றத்தை ஏற்படுத்தும். கல்வி, சுற்றுச்சூழல் மற்றும் மனநலம் சார்ந்த சேவைகளில் நேரடியாகப் பங்கேற்கலாம்.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold text-white mb-2">📚 Learn & Grow</h5>
                <p className="small text-white-50 text-justify" style={{ lineHeight: '1.6' }}>
                  சமூகப் பணிகளின் மூலம் தலைமைத்துவப் பண்புகளை (Leadership Skills) வளர்த்துக்கொள்ளலாம். புதிய நபர்களைச் சந்தித்து உங்கள் சமூக நெட்வொர்க்கை விரிவாக்கலாம்.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold text-white mb-2">🏅 Appreciation Certificate</h5>
                <p className="small text-white-50 text-justify" style={{ lineHeight: '1.6' }}>
                  தொடர்ந்து சமூகப் பணிகளில் ஈடுபடும் தன்னார்வலர்களுக்குச் சான்றிதழ்கள் மற்றும் சிறப்பு அங்கீகாரங்கள் வழங்கப்படும்.
                </p>
              </div>

              <div className="mt-auto pt-4" style={{ borderTop: '1px dashed rgba(223, 177, 91, 0.3)' }}>
                <p className="m-0 fw-semibold text-warning small">
                  📍 Contact us for queries: +91 99948 46616 <br/>
                  📧 Email: tamilyazhitrust@gmail.com
                </p>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <Card className="border-0 shadow-lg p-4 h-100 rounded-4" style={{ backgroundColor: '#1a0204', border: '1px solid #dfb15b' }}>
              <Card.Body>
                
                <Form onSubmit={handleSubmit}>
                  
                  <h5 className="text-warning mb-3 font-cinzel pb-2" style={{ borderBottom: '1px solid rgba(223,177,91,0.2)' }}>
                    👨‍💼 Personal Details / தனிநபர் விவரங்கள்
                  </h5>
                  
                  {}
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">Full Name (முழுப் பெயர்) <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                          type="text" 
                          name="name"
                          placeholder="Your Answer" 
                          className="custom-placeholder" 
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }} 
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">Father's Name (தந்தையின் பெயர்) <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                          type="text" 
                          name="fatherName"
                          placeholder="Father's / Guardian's Name" 
                          className="custom-placeholder" 
                          value={formData.fatherName}
                          onChange={handleChange}
                          required
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }} 
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {}
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">Aadhaar Number (ஆதார் எண்) <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                          type="text" 
                          name="aadhaar"
                          placeholder="12 Digit Aadhaar Number" 
                          className="custom-placeholder" 
                          maxLength={12}
                          value={formData.aadhaar}
                          onChange={(e) => {
                            
                            const value = e.target.value.replace(/\D/g, '');
                            handleChange({ target: { name: 'aadhaar', value } });
                          }}
                          required
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }} 
                        />
                      </Form.Group>
                    </Col>

                    <Col md={3}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">Gender (பாலினம்) <span className="text-danger">*</span></Form.Label>
                        <Form.Select 
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }}
                        >
                          <option value="Male">Male / ஆண்</option>
                          <option value="Female">Female / பெண்</option>
                          <option value="Other">Other / இதர</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={3}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">Blood Group <span className="text-danger">*</span></Form.Label>
                        <Form.Select 
                          name="bloodGroup"
                          value={formData.bloodGroup}
                          onChange={handleChange}
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }}
                        >
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  {}
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">Date of Birth (பிறந்த தேதி) <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                          type="date" 
                          name="dob"
                          value={formData.dob}
                          className="custom-placeholder" 
                          onChange={handleChange}
                          required
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }} 
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">District / வசிக்கும் மாவட்டம் <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                          type="text" 
                          name="district"
                          placeholder="e.g. Trichy, Chennai" 
                          className="custom-placeholder" 
                          value={formData.district}
                          onChange={handleChange}
                          required
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }} 
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <h5 className="text-warning mt-4 mb-3 font-cinzel pb-2" style={{ borderBottom: '1px solid rgba(223,177,91,0.2)' }}>
                    📞 Contact Information / தொடர்பு விவரங்கள்
                  </h5>

                  <Row>
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">Email Address (மின்னஞ்சல் முகவரி) <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email"
                          placeholder="name@gmail.com" 
                          className="custom-placeholder" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }} 
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">Mobile Number (கைபேசி எண்) <span className="text-danger">*</span></Form.Label>
                        <Form.Control 
                          type="tel" 
                          name="phone"
                          placeholder="Enter Phone Number" 
                          className="custom-placeholder" 
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }} 
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">WhatsApp Number (வாட்ஸ்அப் எண்)</Form.Label>
                        <Form.Control 
                          type="tel" 
                          name="whatsapp"
                          placeholder="Enter Your Whatsapp Number" 
                          className="custom-placeholder" 
                          value={formData.whatsapp}
                          onChange={handleChange}
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }} 
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <h5 className="text-warning mt-4 mb-3 font-cinzel pb-2" style={{ borderBottom: '1px solid rgba(223,177,91,0.2)' }}>
                    🎓 Qualifications & Services / தகுதி மற்றும் சேவை விருப்பம்
                  </h5>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">Educational Qualification (கல்வித் தகுதி)</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="education"
                          className="custom-placeholder" 
                          placeholder="e.g. B.Sc Psychology, Class 12" 
                          value={formData.education}
                          onChange={handleChange}
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }} 
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">Occupation / தற்போதைய பணி அல்லது படிப்பு</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="occupation"
                          placeholder="e.g. Student, Software Engineer" 
                          className="custom-placeholder" 
                          value={formData.occupation}
                          onChange={handleChange}
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }} 
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">Area of Interest (விருப்பமான சேவை) <span className="text-danger">*</span></Form.Label>
                        <Form.Select 
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }}
                        >
                          <option value="Education & Skill Development">Education & Skill Development (கல்விப்பணி)</option>
                          <option value="Mental Health Awareness">Mental Health Awareness (மனநல விழிப்புணர்வு)</option>
                          <option value="Youth Leadership">Youth Leadership (இளைஞர் மேம்பாடு)</option>
                          <option value="Environment & Sustainability">Environment & Sustainability (சுற்றுச்சூழல்)</option>
                          <option value="Community Welfare">Community Welfare (சமூக நலம்)</option>
                          <option value="General Support">General Support (பொதுவான பணிகள்)</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold text-white">Volunteering Mode (பங்களிப்பு முறை) <span className="text-danger">*</span></Form.Label>
                        <Form.Select 
                          name="mode"
                          value={formData.mode}
                          onChange={handleChange}
                          style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }}
                        >
                          <option value="Fieldwork">Fieldwork (நேரிடி களப்பணி)</option>
                          <option value="Online / Remote">Online / Remote (இணையவழிச் சேவை)</option>
                          <option value="Hybrid">Hybrid (இரண்டும்)</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold text-white">Previous Experience (முந்தைய தன்னார்வ அனுபவம் - ஏதேனும் இருப்பின்)</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={2} 
                      name="experience"
                      placeholder="Share your past experience with other NGOs or campaigns..." 
                      className="custom-placeholder" 
                      value={formData.experience}
                      onChange={handleChange}
                      style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }} 
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold text-white">Why do you want to join us? (ஏன் இணைய விரும்புகிறீர்கள்?) <span className="text-danger">*</span></Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={3} 
                      name="message"
                      placeholder="Your Answer" 
                      className="custom-placeholder" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b', borderRadius: '8px' }} 
                    />
                  </Form.Group>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-100 font-cinzel fw-bold py-3 shadow-lg text-uppercase mt-2"
                    style={{ 
                      backgroundColor: '#dfb15b', 
                      color: '#250407', 
                      border: 'none', 
                      borderRadius: '30px', 
                      transition: 'all 0.3s',
                      fontSize: '1.1rem'
                    }}
                    onMouseEnter={(e) => { e.target.style.backgroundColor = '#f7e7c4'; }}
                    onMouseLeave={(e) => { e.target.style.backgroundColor = '#dfb15b'; }}
                  >
                    {isSubmitting ? 'Submitting Registration...' : 'SUBMIT / சமர்ப்பி'}
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

export default Volunteer;