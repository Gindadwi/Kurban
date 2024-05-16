import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from'../assets/logo.png';
import './Layout.css';


const Layout = () => {
    return (
        <>
            <Navbar expand="lg" className="">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ height: '50px', width: 'auto' }}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className="gap-4">
                            <Nav.Link href="./Home" className="text-dark">Home</Nav.Link>
                            <Nav.Link href="./KamiTentang" className="text-dark">Tentang Kami</Nav.Link>
                            <Nav.Link href="./Contact" className="text-dark">Blogs</Nav.Link>
                            <Nav.Link href="./Contact" className="text-dark">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    )
};

export default Layout;