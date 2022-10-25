import React from 'react';
import Link from 'next/link';

export default function Landing({ t }) {
    return (
        <div className="relative">
            <div className="section-spacing" />
            <div className="container-padding">
                <div className="relative bg-gradient-to-tr from-[#1A62A5] to-[#5BA2D7] shadow-xl">
                    <div className="h-full grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
                        <div className="space-y-10 px-8 py-8 lg:py-4 text-white my-auto">
                            <div className="space-y-4">
                                <div>
                                    <h6 className="uppercase text-sm">{t('landing.subtitle')}</h6>
                                    <h4 className="capitalize">{t('landing.title')}</h4>
                                </div>
                                <h1>{t('common:product.tamplariepvc')}</h1>
                            </div>

                            <p>{t('landing.description')}</p>

                            <div className="flex space-x-4">
                                <Link href="/solicita-oferta" passHref>
                                    <a>
                                        <button className="theme-button1">{t('common:getquote')}</button>
                                    </a>
                                </Link>
                                <Link href="/servicii" passHref>
                                    <a>
                                        <button className="theme-button1-outlined text-white">
                                            {t('common:services')}
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-end justify-end">
                            <img
                                src="/images/fillers/landing-image.webp"
                                alt=""
                                className="h-auto w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
