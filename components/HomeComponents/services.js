import React from 'react';
import Link from 'next/link';

const servicesData = [
    {
        icon: 'support_agent',
        title: 'services.consult',
        description: 'services.consultdesc'
    },
    {
        icon: 'verified',
        title: 'services.quality',
        description: 'services.qualitydesc'
    },
    {
        icon: 'precision_manufacturing',
        title: 'services.production',
        description: 'services.productiondesc'
    },
    {
        icon: 'square_foot',
        title: 'services.measurements',
        description: 'services.measurementsdesc'
    },
    {
        icon: 'local_shipping',
        title: 'services.delivery',
        description: 'services.deliverydesc'
    },
    {
        icon: 'tools_power_drill',
        title: 'services.fitting',
        description: 'services.fittingdesc'
    }
];

export default function Services({ t }) {
    return (
        <div className="container-padding space-y-10">
            <h1 className="text-center">Servicii oferite de noi</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {servicesData.map((e, i) => (
                    <div className="bg-white shadow flex items-center" key={i}>
                        <div className="bg-theme2 text-white h-full w-fit flex items-center p-2">
                            <span className="material-symbols-outlined m-icon-30">{e.icon}</span>
                        </div>
                        <div className="p-4">
                            <h4>{t(e.title)}</h4>
                            <p>{t(e.description)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Link href="/servicii" passhref>
                <a className="theme-button2 flex items-center space-x-2 w-fit mx-auto">
                    <span>{t('common:moreinfo')}</span>
                    <span className="material-symbols-outlined">trending_flat</span>
                </a>
            </Link>
        </div>
    );
}
