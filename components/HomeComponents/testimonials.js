import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const testimonialData = [
    'Am avut o colaborare foarte bună. Prompt și la obiect. Sper să continuăm la fel. Mulțumesc.',
    'Vă voi recomanda cu mare drag de fiecare dată când voi avea ocazia. Pentru mine finalizarea acestui proiect a implicat un efort destul de mare până să vă contactez.',
    'Se lucrează foarte bine și rapid cu dânșii. Până acum nu a existat nici o întrebare fără răspuns și nici o problemă fără rezolvare. Suntem foarte foarte multumiți. Mult succes.',
    'Totul este lucrat cu serioziate, acuratețe, rezultând un produs la înalte standarde. Mulțumim!',
    'Seriozitate și profesionalism sunt cuvintele cele mai potrivite pentru a descrie această firmă. Suntem multumiți de servicii și de rapiditatea cu care ne sunt rezolvate orice cerințe.',
    'Vreau să vă mulțumesc personal pentru lucrarea efectuată. Sincer, nu mă așteptam ca proiectul să iasă atât de bine. Vă mulțumesc!',
    'Calitate, profesionalism, totul la superlativ!',
    'O echipă extraordinară, ce a știut să comunice cu noi și a răspuns cu brio cerințelor exigente pe care le-am avut.'
];

function Testimonials({ t }) {
    return (
        <div className="container-padding space-y-10">
            <h2 className="text-center">Părerile Clienților Despre Noi</h2>

            <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    768: {
                        slidesPerView: 3
                    }
                }}
                autoplay={{
                    delay: 7500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                className="testimonial-swiper"
            >
                {testimonialData.map((e, i) => (
                    <SwiperSlide className="h-auto py-6" key={i}>
                        <div className="card h-full pt-6">
                            <div className="bg-theme1 text-white h-10 w-10 absolute -top-0 left-5 shadow-xl rounded-full p-2">
                                <span className="material-symbols-outlined">format_quote</span>
                            </div>
                            <p>{e}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="space-y-5">
                <h4 className="text-center">Câțiva dintre clienții noștri fericiți</h4>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    {[
                        '/images/clients/Clinica Sante.webp',
                        '/images/clients/Ewe Residence.webp',
                        '/images/clients/Pallady Towers.webp',
                        '/images/clients/Real Residence Resort.webp',
                        '/images/clients/Stejarul Residence.webp'
                    ].map((e, i) => (
                        <div className="relative h-20 w-20 mx-auto" key={i}>
                            <Image
                                src={e}
                                title={e.replace(/^.*[\\\/]/, '').slice(0, -5)}
                                alt={e.replace(/^.*[\\\/]/, '').slice(0, -5)}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default dynamic(() => Promise.resolve(Testimonials), { ssr: false });
