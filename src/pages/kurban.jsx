import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import kurban1 from '../assets/kurban1.jpeg';
import kurban2 from '../assets/kurban2.jpeg';
import kurban3 from '../assets/kurban3.png';
const kurban = () => {
  return (
    <div>
          <Row>
              <Col xs={12} md={4}>
                  <img src={kurban1} alt="kurban1" className="img-fluid" data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" />
              </Col>
              <Col xs={12} md={4}>
                  <img src={kurban2} alt="kurban2" className="img-fluid" data-aos="flip-left" data-aos-delay="60" data-aos-duration="1100" />
              </Col>
              <Col xs={12} md={4}>
                  <img src={kurban3} alt="kurban3" className="img-fluid" data-aos="flip-left" data-aos-delay="70" data-aos-duration="1200" />
              </Col>
              <Col xs={12} md={4}>
                  <img src={kurban1} alt="kurban1" className="img-fluid" data-aos="flip-left" data-aos-delay="80" data-aos-duration="1300" />
              </Col>
              <Col xs={12} md={4}>
                  <img src={kurban2} alt="kurban2" className="img-fluid" data-aos="flip-left" data-aos-delay="90" data-aos-duration="1400" />
              </Col>
              <Col xs={12} md={4}>
                  <img src={kurban3} alt="kurban3" className="img-fluid" data-aos="flip-left" data-aos-delay="100" data-aos-duration="1500" />
              </Col>
          </Row>
    </div>
  )
}

export default kurban
