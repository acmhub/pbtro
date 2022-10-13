import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const portfolioData = [
    {
        colClass: 'col-span-1 lg:row-span-1',
        cardHeight: 'lg:h-[200px]',
        src: '/images/portfolio/23.webp'
    },
    {
        colClass: 'col-span-1 lg:col-span-2 lg:row-span-2',
        cardHeight: 'lg:h-[300px]',
        src: '/images/portfolio/36.webp'
    },
    {
        colClass: 'col-span-1 lg:row-span-3',
        cardHeight: 'lg:h-[300px]',
        src: '/images/portfolio/39.webp'
    },
    {
        colClass: 'col-span-1',
        cardHeight: 'lg:h-[200px]',
        src: '/images/portfolio/44.webp'
    },
    {
        colClass: 'col-span-1',
        cardHeight: 'lg:h-[200px]',
        src: '/images/portfolio/7.webp'
    }
];

export default function Portfolio({ t }) {
    return (
        <div className="container-padding space-y-10">
            <h1>{t('common:portfolio')}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 lg:row-auto gap-1">
                {portfolioData.map((e, i) => (
                    <div className={e.colClass} key={i}>
                        <div className={`relative h-96 ${e.cardHeight} w-full shadow`}>
                            <Image src={e.src} alt=" " layout="fill" objectFit="cover" />
                        </div>
                    </div>
                ))}
            </div>

            <Link href="/portofoliu" passhref>
                <a className="theme-button1-outlined flex items-center space-x-2 w-fit mx-auto">
                    <span>Vezi mai mult</span>
                    <span className="material-symbols-outlined">trending_flat</span>
                </a>
            </Link>
        </div>
    );
}
