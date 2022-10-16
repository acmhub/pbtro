import React from 'react';
import Link from 'next/link';

const stepsData = [
    {
        icon: 'home',
        title: 'Trimite-ne o schita',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae in molestiae quasi tenetur a.'
    },
    {
        icon: 'home',
        title: 'Consultanta in baza ofertei',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, corporis.'
    },
    {
        icon: 'home',
        title: 'Plata si masuratori',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur blanditiis deleniti aut reprehenderit rerum aperiam neque iste delectus excepturi voluptatum!'
    },
    {
        icon: 'home',
        title: 'Productie si montaj',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint et non earum officiis reprehenderit eius pariatur eaque.'
    },
    {
        icon: 'home',
        title: 'Bucura-te de produsul tau',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, corporis.'
    }
];

export default function CallToAction({ t }) {
    return (
        <div className="container-padding">
            <h2 className="text-center mb-10">Procesul nostru</h2>

            <div className="relative py-3 sm:max-w-5xl sm:mx-auto w-full px-2 sm:px-0">
                <div className="hidden sm:block w-1 bg-theme1 absolute h-full left-1/2 transform -translate-x-1/2"></div>

                {stepsData.map((e, i) => (
                    <div className="mt-6 sm:mt-0" key={i}>
                        <div className="flex flex-col sm:flex-row items-center">
                            <div
                                className={`flex ${
                                    i % 2 == 0 ? 'justify-start' : 'justify-end'
                                } w-full mx-auto items-center`}
                            >
                                <div className={`w-full sm:w-1/2 ${i % 2 == 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                                    <div className="relative bg-white rounded shadow p-4 pt-8 lg:pt-4">
                                        <h5 className="absolute top-2 right-2 text-theme1 tracking-widest font-bold opacity-80">
                                            0{i + 1}
                                        </h5>
                                        <h4>{e.title}</h4>
                                        <p>{e.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:hidden my-3" />
                            <div className="rounded-full bg-theme1 w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white">{e.icon}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link href="/solicita-oferta" passhref>
                <a className="theme-button1-outlined flex items-center space-x-2 w-fit mx-auto mt-0 sm:mt-10 lg:mt-20">
                    <span>{t('common:getquote')}</span>
                    <span className="material-symbols-outlined">trending_flat</span>
                </a>
            </Link>
        </div>
    );
}
