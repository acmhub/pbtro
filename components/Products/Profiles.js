import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

function Profiles({ data, t }) {
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
            <div
                className="swiper-pagination flex lg:justify-evenly mx-2 overflow-x-auto scrollbar-thin"
                itemType="https://schema.org/Product"
                itemScope
            >
                {data.map((e, i) => (
                    <div
                        className={`${
                            activeSlide == i ? 'bg-theme1 text-white' : 'hover:text-theme1 opacity-50'
                        } inline-block lg:w-full text-center font-bold whitespace-nowrap px-4 py-1 cursor-pointer duration-200 ease-in-out`}
                        onClick={() => {
                            swiper.slideTo(i + 1);
                            setActiveSlide(i);
                        }}
                        key={i}
                    >
                        <span itemProp="name">{e.model}</span>
                    </div>
                ))}
            </div>

            {data.map((e, i) => (
                <SwiperSlide className="h-auto px-2 pb-2" itemType="https://schema.org/Product" itemScope key={i}>
                    <div className="relative card p-0 grid grid-cols-1 lg:grid-cols-10 lg:gap-18 h-full">
                        <div className="col-span-1 lg:col-span-4 relative h-60 lg:h-full">
                            <Image
                                src={e.image}
                                alt={e.manufacturer}
                                layout="fill"
                                objectFit="cover"
                                itemProp="image"
                            />
                        </div>

                        <div className="mx-auto -translate-y-16 lg:absolute lg:top-1/2 lg:left-[40%] lg:-translate-x-1/2 lg:-translate-y-1/2 bg-white p-4">
                            <div className="relative h-36 w-36">
                                <Image
                                    src={e.profile}
                                    alt={e.manufacturer + ' ' + e.model}
                                    layout="fill"
                                    objectFit="contain"
                                    itemProp="image"
                                />
                            </div>
                        </div>

                        <div className="col-span-1 lg:col-span-6 my-auto space-y-6 lg:pl-28 p-8 pt-0 lg:pt-8 lg:h-full -translate-y-5 lg:-translate-y-0">
                            <div className="flex lg:flex-col items-center justify-center space-x-4 lg:space-x-0">
                                <div className="relative h-12 w-12 lg:h-24 lg:w-24">
                                    <Image
                                        src={e.manufacturerLogo}
                                        alt={e.manufacturer}
                                        layout="fill"
                                        objectFit="contain"
                                        itemProp="image"
                                    />
                                </div>
                                <h4 itemProp="name">{e.model}</h4>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {e.tehnicalDetails.map((detail, index) => (
                                    <div key={index}>
                                        <div className="text-gray-400">{t(detail.label)}</div>
                                        <h5>{t(detail.value)}</h5>
                                    </div>
                                ))}
                            </div>

                            {e.href && (
                                <Link href={e.href} passHref>
                                    <a className="theme-button1 block w-fit mx-auto">{t('common:moreinfo')}</a>
                                </Link>
                            )}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default dynamic(() => Promise.resolve(Profiles), { ssr: false });
