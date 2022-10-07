import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const suppliersData = [
    {
        src: '/images/suppliers/altest.webp',
        name: 'Altest'
    },
    {
        src: '/images/suppliers/cortizo.webp',
        name: 'Cortizo'
    },
    {
        src: '/images/suppliers/gu.webp',
        name: 'Gretsch Unitas'
    },
    {
        src: '/images/suppliers/klass.webp',
        name: 'Klass'
    },
    {
        src: '/images/suppliers/maco.webp',
        name: 'Maco Multimatic'
    },
    {
        src: '/images/suppliers/profilco.webp',
        name: 'Profilco'
    },
    {
        src: '/images/suppliers/salamander.webp',
        name: 'Salamander'
    },
    {
        src: '/images/suppliers/vorne.webp',
        name: 'Vorne'
    }
];

function Suppliers() {
    return (
        <div className="pointer-events-none">
            <Swiper
                loop={true}
                speed={8000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false
                }}
                slidesPerView={3}
                spaceBetween={10}
                breakpoints={{
                    1024: {
                        slidesPerView: 6
                    }
                }}
                modules={[Autoplay]}
                className="suppliers-swiper"
            >
                {suppliersData.map((e, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative h-16 w-16">
                            <Image src={e.src} alt={e.name} layout="fill" objectFit="contain" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default dynamic(() => Promise.resolve(Suppliers), { ssr: false });
