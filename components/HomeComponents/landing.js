import React from 'react';
import Image from 'next/image';

export default function Landing({ t }) {
    return (
        <div className="container-padding">
            <div className="relative bg-gradient-to-tr from-[#1A62A5] to-[#5BA2D7] shadow-xl">
                <div className="h-full grid grid-cols-1 lg:grid-cols-2 min-h-[550px]">
                    <div className="space-y-10 px-8 py-8 lg:py-4 text-white my-auto">
                        <div className="space-y-2">
                            <h6 className="uppercase">{t('landing.subtitle')}</h6>
                            <h3 className="capitalize">{t('landing.title')}</h3>
                            <h1>Tamplarie PVC</h1>
                        </div>

                        <p>{t('landing.description')}</p>

                        <div className="flex space-x-4">
                            <button className="theme-button1">{t('common:getquote')}</button>
                            <button className="theme-button1-outlined text-white">{t('common:services')}</button>
                        </div>
                    </div>
                    <div className="flex items-end justify-end">
                        <img src="/images/fillers/landing-image.webp" alt="" className="h-auto w-auto object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
}
