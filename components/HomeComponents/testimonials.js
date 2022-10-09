import React from 'react';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const testimonialData = [
    'Am avut o colaborare foarte bună. Prompt și la obiect. Sper să continuăm la fel. Mulțumesc.',
    'Calitate, profesionalism, totul la superlativ!',
    'Vă voi recomanda cu mare drag de fiecare dată când voi avea ocazia. Pentru mine finalizarea acestui proiect a implicat un efort destul de mare până să vă contactez.',
    'Se lucrează foarte bine și rapid cu dânșii. Până acum nu a existat nici o întrebare fără răspuns și nici o problemă fără rezolvare. Suntem foarte foarte multumiți. Mult succes.',
    'Totul este lucrat cu serioziate, acuratețe, rezultând un produs la înalte standarde. Mulțumim!',
    'Seriozitate și profesionalism sunt cuvintele cele mai potrivite pentru a descrie această firmă. Suntem multumiți de servicii și de rapiditatea cu care ne sunt rezolvate orice cerințe.',
    'Vreau să vă mulțumesc personal pentru lucrarea efectuată. Sincer, nu mă așteptam ca proiectul să iasă atât de bine. Vă mulțumesc!',
    'O echipă extraordinară, ce a știut să comunice cu noi și a răspuns cu brio cerințelor exigente pe care le-am avut.'
];

function Testimonials({ t }) {
    return (
        <div className="container-padding">
            <h1>Testimonials</h1>
        </div>
    );
}

export default dynamic(() => Promise.resolve(Testimonials), { ssr: false });
