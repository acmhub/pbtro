import React from 'react';
import Image from 'next/image';
import Suppliers from '../General/Suppliers';

const statsData = [
    {
        count: '1874+',
        name: 'proiecte realizate'
    },
    {
        count: '1452+',
        name: 'clienti satisfacuti'
    },
    {
        count: '32',
        name: 'servicii oferite'
    },
    {
        count: '42',
        name: 'angajati'
    }
];

export default function About({ t }) {
    return (
        <div className="space-y-10">
            <div className="container-padding relative space-y-20">
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 z-10">
                    <div className="col-span-1 lg:col-span-3 relative h-96">
                        <div className="absolute top-2 left-2 h-72 w-[75%] shadow-xl">
                            <Image src="/images/portfolio/16.webp" alt=" " layout="fill" objectFit="cover" />
                        </div>

                        <div className="absolute bottom-2 right-2 h-64 w-[50%] shadow-xl">
                            <Image src="/images/portfolio/1.webp" alt=" " layout="fill" objectFit="cover" />
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-6 text-center">
                        <h1 className="year-text h-56 grid place-content-center text-[14rem] font-bold">16</h1>
                        <div className="space-y-4 my-auto">
                            <h4 className="text-4xl uppercase">ani de experienta</h4>
                            <p>
                                Promotion Business Team este o companie la baza căreia se află o echipă tânără și
                                dinamică, formată din specialiști în tâmplăria PVC și cea din aluminiu.
                            </p>
                            <button className="theme-button1 block mx-auto">Vezi mai mult</button>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-3 hidden lg:block relative h-96">
                        <div className="absolute top-2 right-2 h-72 w-[75%] shadow-xl">
                            <Image src="/images/portfolio/47.webp" alt=" " layout="fill" objectFit="cover" />
                        </div>

                        <div className="absolute bottom-2 left-2 h-64 w-[50%] shadow-xl">
                            <Image src="/images/portfolio/21.webp" alt=" " layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </div>

                <img
                    src="/images/fillers/worldmap.png"
                    alt=""
                    className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-96 w-fit object-contain opacity-[0.05] z-[0]"
                />

                <div className="grid grid-cols-2 xl:grid-cols-4 lg:divide-x">
                    {statsData.map((e, i) => (
                        <div className="text-center p-2" key={i}>
                            <h4>{e.count}</h4>
                            <p className="uppercase">{e.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Suppliers />
        </div>
    );
}
