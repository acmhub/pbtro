import React, { useState, useEffect, useRef } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Layout from '../components/General/Layout';

const portfolioData = [
    { src: '/images/portfolio/1.webp' },
    { src: '/images/portfolio/2.webp' },
    { src: '/images/portfolio/3.webp' },
    { src: '/images/portfolio/4.webp' },
    { src: '/images/portfolio/5.webp' },
    { src: '/images/portfolio/6.webp' },
    { src: '/images/portfolio/7.webp' },
    { src: '/images/portfolio/8.webp' },
    { src: '/images/portfolio/9.webp' },
    { src: '/images/portfolio/10.webp' },
    { src: '/images/portfolio/11.webp' },
    { src: '/images/portfolio/12.webp' },
    { src: '/images/portfolio/13.webp' },
    { src: '/images/portfolio/14.webp' },
    { src: '/images/portfolio/15.webp' },
    { src: '/images/portfolio/16.webp' },
    { src: '/images/portfolio/17.webp' },
    { src: '/images/portfolio/18.webp' },
    { src: '/images/portfolio/19.webp' },
    { src: '/images/portfolio/20.webp' },
    { src: '/images/portfolio/21.webp' },
    { src: '/images/portfolio/22.webp' },
    { src: '/images/portfolio/23.webp' },
    { src: '/images/portfolio/24.webp' },
    { src: '/images/portfolio/25.webp' },
    { src: '/images/portfolio/26.webp' },
    { src: '/images/portfolio/27.webp' },
    { src: '/images/portfolio/28.webp' },
    { src: '/images/portfolio/29.webp' },
    { src: '/images/portfolio/30.webp' },
    { src: '/images/portfolio/31.webp' },
    { src: '/images/portfolio/32.webp' },
    { src: '/images/portfolio/33.webp' },
    { src: '/images/portfolio/34.webp' },
    { src: '/images/portfolio/35.webp' },
    { src: '/images/portfolio/36.webp' },
    { src: '/images/portfolio/37.webp' },
    { src: '/images/portfolio/38.webp' },
    { src: '/images/portfolio/39.webp' },
    { src: '/images/portfolio/40.webp' },
    { src: '/images/portfolio/41.webp' },
    { src: '/images/portfolio/42.webp' },
    { src: '/images/portfolio/43.webp' },
    { src: '/images/portfolio/44.webp' },
    { src: '/images/portfolio/45.webp' },
    { src: '/images/portfolio/46.webp' },
    { src: '/images/portfolio/47.webp' },
    { src: '/images/portfolio/48.webp' },
    { src: '/images/portfolio/49.webp' },
    { src: '/images/portfolio/50.webp' },
    { src: '/images/portfolio/51.webp' },
    { src: '/images/portfolio/52.webp' },
    { src: '/images/portfolio/53.webp' },
    { src: '/images/portfolio/54.webp' },
    { src: '/images/portfolio/55.webp' }
];

export default function Portfolio() {
    const { t } = useTranslation('portfolio');

    return (
        <Layout
            pageID="about"
            title={t('common:portfolio')}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ex quidem perspiciatis architecto? Quam, voluptas aliquid laboriosam officiis corrupti esse."
        >
            <div className="section-spacing-lg" />
            <div className="container-padding">
                <h1 className="text-center mb-20">{t('common:portfolio')}</h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                    {portfolioData.map((e, i) => (
                        <div className="relative h-96 w-auto" key={i}>
                            <Image src={e} alt="Portofoliu" layout="fill" objectFit="cover" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="section-spacing" />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'portfolio']))
        }
    };
}
