import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import'./TentangKami.css';



class TentangKami extends Component {
    render() {
        return (
            <div>
                <section>
                    <Container className="text-start mt-5 mb-6" id="tentangkami">
                        <h3 className="text-success">LAZNAS Al-Irsyad Al-Islamiyyah</h3>
                        <hr />
                        <p>LAZNAS Al Irsyad al Islamiyyah selanjutnya disebut laznas al irsyad merupakan lembaga Nirlaba yang bergerak dalam bidang Pengelolaan Zakat, Infak, dan Shodaqoh.

                            Lembaga ini dibentuk oleh Pimpinan Pusat al irsyad Al Islamiyyah yang bertujuan untuk memberdayakan masyarakat dhuafa berbasis pendidikan, dakwah, kesehatan dan sosial kemanusiaan.

                            Dalam lintasan sejarahnya, Al irsyad al Islamiyyah telah memiliki lembaga amil zakat (LAZ) Al Irsyad Al Islamiyyah untuk pertama kalinya di cabang Purwokerto sebagai LAZ tingkat Kabupaten sesuai dengan Surat Keputusan (SK) dari KAKANWIL KEMENAG Provinsi Jawa Tengah No. 4132/KW.11.7/4/BA.03.2/06/2017.

                            Kemudian sebagai tindak lanjut mandat muktamar al Irsyad ke 40 di Bogor tahun 2017, maka PP al Irsyad membentuk tim pendirian laznas dibawah koordinasi majlis sosial dan ekonomi. Setelah melalui proses yang panjang, akhirnya PP al Irsyad
                            mendapatkan ijin operasional Lembaga Amil Zakat tingkat nasional dengan S.K Menteri Agama RI Nomor 949 tahun 2020.</p>
                    </Container>
                </section>

            </div>
        )
    }



}

export default TentangKami
