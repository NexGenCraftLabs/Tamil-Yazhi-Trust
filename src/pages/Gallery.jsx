import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const albumsData = [
    {
      id: "mental-health",
      name: "Mental Health Awareness",
      coverImage: "/gallery/mental-health1.jpg",
      images: Array.from({ length: 35 }, (_, i) => ({
        id: `mental-${i + 1}`,
        url: `/gallery/mental-health${i + 1}.jpg`,
        title: `Mental Health Awareness - Session ${i + 1}`
      }))
    },
    {
      id: "education",
      name: "Education & Skill Development",
      coverImage: "/gallery/education1.jpg",
      images: Array.from({ length: 29 }, (_, i) => ({
        id: `edu-${i + 1}`,
        url: `/gallery/education${i + 1}.jpg`,
        title: `Education & Skill Development - Event ${i + 1}`
      }))
    },
    {
      id: "youth-leadership",
      name: "Youth Leadership & Empowerment",
      coverImage: "/gallery/youth1.jpg",
      images: Array.from({ length: 29 }, (_, i) => ({
        id: `youth-${i + 1}`,
        url: `/gallery/youth${i + 1}.jpg`,
        title: `Youth Leadership & Empowerment - Activity ${i + 1}`
      }))
    },
    {
      id: "community-welfare",
      name: "Community Welfare",
      coverImage: "/gallery/community-welfare1.jpg",
      images: Array.from({ length: 22 }, (_, i) => ({
        id: `comm-${i + 1}`,
        url: `/gallery/community-welfare${i + 1}.jpg`,
        title: `Community Welfare Support - Part ${i + 1}`
      }))
    },
    {
      id: "environment",
      name: "Environment & Sustainability",
      coverImage: "/gallery/environment1.jpg",
      images: Array.from({ length: 23 }, (_, i) => ({
        id: `env-${i + 1}`,
        url: `/gallery/environment${i + 1}.jpg`,
        title: `Environmental Initiative - Project ${i + 1}`
      }))
    },
    {
      id: "awareness",
      name: "General Awareness Program",
      coverImage: "/gallery/awerness1.jpg",
      images: Array.from({ length: 19 }, (_, i) => ({
        id: `aware-${i + 1}`,
        url: `/gallery/awerness${i + 1}.jpg`,
        title: `Awareness Campaign - Drive ${i + 1}`
      }))
    }
  ];

  const handleImageClick = (img, title) => {
    setSelectedImg(img);
    setSelectedTitle(title);
    setShowModal(true);
  };

  return (
    <section className="gallery-section py-5 text-dark" style={{ background: 'linear-gradient(135deg, #fcedc9 0%, #dfb15b 100%)', minHeight: '100vh' }}>
      <Container>
        
        {!selectedAlbum ? (
          <>
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold font-cinzel" style={{ color: '#250407', fontFamily: "'Cinzel', serif, Georgia" }}>OUR GALLERY</h1>
              <p className="lead mt-2 fw-semibold" style={{ color: '#3d0c11', opacity: '0.8' }}>Select a category to view the related event photos.</p>
              <div className="heading-line mx-auto" style={{ width: '100px', height: '3px', backgroundColor: '#250407' }}></div>
            </div>

            <Row className="g-4">
              {albumsData.map((album) => (
                <Col xs={12} sm={6} md={4} key={album.id}>
                  <Card 
                    className="border-0 shadow-lg position-relative overflow-hidden h-100" 
                    style={{ backgroundColor: '#250407', border: '1px solid #dfb15b', borderRadius: '15px', cursor: 'pointer', transition: 'all 0.3s' }}
                    onClick={() => setSelectedAlbum(album)}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                      <Card.Img variant="top" src={album.coverImage} alt={album.name} style={{ objectFit: 'cover', height: '100%', width: '100%', opacity: '0.85' }} />
                      <span className="position-absolute bottom-0 end-0 bg-warning text-dark px-3 py-1 fw-bold small m-3 rounded-pill shadow">
                        {album.images.length} Photos
                      </span>
                    </div>

                    <Card.Body className="text-center p-3 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(180deg, #32080c, #1f0305)', borderTop: '2px solid #dfb15b' }}>
                      <Card.Title className="m-0 font-cinzel fw-bold text-uppercase" style={{ color: '#dfb15b', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
                        📁 {album.name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <>
            <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
              <Button 
                onClick={() => setSelectedAlbum(null)} 
                className="font-cinzel fw-bold px-3 py-2 text-black rounded-pill"
                style={{ backgroundColor: '#250407', color: '#dfb15b', border: '2px solid #dfb15b', fontSize: '0.85rem' }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#e2980f'; e.target.style.color = '#caae10'; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = '#caae10'; e.target.style.color = '#e2980f'; }}
              >
                ⬅ BACK TO ALBUMS
              </Button>
              
              <h2 className="font-cinzel fw-bold m-0 text-uppercase text-center" style={{ color: '#250407', borderBottom: '2px solid #250407', paddingBottom: '5px' }}>
                {selectedAlbum.name}
              </h2>
              <div style={{ width: '120px' }} className="d-none d-md-block"></div>
            </div>

            <Row className="g-4">
              {selectedAlbum.images.map((img) => (
                <Col xs={12} sm={6} md={4} lg={3} key={img.id}>
                  <Card 
                    className="border-0 shadow position-relative overflow-hidden h-100" 
                    style={{ backgroundColor: '#250407', border: '1px solid #dfb15b', borderRadius: '12px', cursor: 'pointer', transition: 'transform 0.2s' }}
                    onClick={() => handleImageClick(img.url, img.title)}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div style={{ height: '180px', overflow: 'hidden' }}>
                      <Card.Img variant="top" src={img.url} alt={img.title} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                    </div>
                    <Card.Body className="text-center p-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#1a0204', borderTop: '1px solid #dfb15b' }}>
                      <small className="m-0 fw-semibold" style={{ color: '#f7e7c4', fontSize: '0.75rem', lineHeight: '1.4' }}>
                        {img.title}
                      </small>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}

        <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg" contentClassName="bg-transparent border-0">
          <Modal.Body className="p-0 position-relative text-center">
            <button 
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute', right: '15px', top: '15px', 
                background: '#250407', color: '#dfb15b', 
                border: '2px solid #dfb15b', borderRadius: '50%', 
                width: '35px', height: '35px', fontWeight: 'bold', zIndex: 10
              }}
            >
              ✕
            </button>
            <img src={selectedImg} alt={selectedTitle} className="img-fluid rounded shadow-lg" style={{ border: '4px solid #dfb15b', maxHeight: '80vh', objectFit: 'contain' }} />
            <div className="mt-3 p-2 rounded mx-auto" style={{ backgroundColor: '#250407', color: '#dfb15b', border: '1px solid #dfb15b', maxWidth: '80%' }}>
              <h6 className="m-0 font-cinzel fw-bold">{selectedTitle}</h6>
            </div>
          </Modal.Body>
        </Modal>

      </Container>
    </section>
  );
}

export default Gallery;