import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio({ t }) {
    return (
        <div className="container-padding space-y-10">
            <h1>{t('common:portfolio')}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 lg:row-auto gap-2">
                <div className="col-span-1 lg:row-span-1">
                    <img
                        src="https://via.placeholder.com/200"
                        alt=""
                        className="h-96 lg:h-[300px] w-full object-cover rounded-lg shadow"
                    />
                </div>
                <div className="col-span-1 lg:col-span-2 lg:row-span-2">
                    <img
                        src="https://via.placeholder.com/200"
                        alt=""
                        className="h-96 lg:h-[600px] w-full object-cover rounded-lg shadow"
                    />
                </div>
                <div className="col-span-1 lg:row-span-3">
                    <img
                        src="https://via.placeholder.com/200"
                        alt=""
                        className="h-96 lg:h-[600px] w-full object-cover rounded-lg shadow"
                    />
                </div>
                <div className="col-span-1">
                    <img
                        src="https://via.placeholder.com/200"
                        alt=""
                        className="h-96 lg:h-[300px] w-full object-cover rounded-lg shadow"
                    />
                </div>
                <div className="col-span-1">
                    <img
                        src="https://via.placeholder.com/200"
                        alt=""
                        className="h-96 lg:h-[300px] w-full object-cover rounded-lg shadow"
                    />
                </div>
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
