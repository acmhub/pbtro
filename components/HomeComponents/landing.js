import React from 'react';
import Image from 'next/image';

export default function Landing({ t }) {
    return (
        <div className="container-padding">
            <div className="relative flex items-center min-h-[550px] bg-gradient-to-tr from-[#1A62A5] to-[#5BA2D7] rounded-lg shadow-xl lg:mxt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="space-y-10 px-8 py-8 lg:py-4 text-white my-auto">
                        <div className="space-y-2">
                            <h6 className="uppercase">{t('landing.subtitle')}</h6>
                            <h3 className="capitalize">{t('landing.title')}</h3>
                            <h1>Tamplarie PVC</h1>
                        </div>

                        <p>{t('landing.description')}</p>

                        <div className="flex space-x-4">
                            <button className="theme-button1">{t('common:getquote')}</button>
                            <button className="theme-button1-outlined">{t('common:services')}</button>
                        </div>
                    </div>
                    <div className="lg:absolute lg:bottom-0 lg:right-0">
                        <div className="relative h-[250px] w-full lg:h-[476px] lg:w-[715px]">
                            <Image
                                src="/images/fillers/landing-image.webp"
                                alt="Promotion Business Team"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
