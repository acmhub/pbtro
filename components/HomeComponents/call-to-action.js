import React from 'react';
import Link from 'next/link';

const stepsData = [
    {
        icon: 'draft',
        title: 'calltoaction.draft',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae in molestiae quasi tenetur a.'
    },
    {
        icon: 'support_agent',
        title: 'calltoaction.support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, corporis.'
    },
    {
        icon: 'straighten',
        title: 'calltoaction.paymeasure',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur blanditiis deleniti aut reprehenderit rerum aperiam neque iste delectus excepturi voluptatum!'
    },
    {
        icon: 'construction',
        title: 'calltoaction.production',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint et non earum officiis reprehenderit eius pariatur eaque.'
    },
    {
        icon: 'mood',
        title: 'calltoaction.happy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, corporis.'
    }
];

export default function CallToAction({ t }) {
    return (
        <div className="container-padding">
            <h2 className="text-center mb-10">{t('calltoaction.title')}</h2>

            <div className="relative py-3 sm:max-w-5xl sm:mx-auto w-full px-2 sm:px-0">
                <div className="hidden sm:block w-px bg-theme1 absolute h-full left-1/2 transform -translate-x-1/2"></div>

                {stepsData.map((e, i) => (
                    <div className="mt-6 sm:mt-0" key={i}>
                        <div className="flex flex-col sm:flex-row items-center">
                            <div
                                className={`flex ${
                                    i % 2 == 0 ? 'justify-start' : 'justify-end'
                                } w-full mx-auto items-center`}
                            >
                                <div className={`w-full sm:w-1/2 ${i % 2 == 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                                    <div className="relative bg-white rounded shadow space-y-1 pt-8 lg:pt-4 p-4">
                                        <h5
                                            className={`${
                                                i % 2 ? 'text-left' : 'lg:text-right'
                                            } text-theme1 tracking-widest font-bold opacity-80`}
                                        >
                                            0{i + 1}
                                        </h5>

                                        <h4>{t(e.title)}</h4>
                                        <p>{t(e.description)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:hidden my-3" />
                            <div className="rounded-full bg-theme1 w-11 h-11 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white m-icon-30">{e.icon}</span>
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
