import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Button, Form, Badge } from 'react-bootstrap';

function Events() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [events, setEvents] = useState([]);
  
 
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');
  const [category, setCategory] = useState('Education');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');

  const defaultEvents = [
    {
      id: 1,
      title: "Mega Youth Leadership Summit 2026",
      date: "2026-08-15",
      time: "09:30 AM - 04:30 PM",
      venue: "Kamarajar Arangam, Teynampet, Chennai",
      category: "Youth Leadership",
      desc: "An empowering full-day summit for college students and young professionals focusing on leadership skills, personality development, and community welfare.",
      image: "/gallery/youth1.jpg"
    },
    {
      id: 2,
      title: "Free Mental Health & Stress Relief Counselling Camp",
      date: "2026-07-28",
      time: "10:00 AM - 01:00 PM",
      venue: "Tamil Yazhi Trust Hall, Vadapalani",
      category: "Mental Health",
      desc: "A special open camp for students and families to interact with experienced psychologists. Get free personal counselling and stress management guidance.",
      image: "/gallery/mental-health1.jpg"
    },
    {
      id: 3,
      title: "Green Future - Environmental Tree Plantation Drive",
      date: "2026-09-05",
      time: "07:00 AM - 10:00 AM",
      venue: "Lake Area, Velachery, Chennai",
      category: "Environment",
      desc: "Let's join hands to make our city green. Planting 500 saplings with water conservation awareness sessions for school children.",
      image: "/gallery/environment1.jpg"
    }
  ];

  useEffect(() => {
    
    const role = localStorage.getItem('role');
    const adminFlag = localStorage.getItem('isAdmin');
    if (role === 'admin' || adminFlag === 'true') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }

    
    const savedEvents = localStorage.getItem('trust_events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    } else {
      setEvents(defaultEvents);
      localStorage.setItem('trust_events', JSON.stringify(defaultEvents));
    }
  }, []);

  const saveToStorage = (updatedList) => {
    setEvents(updatedList);
    localStorage.setItem('trust_events', JSON.stringify(updatedList));
  };


  
  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!title || !date || !time || !venue || !desc) {
      return;
    }

    const newEvent = {
      id: Date.now(),
      title,
      date,
      time,
      venue,
      category,
      desc,
      image: image || "/gallery/education1.jpg" 
    };

    const updatedList = [newEvent, ...events];
    saveToStorage(updatedList);
    setShowAddModal(false);
    resetForm();
  };

  
  const openEditModal = (event) => {
    setCurrentEvent(event);
    setTitle(event.title);
    setDate(event.date);
    setTime(event.time);
    setVenue(event.venue);
    setCategory(event.category);
    setDesc(event.desc);
    setImage(event.image);
    setShowEditModal(true);
  };

  
  const handleUpdateEvent = (e) => {
    e.preventDefault();
    const updatedList = events.map(ev => {
      if (ev.id === currentEvent.id) {
        return {
          ...ev,
          title,
          date,
          time,
          venue,
          category,
          desc,
          image
        };
      }
      return ev;
    });

    saveToStorage(updatedList);
    setShowEditModal(false);
    resetForm();
  };

  
  const handleDeleteEvent = (eventId) => {
    const updatedList = events.filter(ev => ev.id !== eventId);
    saveToStorage(updatedList);
    setShowEditModal(false);
  };

  
  const resetForm = () => {
    setTitle('');
    setDate('');
    setTime('');
    setVenue('');
    setCategory('Education');
    setDesc('');
    setImage('');
    setCurrentEvent(null);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="events-section py-5 text-dark position-relative" style={{ background: 'linear-gradient(135deg, #fcedc9 0%, #dfb15b 100%)', minHeight: '100vh' }}>
      
      <Container>
        
        {}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold font-cinzel" style={{ color: '#250407', fontFamily: "'Cinzel', serif, Georgia" }}>UPCOMING EVENTS</h1>
          <p className="lead mt-2 fw-semibold" style={{ color: '#3d0c11', opacity: '0.8' }}>Be a part of our journey to make a lasting positive change.</p>
          <div className="heading-line mx-auto mb-4" style={{ width: '100px', height: '3px', backgroundColor: '#250407' }}></div>
          
          {}
          {isAdmin && (
            <Button 
              onClick={() => { resetForm(); setShowAddModal(true); }}
              className="font-cinzel fw-bold px-4 py-2 mt-2 shadow"
              style={{ backgroundColor: '#250407', color: '#dfb15b', border: '2px solid #dfb15b', borderRadius: '30px' }}
              onMouseEnter={(e) => { e.target.style.backgroundColor = '#dfb15b'; e.target.style.color = '#250407'; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = '#250407'; e.target.style.color = '#dfb15b'; }}
            >
              📅 ADD NEW UPCOMING EVENT
            </Button>
          )}
        </div>

        {}
        <Row className="g-4 justify-content-center">
          {events.map((ev) => (
            <Col xs={12} lg={10} key={ev.id}>
              {}
              <Card className="border-0 shadow-lg overflow-hidden" style={{ backgroundColor: '#250407', border: '1px solid #dfb15b', borderRadius: '15px' }}>
                <Row className="g-0">
                  
                  {}
                  <Col md={4} className="position-relative" style={{ minHeight: '220px' }}>
                    <Card.Img src={ev.image} alt={ev.title} style={{ objectFit: 'cover', height: '100%', width: '100%', minHeight: '100%' }} />
                    <Badge bg="warning" text="dark" className="position-absolute top-0 start-0 m-3 px-3 py-2 fw-bold" style={{ fontSize: '0.8rem', borderRadius: '5px' }}>
                      {ev.category}
                    </Badge>
                  </Col>

                  {}
                  <Col md={8}>
                    <Card.Body className="p-4 d-flex flex-column h-100 justify-content-between text-white" style={{ background: 'linear-gradient(135deg, #32080c, #1f0305)' }}>
                      <div>
                        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                          <span style={{ color: '#dfb15b', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>
                            📅 {formatDate(ev.date)} | ⏰ {ev.time}
                          </span>
                          
                          {}
                          {isAdmin && (
                            <Button 
                              variant="outline-warning" 
                              size="sm" 
                              onClick={() => openEditModal(ev)}
                              style={{ borderRadius: '20px', fontSize: '0.75rem' }}
                            >
                              ✏️ Edit / Delete
                            </Button>
                          )}
                        </div>

                        <Card.Title className="font-cinzel fw-bold mb-3" style={{ color: '#dfb15b', fontSize: '1.25rem' }}>
                          {ev.title}
                        </Card.Title>

                        <Card.Text className="small" style={{ color: '#f7e7c4', opacity: '0.9', textAlign: 'justify', lineHeight: '1.6' }}>
                          {ev.desc}
                        </Card.Text>
                      </div>

                      <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(223, 177, 91, 0.2)' }}>
                        <span className="small text-white-50">📍 Venue: </span>
                        <strong style={{ color: '#f7e7c4' }}>{ev.venue}</strong>
                      </div>
                    </Card.Body>
                  </Col>

                </Row>
              </Card>
            </Col>
          ))}

          {events.length === 0 && (
            <Col className="text-center py-5">
              <h3 className="fw-semibold text-dark">No upcoming events scheduled currently.</h3>
            </Col>
          )}
        </Row>

        {}
        <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
          <Modal.Header closeButton style={{ backgroundColor: '#250407', borderBottom: '2px solid #dfb15b' }}>
            <Modal.Title className="font-cinzel fw-bold text-uppercase" style={{ color: '#dfb15b', fontSize: '1.2rem' }}>
              Add New Upcoming Event
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: '#1a0204', color: '#f7e7c4' }}>
            <Form onSubmit={handleAddEvent}>
              
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Event Title</Form.Label>
                <Form.Control type="text" placeholder="Enter event name" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Event Date</Form.Label>
                    <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Time (e.g., 10 AM - 1 PM)</Form.Label>
                    <Form.Control type="text" placeholder="Enter timings" value={time} onChange={(e) => setTime(e.target.value)} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Venue / Address</Form.Label>
                <Form.Control type="text" placeholder="Enter location" value={venue} onChange={(e) => setVenue(e.target.value)} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Category</Form.Label>
                    <Form.Select value={category} onChange={(e) => setCategory(e.target.value)} style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }}>
                      <option value="Education">Education & Skills</option>
                      <option value="Mental Health">Mental Health</option>
                      <option value="Youth Leadership">Youth Leadership</option>
                      <option value="Community Welfare">Community Welfare</option>
                      <option value="Environment">Environment</option>
                      <option value="Awareness">Awareness Program</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Banner Image URL</Form.Label>
                    <Form.Control type="text" placeholder="/gallery/education1.jpg" value={image} onChange={(e) => setImage(e.target.value)} style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Event Details / Description</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Describe the event" value={desc} onChange={(e) => setDesc(e.target.value)} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
              </Form.Group>

              <div className="text-end">
                <Button variant="secondary" onClick={() => setShowAddModal(false)} className="me-2" style={{ borderRadius: '20px' }}>Cancel</Button>
                <Button type="submit" style={{ backgroundColor: '#dfb15b', color: '#250407', border: 'none', fontWeight: 'bold', borderRadius: '20px' }}>Publish Event</Button>
              </div>

            </Form>
          </Modal.Body>
        </Modal>

        {}
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
          <Modal.Header closeButton style={{ backgroundColor: '#250407', borderBottom: '2px solid #dfb15b' }}>
            <Modal.Title className="font-cinzel fw-bold text-uppercase" style={{ color: '#dfb15b', fontSize: '1.2rem' }}>
              Edit Event / Manage
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: '#1a0204', color: '#f7e7c4' }}>
            <Form onSubmit={handleUpdateEvent}>
              
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Event Title</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Event Date</Form.Label>
                    <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Time</Form.Label>
                    <Form.Control type="text" value={time} onChange={(e) => setTime(e.target.value)} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Venue</Form.Label>
                <Form.Control type="text" value={venue} onChange={(e) => setVenue(e.target.value)} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Category</Form.Label>
                    <Form.Select value={category} onChange={(e) => setCategory(e.target.value)} style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }}>
                      <option value="Education">Education & Skills</option>
                      <option value="Mental Health">Mental Health</option>
                      <option value="Youth Leadership">Youth Leadership</option>
                      <option value="Community Welfare">Community Welfare</option>
                      <option value="Environment">Environment</option>
                      <option value="Awareness">Awareness Program</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Banner Image URL</Form.Label>
                    <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Event Details</Form.Label>
                <Form.Control as="textarea" rows={4} value={desc} onChange={(e) => setDesc(e.target.value)} required style={{ backgroundColor: '#250407', color: '#f7e7c4', border: '1px solid #dfb15b' }} />
              </Form.Group>

              <div className="d-flex justify-content-between">
                {}
                <Button 
                  variant="danger" 
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this event?")) {
                      handleDeleteEvent(currentEvent.id);
                    }
                  }}
                  style={{ borderRadius: '20px', fontWeight: 'bold' }}
                >
                  🗑️ Delete Event
                </Button>

                <div className="text-end">
                  <Button variant="secondary" onClick={() => setShowEditModal(false)} className="me-2" style={{ borderRadius: '20px' }}>Cancel</Button>
                  <Button type="submit" style={{ backgroundColor: '#dfb15b', color: '#250407', border: 'none', fontWeight: 'bold', borderRadius: '20px' }}>Save Changes</Button>
                </div>
              </div>

            </Form>
          </Modal.Body>
        </Modal>

      </Container>
    </section>
  );
}

export default Events;