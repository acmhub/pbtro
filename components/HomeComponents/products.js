import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { productsData } from '../Products';

function Products({ t }) {
    return (
        <div className="container-padding space-y-6">
            <div className="flex items-center justify-between">
                <h2>Produsele Oferite de Noi</h2>

                <div className="hidden lg:flex space-x-4">
                    <span className="material-symbols-outlined cursor-pointer arrow-left rotate-180 m-icon-30">
                        trending_flat
                    </span>
                    <span className="material-symbols-outlined cursor-pointer arrow-right m-icon-30">
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
                        1024: {
                            slidesPerView: 3
                        },
                        1280: {
                            slidesPerView: 4
                        }
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    navigation={{
                        prevEl: '.arrow-left',
                        nextEl: '.arrow-right'
                    }}
                    modules={[Autoplay, Navigation]}
                >
                    {productsData.map((e, i) => (
                        <SwiperSlide key={i} itemType="https://schema.org/Product" itemScope>
                            <Link href={e.href} passHref>
                                <a>
                                    <div className="relative h-[550px] w-full overflow-hidden">
                                        <Image
                                            src={e.src}
                                            alt={t(e.name)}
                                            layout="fill"
                                            objectFit="cover"
                                            className="hover:scale-110 duration-200 ease-in-out"
                                            itemProp="image"
                                            priority
                                        />
                                        <div className="absolute bottom-0 left-0 h-[50%] w-full bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-transparent pointer-events-none z-10" />

                                        <div className="absolute bottom-2 left-2 space-y-2 z-20">
                                            {(e.name === 'product.tamplariepvc' ||
                                                e.name === 'product.tamplariealuminiu' ||
                                                e.name === 'product.tamplarielemn') && (
                                                <div className="text-theme1 uppercase tracking-widest">
                                                    {t('common:fereastrapbt')}
                                                </div>
                                            )}
                                            <div className="product-name text-white text-2xl" itemProp="name">
                                                {t(`common:${e.name}`)}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center lg:hidden space-x-4">
                    <span className="material-symbols-outlined cursor-pointer arrow-left rotate-180 m-icon-30">
                        trending_flat
                    </span>
                    <span className="material-symbols-outlined cursor-pointer arrow-right m-icon-30">
                        trending_flat
                    </span>
                </div>
            </div>
        </div>
    );
}

export default dynamic(() => Promise.resolve(Products), { ssr: false });
