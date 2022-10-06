import React from 'react';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { productsData } from '../Products';

function Products({ t }) {
    return (
        <div className="container-padding space-y-10">
            <div className="flex items-center justify-between">
                <h1>Produsele Oferite de Noi</h1>

                <div className="hidden lg:flex space-x-4">
                    <span className="material-symbols-outlined cursor-pointer arrow-left rotate-180 md-48 text-3xl">
                        trending_flat
                    </span>
                    <span className="material-symbols-outlined cursor-pointer arrow-right md-48 text-3xl">
                        trending_flat
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 4
                        }
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    navigation={{
                        prevEl: '.arrow-left',
                        nextEl: '.arrow-right'
                    }}
                    modules={[Autoplay, Navigation]}
                >
                    {productsData.map((e, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative h-[450px] w-full bg-red-400 rounded-lg overflow-hidden">
                                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent pointer-events-none z-10" />

                                <div className="absolute bottom-2 left-2 space-y-2 z-20">
                                    {(e.name === 'product.tamplariepvc' ||
                                        e.name === 'product.tamplariealuminiu' ||
                                        e.name === 'product.tamplarielemn') && (
                                        <div className="text-theme1 uppercase tracking-widest">
                                            {t('common:fereastrapbt')}
                                        </div>
                                    )}
                                    <div className="product-name text-white text-2xl">{t(`common:${e.name}`)}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center lg:hidden space-x-4">
                    <span className="material-symbols-outlined cursor-pointer arrow-left rotate-180 md-48 text-3xl">
                        trending_flat
                    </span>
                    <span className="material-symbols-outlined cursor-pointer arrow-right md-48 text-3xl">
                        trending_flat
                    </span>
                </div>
            </div>
        </div>
    );
}

export default dynamic(() => Promise.resolve(Products), { ssr: false });
