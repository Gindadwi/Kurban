import React from 'react';
import { Container } from 'react-bootstrap';
import { StyleFooter } from "./StyleFooter";
import logo from '../assets/laznas.png';

const Footer = () => {
    return (
        <StyleFooter className="mt-5 py-3 text-dark">
            <Container className="text-center">
             <img src={logo} alt="" style={{width:'auto', height:'80px' }}/>
                <p className="pt-4">Alamat 1 : Jl. Kalibata Utara II No.84 RT. 010 RW.002 Kalibata, Pancoran, Jakarta Selatan DKI Jakarta Raya 12740</p>
                <p>Alamat 2: Jalan H. Madrani No.1, Brubahan, Grendeng, Kec. Purwokerto Utara, Kabupaten Banyumas, Jawa Tengah 53122</p>
            </Container>
            <Container className="text-center mt-3">
                <hr />
                <p>&copy; {new Date().getFullYear()} Kurban1445H. Hak Cipta Dilindungi.</p>
            </Container>
        </StyleFooter>
    );
};

export default Footer;