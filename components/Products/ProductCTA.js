import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';

function ProductCTA({ t, data }) {
    return (
        <div className="card p-0 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="col-span-1 space-y-6 p-8 my-auto">
                    <div>
                        <h3>Lorem ipsum dolor sit.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad, voluptatem facilis nihil
                            eaque impedit placeat unde suscipit iure dignissimos.
                        </p>
                    </div>

                    <Link href="/solicita-oferta" passHref>
                        <a className="block w-fit">
                            <button className="theme-button1-outlined">{t('common:getquote')}</button>
                        </a>
                    </Link>
                </div>

                <div className="col-span-1 order-first lg:order-last">
                    <Swiper
                        loop={true}
                        effect={'fade'}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay, EffectFade]}
                        className="cta-swiper"
                    >
                        {data.map((e, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative h-80 w-full">
                                    <Image src={e} alt={t('common:getquote')} layout="fill" objectFit="cover" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default dynamic(() => Promise.resolve(ProductCTA), { ssr: false });
