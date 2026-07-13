import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Table, Badge, Modal, Nav, Tab } from 'react-bootstrap';

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');

  const [notification, setNotification] = useState({ show: false, message: '', variant: 'success' });
  const [confirmModal, setConfirmModal] = useState({ show: false, title: '', message: '', onConfirm: null });

  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const [events, setEvents] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [donations, setDonations] = useState([]);
  const [galleryUploads, setGalleryUploads] = useState([]);

  
  const [eventForm, setEventForm] = useState({
    id: null,
    title: '',
    date: '',
    time: '',
    venue: '',
    category: 'Education',
    desc: '',
    image: ''
  });
  const [showEventModal, setShowEventModal] = useState(false);
  const [isEditingEvent, setIsEditingEvent] = useState(false);

  
  const [galleryForm, setGalleryForm] = useState({
    albumId: 'education',
    title: '',
    imageFile: null,
    imagePreview: '',
    imageType: 'preset', 
    presetUrl: '/gallery/education1.jpg'
  });
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  const presetImages = [
    { label: 'Education & Skills', value: '/gallery/education1.jpg' },
    { label: 'Mental Health Awareness', value: '/gallery/mental-health1.jpg' },
    { label: 'Youth Leadership', value: '/gallery/youth1.jpg' },
    { label: 'Community Welfare', value: '/gallery/community-welfare1.jpg' },
    { label: 'Environment & Plants', value: '/gallery/environment1.jpg' },
    { label: 'General Awareness', value: '/gallery/awerness1.jpg' },
  ];

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem('admin_authenticated');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }

    
    const savedEvents = localStorage.getItem('trust_events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    } else {
      const defaultEvents = [
        {
          id: 1,
          title: "Mega Youth Leadership Summit 2026",
          date: "2026-08-15",
          time: "09:30 AM - 04:30 PM",
          venue: "Kamarajar Arangam, Teynampet, Chennai",
          category: "Youth Leadership",
          desc: "An empowering full-day summit for college students and young professionals focusing on leadership skills and community welfare.",
          image: "/gallery/youth1.jpg"
        },
        {
          id: 2,
          title: "Free Mental Health Counselling Camp",
          date: "2026-07-28",
          time: "10:00 AM - 01:00 PM",
          venue: "Tamil Yazhi Trust Hall, Vadapalani",
          category: "Mental Health",
          desc: "A special open camp for students and families to interact with experienced psychologists.",
          image: "/gallery/mental-health1.jpg"
        }
      ];
      setEvents(defaultEvents);
      localStorage.setItem('trust_events', JSON.stringify(defaultEvents));
    }

    
    const savedVolunteers = localStorage.getItem('trust_volunteers');
    if (savedVolunteers) {
      setVolunteers(JSON.parse(savedVolunteers));
    } else {
      const defaultVolunteers = [
        { 
          id: 1, 
          name: "Anbarasan K", 
          fatherName: "Kailasam M",
          aadhaar: "345678901234",
          gender: "Male",
          dob: "1999-05-12",
          bloodGroup: "O+",
          email: "anbu@gmail.com", 
          phone: "+91 9876543210", 
          whatsapp: "+91 9876543210",
          education: "B.Sc Psychology",
          occupation: "Student",
          district: "Trichy",
          interest: "Education & Skill Development", 
          mode: "Fieldwork",
          experience: "Conducted weekend tuitions for children.",
          message: "I want to help poor children with their studies.",
          date: "2026-07-02", 
          status: "Approved" 
        },
        { 
          id: 2, 
          name: "Meera Krishnan", 
          fatherName: "Krishnan S",
          aadhaar: "567890123456",
          gender: "Female",
          dob: "1997-09-24",
          bloodGroup: "A+",
          email: "meera.k@yahoo.com", 
          phone: "+91 8765432109", 
          whatsapp: "+91 8765432109",
          education: "M.A. Social Work",
          occupation: "Counsellor",
          district: "Chennai",
          interest: "Mental Health Awareness", 
          mode: "Hybrid",
          experience: "Volunteered in COVID helpline support.",
          message: "Passionate about mental wellness drives.",
          date: "2026-07-05", 
          status: "Contacted" 
        }
      ];
      setVolunteers(defaultVolunteers);
      localStorage.setItem('trust_volunteers', JSON.stringify(defaultVolunteers));
    }

    
    const savedDonations = localStorage.getItem('trust_donations');
    if (savedDonations) {
      setDonations(JSON.parse(savedDonations));
    } else {
      const defaultDonations = [
        { id: 1, name: "Rajesh Kumar", email: "rajesh@gmail.com", amount: 5000, purpose: "Education & Kids Support", date: "2026-07-01", status: "Success" },
        { id: 2, name: "Tamilselvi M", email: "tamilselvi@hotmail.com", amount: 10000, purpose: "Community Welfare Schemes", date: "2026-07-03", status: "Success" }
      ];
      setDonations(defaultDonations);
      localStorage.setItem('trust_donations', JSON.stringify(defaultDonations));
    }

    
    const savedUploads = localStorage.getItem('trust_gallery_uploads');
    if (savedUploads) {
      setGalleryUploads(JSON.parse(savedUploads));
    } else {
      setGalleryUploads([]);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim().toLowerCase() === 'rdharish3@gmail.com' && password === 'yazhi@2026') {
      setIsLoggedIn(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      localStorage.setItem('role', 'admin');
      localStorage.setItem('isAdmin', 'true');
      showNotification('அட்மின் லாகின் வெற்றி பெற்றது!', 'success');
      setLoginError('');
    } else if (email.trim().toLowerCase() !== 'rdharish3@gmail.com') {
      setLoginError('அனுமதி மறுக்கப்பட்டது! இந்த மின்னஞ்சல் முகவரிக்கு அனுமதி இல்லை.');
    } else {
      setLoginError('தவறான கடவுச்சொல்! மீண்டும் முயற்சிக்கவும்.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('admin_authenticated');
    localStorage.removeItem('role');
    localStorage.removeItem('isAdmin');
    showNotification('வெற்றிகரமாக வெளியேறிவிட்டீர்கள்.', 'warning');
  };

  const showNotification = (message, variant = 'success') => {
    setNotification({ show: true, message, variant });
    setTimeout(() => {
      setNotification({ show: false, message: '', variant: 'success' });
    }, 4000);
  };

  const handleSaveEvent = (e) => {
    e.preventDefault();
    if (!eventForm.title || !eventForm.date || !eventForm.time || !eventForm.venue || !eventForm.desc) {
      showNotification('அனைத்து கட்டாயத் தகவல்களையும் நிரப்பவும்.', 'danger');
      return;
    }

    let updatedEvents = [...events];
    const imagePath = eventForm.image || "/gallery/education1.jpg";

    if (isEditingEvent) {
      updatedEvents = events.map(ev => ev.id === eventForm.id ? { ...eventForm, image: imagePath } : ev);
      showNotification('நிகழ்ச்சி வெற்றிகரமாக மேம்படுத்தப்பட்டது!');
    } else {
      const newEvent = {
        ...eventForm,
        id: Date.now(),
        image: imagePath
      };
      updatedEvents = [newEvent, ...events];
      showNotification('புதிய நிகழ்ச்சி சேர்க்கப்பட்டது!');
    }

    setEvents(updatedEvents);
    localStorage.setItem('trust_events', JSON.stringify(updatedEvents));
    setShowEventModal(false);
    resetEventForm();
  };

  const openEditEvent = (event) => {
    setEventForm(event);
    setIsEditingEvent(true);
    setShowEventModal(true);
  };

  const triggerDeleteEvent = (eventId) => {
    setConfirmModal({
      show: true,
      title: 'நிகழ்ச்சியை நீக்க வேண்டுமா?',
      message: 'இந்த வரவிருக்கும் நிகழ்ச்சியைப் பட்டியலில் இருந்து நிரந்தரமாக நீக்க விரும்புகிறீர்களா?',
      onConfirm: () => {
        const updatedList = events.filter(ev => ev.id !== eventId);
        setEvents(updatedList);
        localStorage.setItem('trust_events', JSON.stringify(updatedList));
        setConfirmModal({ show: false });
        showNotification('நிகழ்ச்சி வெற்றிகரமாக நீக்கப்பட்டது.', 'warning');
      }
    });
  };

  const resetEventForm = () => {
    setEventForm({
      id: null,
      title: '',
      date: '',
      time: '',
      venue: '',
      category: 'Education',
      desc: '',
      image: ''
    });
    setIsEditingEvent(false);
  };

  const handlePhotoUpload = (e) => {
    e.preventDefault();
    if (!galleryForm.title) {
      showNotification('தயவுசெய்து புகைப்படத்தின் தலைப்பை நிரப்பவும்.', 'danger');
      return;
    }

    let finalImageUrl = galleryForm.presetUrl;
    if (galleryForm.imageType === 'upload' && galleryForm.imagePreview) {
      finalImageUrl = galleryForm.imagePreview; 
    }

    const newUpload = {
      id: Date.now(),
      albumId: galleryForm.albumId,
      url: finalImageUrl,
      title: galleryForm.title,
      uploadedAt: new Date().toLocaleDateString()
    };

    const updatedUploads = [newUpload, ...galleryUploads];
    setGalleryUploads(updatedUploads);
    localStorage.setItem('trust_gallery_uploads', JSON.stringify(updatedUploads));
    
    showNotification('புகைப்படம் வெற்றிகரமாக ஆல்பத்தில் பதிவேற்றப்பட்டது!');
    setShowGalleryModal(false);
    
    setGalleryForm({
      albumId: 'education',
      title: '',
      imageFile: null,
      imagePreview: '',
      imageType: 'preset',
      presetUrl: '/gallery/education1.jpg'
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGalleryForm(prev => ({
          ...prev,
          imageFile: file,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteUploadedPhoto = (photoId) => {
    setConfirmModal({
      show: true,
      title: 'புகைப்படத்தை நீக்க வேண்டுமா?',
      message: 'இந்த புகைப்படத்தை ஆல்பத்திலிருந்து நிரந்தரமாக நீக்க விரும்புகிறீர்களா?',
      onConfirm: () => {
        const updatedList = galleryUploads.filter(photo => photo.id !== photoId);
        setGalleryUploads(updatedList);
        localStorage.setItem('trust_gallery_uploads', JSON.stringify(updatedList));
        setConfirmModal({ show: false });
        showNotification('புகைப்படம் வெற்றிகரமாக நீக்கப்பட்டது.', 'warning');
      }
    });
  };

  const updateVolunteerStatus = (volunteerId, newStatus) => {
    const updatedVolunteers = volunteers.map(vol => {
      if (vol.id === volunteerId) {
        return { ...vol, status: newStatus };
      }
      return vol;
    });
    setVolunteers(updatedVolunteers);
    localStorage.setItem('trust_volunteers', JSON.stringify(updatedVolunteers));
    showNotification(`தன்னார்வலர் நிலை '${newStatus}' என மாற்றப்பட்டது.`);
  };

  const deleteVolunteer = (volunteerId) => {
    setConfirmModal({
      show: true,
      title: 'தன்னார்வலரை நீக்க வேண்டுமா?',
      message: 'இந்த தன்னார்வலரின் பதிவை அட்மின் பக்கத்தில் இருந்து நீக்க விரும்புகிறீர்களா?',
      onConfirm: () => {
        const updatedList = volunteers.filter(vol => vol.id !== volunteerId);
        setVolunteers(updatedList);
        localStorage.setItem('trust_volunteers', JSON.stringify(updatedList));
        setConfirmModal({ show: false });
        showNotification('தன்னார்வலர் பதிவு நீக்கப்பட்டது.', 'warning');
      }
    });
  };

  const totalDonationsAmount = donations.reduce((sum, don) => sum + don.amount, 0);

  return (
    <section className="admin-section py-5 text-dark" style={{ background: 'linear-gradient(135deg, #fcedc9 0%, #dfb15b 100%)', minHeight: '100vh' }}>
      
      {}
      {notification.show && (
        <div className="position-fixed top-0 start-50 translate-middle-x mt-4 p-3 rounded shadow-lg text-white" 
             style={{ 
               backgroundColor: notification.variant === 'success' ? '#2e7d32' : notification.variant === 'warning' ? '#ef6c00' : '#c62828',
               border: '2.5px solid #dfb15b',
               zIndex: 2000,
               minWidth: '320px'
             }}>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-semibold">📢 {notification.message}</span>
            <Button variant="link" className="text-white p-0 ms-2 fw-bold" onClick={() => setNotification({ show: false })}>✕</Button>
          </div>
        </div>
      )}

      {}
      <Modal show={confirmModal.show} onHide={() => setConfirmModal({ show: false })} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#250407', borderBottom: '2px solid #dfb15b' }}>
          <Modal.Title className="text-warning font-cinzel fw-bold">{confirmModal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#1a0204', color: '#f7e7c4' }}>
          <p>{confirmModal.message}</p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#1a0204', borderTop: '1px solid rgba(223,177,91,0.2)' }}>
          <Button variant="secondary" onClick={() => setConfirmModal({ show: false })}>ரத்து செய்</Button>
          <Button variant="danger" className="fw-bold" onClick={confirmModal.onConfirm}>உறுதி செய்</Button>
        </Modal.Footer>
      </Modal>

      <Container>
        {!isLoggedIn ? (
          
          <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <Col xs={12} sm={10} md={6} lg={5}>
              <Card className="border-0 shadow-lg overflow-hidden" style={{ borderRadius: '15px', border: '2px solid #dfb15b' }}>
                <Card.Header className="text-center py-4" style={{ backgroundColor: '#250407', borderBottom: '3px solid #dfb15b' }}>
                  <h3 className="font-cinzel fw-bold text-uppercase m-0" style={{ color: '#dfb15b', letterSpacing: '1px' }}>
                    🔑 Yazhi Admin Login
                  </h3>
                  <small className="text-white-50">தமிழ் யாழி அறக்கட்டளை - நிர்வாகி உள்நுழைவு</small>
                </Card.Header>
                <Card.Body className="p-4" style={{ background: 'linear-gradient(135deg, #32080c, #1f0305)', color: '#f7e7c4' }}>
                  {loginError && <div className="alert alert-danger py-2 text-center small fw-bold" style={{ backgroundColor: '#c62828', border: 'none', color: '#fff' }}>{loginError}</div>}
                  
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label className="fw-semibold">Email Address (மின்னஞ்சல் முகவரி)</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="Admin Email" 
                        className="custom-placeholder" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formPassword">
                      <Form.Label className="fw-semibold">Password (கடவுச்சொல்)</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Enter password" 
                        className="custom-placeholder" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} 
                      />
                    </Form.Group>

                    <Button 
                      type="submit" 
                      className="w-100 font-cinzel fw-bold py-2 shadow"
                      style={{ backgroundColor: '#dfb15b', color: '#250407', border: 'none', borderRadius: '30px', transition: 'all 0.3s' }}
                    >
                      LOGIN TO DASHBOARD
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          
          <>
            <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3 pb-3" style={{ borderBottom: '2px solid #250407' }}>
              <div>
                <h1 className="display-5 fw-bold font-cinzel m-0" style={{ color: '#250407', fontFamily: "'Cinzel', serif" }}>
                  🏛️ TRUST ADMIN PORTAL
                </h1>
                <p className="lead m-0 fw-semibold text-dark-50" style={{ color: '#3d0c11' }}>நிர்வாகப் பணிக்கான கட்டுப்பாட்டு மையம்</p>
              </div>
              <Button 
                variant="danger" 
                onClick={handleLogout}
                className="font-cinzel fw-bold px-4 py-2 shadow-sm rounded-pill"
                style={{ border: '1.5px solid #dfb15b' }}
              >
                🔴 LOGOUT (வெளியேறு)
              </Button>
            </div>

            {}
            <Row className="g-4 mb-5">
              <Col xs={12} sm={6} md={3}>
                <Card className="border-0 shadow text-center h-100" style={{ backgroundColor: '#250407', border: '1.5px solid #dfb15b', borderRadius: '12px' }}>
                  <Card.Body className="p-3 text-white">
                    <div className="text-warning h2 mb-1">📅 {events.length}</div>
                    <div className="text-uppercase font-cinzel small tracking-wider" style={{ color: '#f7e7c4' }}>Upcoming Events</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Card className="border-0 shadow text-center h-100" style={{ backgroundColor: '#250407', border: '1.5px solid #dfb15b', borderRadius: '12px' }}>
                  <Card.Body className="p-3 text-white">
                    <div className="text-warning h2 mb-1">🤝 {volunteers.length}</div>
                    <div className="text-uppercase font-cinzel small tracking-wider" style={{ color: '#f7e7c4' }}>Registered Volunteers</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Card className="border-0 shadow text-center h-100" style={{ backgroundColor: '#250407', border: '1.5px solid #dfb15b', borderRadius: '12px' }}>
                  <Card.Body className="p-3 text-white">
                    <div className="text-warning h2 mb-1">💰 ₹{totalDonationsAmount.toLocaleString('en-IN')}</div>
                    <div className="text-uppercase font-cinzel small tracking-wider" style={{ color: '#f7e7c4' }}>Total Donations</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Card className="border-0 shadow text-center h-100" style={{ backgroundColor: '#250407', border: '1.5px solid #dfb15b', borderRadius: '12px' }}>
                  <Card.Body className="p-3 text-white">
                    <div className="text-warning h2 mb-1">📸 {galleryUploads.length}</div>
                    <div className="text-uppercase font-cinzel small tracking-wider" style={{ color: '#f7e7c4' }}>Uploaded Photos</div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {}
            <Tab.Container id="admin-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
              <Row className="g-4">
                <Col lg={3}>
                  <Card className="border-0 shadow p-2" style={{ backgroundColor: '#250407', border: '1px solid #dfb15b', borderRadius: '15px' }}>
                    <Nav variant="pills" className="flex-column gap-2 admin-nav-pills">
                      <Nav.Item>
                        <Nav.Link eventKey="dashboard" className="font-cinzel text-uppercase py-3 text-start border-0 text-white rounded">
                          📊 Overview & Quick Actions
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="events" className="font-cinzel text-uppercase py-3 text-start border-0 text-white rounded">
                          📅 Upcoming Events Manager
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="gallery" className="font-cinzel text-uppercase py-3 text-start border-0 text-white rounded">
                          📤 Photo Upload Center
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="volunteers" className="font-cinzel text-uppercase py-3 text-start border-0 text-white rounded">
                          🤝 Volunteers Directory
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="donations" className="font-cinzel text-uppercase py-3 text-start border-0 text-white rounded">
                          💰 Donation Records
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card>
                </Col>

                {}
                <Col lg={9}>
                  <Card className="border-0 shadow-lg p-4" style={{ backgroundColor: '#250407', border: '1px solid #dfb15b', borderRadius: '15px', color: '#f7e7c4' }}>
                    <Tab.Content>
                      
                      {}
                      <Tab.Pane eventKey="dashboard">
                        <h2 className="font-cinzel text-warning mb-4 pb-2" style={{ borderBottom: '1px solid rgba(223,177,91,0.2)' }}>
                          📊 OVERVIEW & RECENT ACTIVITIES
                        </h2>
                        <p style={{ color: '#f7e7c4', opacity: '0.9' }}>
                          தமிழ் யாழி அறக்கட்டளையின் தினசரி நிகழ்வுகள் மற்றும் நன்கொடைகளைக் கண்காணிக்க இந்த கட்டுப்பாட்டு மையம் வடிவமைக்கப்பட்டுள்ளது.
                        </p>
                        <Row className="g-4 mt-2">
                          <Col md={6}>
                            <Card className="border-0 h-100 p-3" style={{ backgroundColor: '#1a0204', border: '1px solid rgba(223, 177, 91, 0.3)' }}>
                              <h5 className="text-warning mb-3">⚡ Event Management</h5>
                              <p className="small text-white-50">புதிய நிகழ்வுகள் அல்லது திட்டங்களை வரவிருக்கும் நிகழ்வுகள் (Upcoming Events) பக்கத்திற்கு உடனடியாக வெளியிடவும்.</p>
                              <Button 
                                onClick={() => { resetEventForm(); setShowEventModal(true); }}
                                className="font-cinzel fw-bold border-0 mt-auto shadow"
                                style={{ backgroundColor: '#dfb15b', color: '#250407', borderRadius: '20px' }}
                              >
                                + Publish New Event
                              </Button>
                            </Card>
                          </Col>
                          
                          <Col md={6}>
                            <Card className="border-0 h-100 p-3" style={{ backgroundColor: '#1a0204', border: '1px solid rgba(223, 177, 91, 0.3)' }}>
                              <h5 className="text-warning mb-3">⚡ Photo Upload Center</h5>
                              <p className="small text-white-50">அறக்கட்டளை நடத்திய புதிய திட்டங்கள், கல்வி மற்றும் மனநல முகாம்களில் எடுக்கப்பட்ட புகைப்படங்களை ஆல்பத்தில் சேர்க்கவும்.</p>
                              <Button 
                                onClick={() => setShowGalleryModal(true)}
                                className="font-cinzel fw-bold border-0 mt-auto shadow"
                                style={{ backgroundColor: '#dfb15b', color: '#250407', borderRadius: '20px' }}
                              >
                                + Upload New Gallery Photo
                              </Button>
                            </Card>
                          </Col>
                        </Row>
                      </Tab.Pane>

                      {}
                      <Tab.Pane eventKey="events">
                        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                          <h2 className="font-cinzel text-warning m-0">📅 UPCOMING EVENTS MANAGER</h2>
                          <Button 
                            onClick={() => { resetEventForm(); setShowEventModal(true); }}
                            className="font-cinzel fw-bold border-0 shadow px-4 py-2"
                            style={{ backgroundColor: '#dfb15b', color: '#250407', borderRadius: '30px' }}
                          >
                            📅 ADD NEW EVENT
                          </Button>
                        </div>

                        <div className="table-responsive">
                          <Table bordered hover variant="dark" className="align-middle rounded overflow-hidden" style={{ borderColor: 'rgba(223,177,91,0.2)' }}>
                            <thead>
                              <tr style={{ backgroundColor: '#1a0204', color: '#dfb15b' }}>
                                <th>Category</th>
                                <th>Event Title</th>
                                <th>Date & Time</th>
                                <th>Venue</th>
                                <th className="text-center">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {events.map((ev) => (
                                <tr key={ev.id}>
                                  <td><Badge bg="warning" text="dark" className="fw-bold">{ev.category}</Badge></td>
                                  <td className="fw-semibold text-white">{ev.title}</td>
                                  <td className="small text-white-50">📅 {ev.date} <br /> ⏰ {ev.time}</td>
                                  <td className="small">{ev.venue}</td>
                                  <td className="text-center">
                                    <div className="d-flex justify-content-center gap-2">
                                      <Button variant="outline-warning" size="sm" onClick={() => openEditEvent(ev)}>✏️ Edit</Button>
                                      <Button variant="outline-danger" size="sm" onClick={() => triggerDeleteEvent(ev.id)}>🗑️ Delete</Button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </Tab.Pane>

                      {}
                      {}
                      <Tab.Pane eventKey="gallery">
                        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                          <h2 className="font-cinzel text-warning m-0">📤 PHOTO UPLOAD CENTER</h2>
                          <Button 
                            onClick={() => setShowGalleryModal(true)}
                            className="font-cinzel fw-bold border-0 shadow px-4 py-2"
                            style={{ backgroundColor: '#dfb15b', color: '#250407', borderRadius: '30px' }}
                          >
                            📤 UPLOAD NEW IMAGE
                          </Button>
                        </div>
                        <p className="text-white-50 small mb-4">வகுப்புகள் மற்றும் விழிப்புணர்வு முகாம்களின்போது எடுக்கப்பட்ட புகைப்படங்களை அந்தந்த பிரிவுகளின் கீழ் பதிவேற்றலாம்.</p>
                        
                        <h5 className="text-warning font-cinzel mb-3">📸 Uploaded Photos ({galleryUploads.length})</h5>
                        <Row className="g-3">
                          {galleryUploads.map((photo) => (
                            <Col xs={12} sm={6} md={4} key={photo.id}>
                              <Card className="border-0 shadow-sm overflow-hidden h-100" style={{ backgroundColor: '#1a0204', border: '1px solid rgba(223,177,91,0.2)' }}>
                                <div style={{ height: '140px', overflow: 'hidden' }}>
                                  <img src={photo.url} alt={photo.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                </div>
                                <Card.Body className="p-2 d-flex flex-column justify-content-between">
                                  <div>
                                    <Badge bg="warning" text="dark" className="mb-1 small text-uppercase">{photo.albumId}</Badge>
                                    <div className="small fw-semibold text-white text-truncate">{photo.title}</div>
                                  </div>
                                  <div className="d-flex justify-content-between align-items-center mt-2 pt-2 border-top border-secondary">
                                    <span className="text-white-50" style={{ fontSize: '0.75rem' }}>{photo.uploadedAt}</span>
                                    <Button variant="link" className="p-0 text-danger fw-bold text-decoration-none small" onClick={() => deleteUploadedPhoto(photo.id)}>
                                      🗑️ Remove
                                    </Button>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                          ))}
                          {galleryUploads.length === 0 && (
                            <Col xs={12} className="text-center py-5 text-white-50">
                              <p className="m-0">No photos uploaded yet. Use the "Upload New Image" button to start adding photos.</p>
                            </Col>
                          )}
                        </Row>
                      </Tab.Pane>

                      {}
                      <Tab.Pane eventKey="volunteers">
                        <h2 className="font-cinzel text-warning mb-4">🤝 REGISTERED VOLUNTEERS DIRECTORY</h2>
                        <p className="text-white-50 small mb-4">
                          விண்ணப்பித்த தன்னார்வலர்களின் விவரங்களைக் காண பெயரின் அருகிலுள்ள 🔍 விவரங்கள் பொத்தானை அழுத்தவும்.
                        </p>

                        <div className="table-responsive">
                          <Table bordered hover variant="dark" className="align-middle" style={{ borderColor: 'rgba(223,177,91,0.2)' }}>
                            <thead>
                              <tr style={{ backgroundColor: '#1a0204', color: '#dfb15b' }}>
                                <th>Name</th>
                                <th>Father's Name</th>
                                <th>Contact Details</th>
                                <th>Area of Interest</th>
                                <th>Status</th>
                                <th className="text-center">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {volunteers.map((vol) => (
                                <tr key={vol.id}>
                                  <td className="fw-semibold text-white">
                                    {vol.name}
                                  </td>
                                  <td className="text-white-50">{vol.fatherName || 'N/A'}</td>
                                  <td className="small">
                                    📧 {vol.email} <br />
                                    📞 {vol.phone}
                                  </td>
                                  <td><Badge bg="secondary" className="p-2">{vol.interest}</Badge></td>
                                  <td>
                                    <Badge 
                                      bg={vol.status === 'Approved' ? 'success' : vol.status === 'Contacted' ? 'info' : 'warning'} 
                                      text="dark"
                                      className="fw-bold px-2 py-1"
                                    >
                                      {vol.status}
                                    </Badge>
                                  </td>
                                  <td className="text-center">
                                    <div className="d-flex justify-content-center gap-2 flex-wrap">
                                      <Button 
                                        variant="warning" 
                                        size="sm" 
                                        className="fw-bold text-dark" 
                                        onClick={() => {
                                          setSelectedVolunteer(vol);
                                          setShowDetailsModal(true);
                                        }}
                                      >
                                        🔍 View Details
                                      </Button>
                                      <Button variant="outline-success" size="sm" onClick={() => updateVolunteerStatus(vol.id, 'Approved')}>✓ Approve</Button>
                                      <Button variant="outline-danger" size="sm" onClick={() => deleteVolunteer(vol.id)}>🗑️ Remove</Button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </Tab.Pane>

                      {}
                      <Tab.Pane eventKey="donations">
                        <h2 className="font-cinzel text-warning mb-4">💰 RECEIVED DONATION RECORDS</h2>
                        <div className="table-responsive">
                          <Table bordered hover variant="dark" className="align-middle" style={{ borderColor: 'rgba(223,177,91,0.2)' }}>
                            <thead>
                              <tr style={{ backgroundColor: '#1a0204', color: '#dfb15b' }}>
                                <th>Donor Name</th>
                                <th>Email</th>
                                <th className="text-end">Amount (₹)</th>
                                <th>Supported Cause</th>
                                <th>Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              {donations.map((don) => (
                                <tr key={don.id}>
                                  <td className="fw-semibold text-white">{don.name}</td>
                                  <td className="small text-white-50">{don.email}</td>
                                  <td className="text-end fw-bold text-warning">₹{don.amount.toLocaleString('en-IN')}</td>
                                  <td className="small">{don.purpose}</td>
                                  <td className="small text-white-50">{don.date}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Card>
                </Col>
              </Row>
            </Tab.Container>
          </>
        )}

        {}
        {}
        <Modal show={showEventModal} onHide={() => setShowEventModal(false)} centered size="lg">
          <Modal.Header closeButton style={{ backgroundColor: '#250407', borderBottom: '2px solid #dfb15b' }}>
            <Modal.Title className="font-cinzel fw-bold text-warning text-uppercase">
              {isEditingEvent ? "✏️ Edit Event" : "📅 Publish Event"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: '#1a0204', color: '#f7e7c4' }}>
            <Form onSubmit={handleSaveEvent}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Event Title (நிகழ்ச்சி பெயர்)</Form.Label>
                <Form.Control type="text" value={eventForm.title} onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Date</Form.Label>
                    <Form.Control type="date" value={eventForm.date} onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Time</Form.Label>
                    <Form.Control type="text" value={eventForm.time} onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Venue (இடம்)</Form.Label>
                <Form.Control type="text" value={eventForm.venue} onChange={(e) => setEventForm({ ...eventForm, venue: e.target.value })} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Category</Form.Label>
                    <Form.Select value={eventForm.category} onChange={(e) => setEventForm({ ...eventForm, category: e.target.value })} style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }}>
                      <option value="Education">Education</option>
                      <option value="Mental Health">Mental Health</option>
                      <option value="Youth Leadership">Youth Leadership</option>
                      <option value="Environment">Environment</option>
                      <option value="Community Welfare">Community Welfare</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Banner Image URL</Form.Label>
                    <Form.Control type="text" value={eventForm.image} onChange={(e) => setEventForm({ ...eventForm, image: e.target.value })} style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Description</Form.Label>
                <Form.Control as="textarea" rows={4} value={eventForm.desc} onChange={(e) => setEventForm({ ...eventForm, desc: e.target.value })} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
              </Form.Group>
              <div className="text-end">
                <Button variant="secondary" onClick={() => setShowEventModal(false)} className="me-2">Cancel</Button>
                <Button type="submit" style={{ backgroundColor: '#dfb15b', color: '#250407', border: 'none', fontWeight: 'bold' }}>Save</Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        {}
        <Modal show={showGalleryModal} onHide={() => setShowGalleryModal(false)} centered size="md">
          <Modal.Header closeButton style={{ backgroundColor: '#250407', borderBottom: '2px solid #dfb15b' }}>
            <Modal.Title className="font-cinzel fw-bold text-warning text-uppercase">
              📤 Upload Event Photo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: '#1a0204', color: '#f7e7c4' }}>
            <Form onSubmit={handlePhotoUpload}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Select Album Category (ஆல்பம் பிரிவு)</Form.Label>
                <Form.Select 
                  value={galleryForm.albumId} 
                  onChange={(e) => setGalleryForm({ ...galleryForm, albumId: e.target.value })}
                  style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }}
                >
                  <option value="mental-health">Mental Health Awareness</option>
                  <option value="education">Education & Skill Development</option>
                  <option value="youth-leadership">Youth Leadership & Empowerment</option>
                  <option value="community-welfare">Community Welfare</option>
                  <option value="environment">Environment & Sustainability</option>
                  <option value="awareness">General Awareness Program</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Photo Title / Caption (தலைப்பு)</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter a caption for the photo" 
                  value={galleryForm.title}
                  onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                  required
                  style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Image Source Method (மூலம்)</Form.Label>
                <Form.Select 
                  value={galleryForm.imageType}
                  onChange={(e) => setGalleryForm({ ...galleryForm, imageType: e.target.value })}
                  style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }}
                >
                  <option value="preset">Use Preset Cover Assets</option>
                  <option value="upload">Upload Computer File (உள்நாட்டு கோப்பு)</option>
                </Form.Select>
              </Form.Group>

              {galleryForm.imageType === 'preset' ? (
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Choose Preset Cover Image</Form.Label>
                  <Form.Select 
                    value={galleryForm.presetUrl}
                    onChange={(e) => setGalleryForm({ ...galleryForm, presetUrl: e.target.value })}
                    style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }}
                  >
                    {presetImages.map((img, idx) => (
                      <option key={idx} value={img.value}>{img.label}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              ) : (
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Select Local Image File</Form.Label>
                  <Form.Control 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }}
                  />
                  {galleryForm.imagePreview && (
                    <div className="mt-3 text-center border p-2 rounded" style={{ borderColor: 'rgba(223,177,91,0.2)' }}>
                      <span className="small text-white-50 d-block mb-2">Image Preview:</span>
                      <img src={galleryForm.imagePreview} alt="Preview" style={{ maxHeight: '150px', maxWidth: '100%' }} />
                    </div>
                  )}
                </Form.Group>
              )}

              <div className="text-end mt-4 pt-2 border-top border-secondary">
                <Button variant="secondary" onClick={() => setShowGalleryModal(false)} className="me-2" style={{ borderRadius: '20px' }}>Cancel</Button>
                <Button type="submit" style={{ backgroundColor: '#dfb15b', color: '#250407', border: 'none', fontWeight: 'bold', borderRadius: '20px' }}>Upload Now</Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        {}
        <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)} size="lg" centered>
          <Modal.Header closeButton style={{ backgroundColor: '#250407', borderBottom: '2px solid #dfb15b' }}>
            <Modal.Title className="font-cinzel fw-bold text-warning text-uppercase">
              🤝 Volunteer Full Profile / முழு விவரங்கள்
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: '#1a0204', color: '#f7e7c4' }}>
            {selectedVolunteer ? (
              <Container fluid className="py-2">
                <Row className="g-4">
                  <Col md={6} style={{ borderRight: '1px solid rgba(223,177,91,0.2)' }}>
                    <h5 className="text-warning font-cinzel border-bottom pb-2 mb-3">👨‍💼 Personal Information</h5>
                    <p className="mb-2"><strong>Full Name / பெயர்:</strong> <span className="text-white">{selectedVolunteer.name}</span></p>
                    <p className="mb-2"><strong>Father's Name / தந்தை பெயர்:</strong> <span className="text-white">{selectedVolunteer.fatherName || 'N/A'}</span></p>
                    <p className="mb-2"><strong>Aadhaar Number / ஆதார் எண்:</strong> <span className="text-white fw-bold">{selectedVolunteer.aadhaar || 'N/A'}</span></p>
                    <p className="mb-2"><strong>Gender / பாலினம்:</strong> <span className="text-white">{selectedVolunteer.gender || 'N/A'}</span></p>
                    <p className="mb-2"><strong>DOB / பிறந்த தேதி:</strong> <span className="text-white">{selectedVolunteer.dob || 'N/A'}</span></p>
                    <p className="mb-2"><strong>Blood Group / இரத்த வகை:</strong> <span className="text-danger fw-bold">{selectedVolunteer.bloodGroup || 'N/A'}</span></p>
                    <p className="mb-2"><strong>District / மாவட்டம்:</strong> <span className="text-white">{selectedVolunteer.district || 'N/A'}</span></p>
                  </Col>
                  
                  <Col md={6}>
                    <h5 className="text-warning font-cinzel border-bottom pb-2 mb-3">📞 Contact & Services</h5>
                    <p className="mb-2"><strong>Email / மின்னஞ்சல்:</strong> <span className="text-white">{selectedVolunteer.email}</span></p>
                    <p className="mb-2"><strong>Mobile No / கைபேசி:</strong> <span className="text-white">{selectedVolunteer.phone}</span></p>
                    <p className="mb-2"><strong>WhatsApp No / வாட்ஸ்அப்:</strong> <span className="text-white">{selectedVolunteer.whatsapp || 'N/A'}</span></p>
                    <p className="mb-2"><strong>Education / கல்வி:</strong> <span className="text-white">{selectedVolunteer.education || 'N/A'}</span></p>
                    <p className="mb-2"><strong>Occupation / தொழில்:</strong> <span className="text-white">{selectedVolunteer.occupation || 'N/A'}</span></p>
                    <p className="mb-2"><strong>Interest / சேவை விருப்பம்:</strong> <span className="text-warning fw-bold">{selectedVolunteer.interest}</span></p>
                    <p className="mb-2"><strong>Mode / பங்களிப்பு முறை:</strong> <span className="text-white fw-bold">{selectedVolunteer.mode || 'N/A'}</span></p>
                  </Col>
                </Row>
                <hr style={{ borderColor: 'rgba(223,177,91,0.2)' }} />
                <Row className="mt-3">
                  <Col xs={12}>
                    <h5 className="text-warning font-cinzel">💼 Previous Experience / தன்னார்வ அனுபவம்:</h5>
                    <div className="p-3 rounded mb-3" style={{ backgroundColor: '#250407', border: '1px solid rgba(223,177,91,0.2)' }}>
                      <p className="m-0 text-white-50" style={{ fontSize: '0.9rem' }}>{selectedVolunteer.experience || 'No previous experience shared.'}</p>
                    </div>

                    <h5 className="text-warning font-cinzel">✍️ Why do you want to join us? / ஏன் இணைய விரும்புகிறார்?</h5>
                    <div className="p-3 rounded" style={{ backgroundColor: '#250407', border: '1px solid rgba(223,177,91,0.2)' }}>
                      <p className="m-0 text-white" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{selectedVolunteer.message || 'No statement provided.'}</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            ) : (
              <p className="text-center">No volunteer selected.</p>
            )}
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: '#1a0204', borderTop: '1px solid rgba(223,177,91,0.2)' }}>
            <Button variant="outline-warning" onClick={() => setShowDetailsModal(false)} style={{ borderRadius: '20px' }}>
              Close / மூடு
            </Button>
          </Modal.Footer>
        </Modal>

      </Container>
    </section>
  );
}

export default Admin;