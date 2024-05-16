import React, { Component, Suspense } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import Button from 'react-bootstrap/Button';
import gambar1 from '../assets/gambar 1.png';
import gambar2 from '../assets/gambar 2.png';
import gambar3 from '../assets/gambar 3.png';
import './Home.css';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Kurban1445H = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("./kurban")), 3000);
    });
});

class Home extends Component {

    render (){
        return (
            <div className="text-center justify-content-center">
                <section>
                    <Container className="justify-content-center m-auto">
                        <Carousel data-bs-theme="dark" data-aos="fade" data-aos-duration="900">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={gambar1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={gambar2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={gambar3}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </section>

                <br />
                <section className="">
                    <Container className="justify-content-center m-auto">
                        <Row>
                            <Col className="text-start pt-3" id="KurbanVideo" data-aos="fade-right" data-aos-duration="1000">
                                <h1 className="text-success text-bold" id="berkurban">Kurban Bukti Ketaqwaan Kepada Allah</h1>
                                <p>Berkurban sebagai bukti cinta sekaligus ajang pembuktian, kecintaan kita kepada Allah dan bukti ketaqwaan dalam menunaikan semua perintahNya.

                                    “Daging daging qurban dan darahnya itu sekali-kali tidak dapat mencapai keridhaan Allah, tetapi ketakwaan dari kamulah yang dapat mencapainya.” (Al Hajj 37)</p>
                                <Button variant="success" size="lg" className="btn mt-1 btn-md">Tentang Kami</Button>
                            </Col>

                            <Col >
                                <Ratio aspectRatio="16x9" className="justify-content-center text-center mt-4" data-aos="fade-left" data-aos-duration="1000">
                                    <iframe width="350" height="115" src="https://www.youtube.com/embed/tyNXxd0AhxM?si=Se0aZq3S_zc_x5x9" title="YouTube video player" allowfullscreen data-aos="fade-left" data-aos-duration="1000"></iframe>
                                </Ratio>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <br />
                <section>
                    <Container className="justify-content-center text-center">
                        <h1 className="text-success" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1100">Bahagia Berkurban 1445H</h1>
                    </Container>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Kurban1445H />

                    </Suspense>
                    

                </section>

                <Footer/>
                
            </div>
        )
    }

  
}

export default Home
