import React from 'react';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'next/image';

const atypicsData = [
    '/images/atypics/atypic1.png',
    '/images/atypics/atypic2.png',
    '/images/atypics/atypic3.png',
    '/images/atypics/atypic4.png',
    '/images/atypics/atypic5.png',
    '/images/atypics/atypic6.png',
    '/images/atypics/atypic7.png',
    '/images/atypics/atypic8.png',
    '/images/atypics/atypic9.png',
    '/images/atypics/atypic10.png',
    '/images/atypics/atypic11.png',
    '/images/atypics/atypic12.png'
];

function Atypics({ t }) {
    return (
        <div className="relative">
            <Swiper
                loop={true}
                speed={8000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false
                }}
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                    1024: {
                        slidesPerView: 4
                    }
                }}
                modules={[Autoplay]}
                className="atypics-swiper1"
            >
                {atypicsData.slice(0, atypicsData.length / 2).map((e, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative h-28 w-28">
                            <Image src={e} alt={t('common:atipic')} layout="fill" objectFit="contain" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="py-5" />

            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center text-center space-y-4 z-10">
                <h2>Forme Atipice</h2>
                <p className="lg:w-2/6 mx-auto">
                    Puteți opta pentru ferestre în diferite forme atipice, precum arc de cerc, cerc, trapez, triunghi
                    sau alte forme asimetrice.
                </p>
            </div>

            <div className="py-5" />

            <Swiper
                dir="rtl"
                loop={true}
                speed={8000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false
                }}
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                    1024: {
                        slidesPerView: 4
                    }
                }}
                modules={[Autoplay]}
                className="atypics-swiper2"
            >
                {atypicsData.slice(atypicsData.length / 2, atypicsData.length).map((e, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative h-28 w-28">
                            <Image src={e} alt={t('common:atipic')} layout="fill" objectFit="contain" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default dynamic(() => Promise.resolve(Atypics), { ssr: false });
