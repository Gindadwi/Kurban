import React, { Component, Suspense } from 'react';
import './TentangKami.css';
import Footer from './Footer';

const TentangKami = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import('./TentangKami')), 1000);
    });
});

class KamiTentang extends Component {
    render() {
        return (
            <div>

                <Suspense fallback={<div>Loading...</div>}>
                    <TentangKami />
                </Suspense>
                <Footer />
            </div>
        );
    }
}

export default KamiTentang;
