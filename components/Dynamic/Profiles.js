import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

function Profiles({ data }) {
    const [swiper, setSwiper] = useState();
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <Swiper
            loop={true}
            effect={'fade'}
            modules={[EffectFade]}
            onSwiper={(swiper) => setSwiper(swiper)}
            className="flex flex-col-reverse"
        >
            <div className={`px-2 swiper-pagination flex justify-between overflow-x-scroll scrollbar-none gap-1`}>
                {data.map((e, i) => (
                    <div
                        className={`${
                            activeSlide == i ? 'bg-theme1 text-white' : 'hover:text-theme1 opacity-50'
                        } grow text-center font-bold whitespace-nowrap px-4 py-1 cursor-pointer duration-200 ease-in-out`}
                        onClick={() => {
                            swiper.slideTo(i + 1);
                            setActiveSlide(i);
                        }}
                        key={i}
                    >
                        {e.model}
                    </div>
                ))}
            </div>

            {data.map((e, i) => (
                <SwiperSlide className="px-2 pb-2" key={i}>
                    <div className="relative card p-0 grid grid-cols-1 lg:grid-cols-2 lg:gap-18">
                        <div className="col-span-1 relative h-96 lg:h-full">
                            <Image src={e.image} alt={e.manufacturer} layout="fill" objectFit="cover" />
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] lg:-translate-y-1/2 bg-white  p-4">
                            <div className="relative h-36 w-36">
                                <Image
                                    src={e.profile}
                                    alt={e.manufacturer + ' ' + e.model}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>

                        <div className="lg:hidden my-12 lg:my-0" />

                        <div className="col-span-1 my-auto space-y-6 lg:pl-28 p-8">
                            <div className="flex lg:flex-col items-center justify-center space-x-4 lg:space-x-0">
                                <div className="relative h-12 w-12 lg:h-24 lg:w-24">
                                    <Image
                                        src={e.manufacturerLogo}
                                        alt={e.manufacturer}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                <h4>{e.model}</h4>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {e.tehnicalDetails.map((detail, index) => (
                                    <div key={index}>
                                        <div className="text-gray-400">{detail.label}</div>
                                        <h5>{detail.value}</h5>
                                    </div>
                                ))}
                            </div>

                            <Link href={e.href} passHref>
                                <a className="theme-button1 block w-fit mx-auto">Mai multe informatii</a>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default dynamic(() => Promise.resolve(Profiles), { ssr: false });
