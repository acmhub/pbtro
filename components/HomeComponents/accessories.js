import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const accessoriesData = [
    {
        colClass: 'col-span-1',
        cardHeight: 'lg:h-[200px]',
        src: '/images/accessories/glaf_pvc.webp',
        name: 'Glaf'
    },
    {
        colClass: 'col-span-1',
        cardHeight: 'lg:h-[200px]',
        src: '/images/accessories/pervaz_aluminiu.webp',
        name: 'Pervaz'
    },
    {
        colClass: 'col-span-1 lg:row-span-2',
        cardHeight: 'lg:h-full',
        src: '/images/accessories/broasca_usa.webp',
        name: 'Broasca Usa'
    },
    {
        colClass: 'col-span-1 lg:col-span-2 lg:row-start-2',
        cardHeight: 'lg:h-[200px]',
        src: '/images/accessories/panel_pvc.webp',
        name: 'Panel'
    }
];

export default function Accessories({ t }) {
    return (
        <div className="container-padding space-y-10">
            <div className="space-y-2">
                <h1>Accesorii</h1>
                <p className="lg:w-2/5">
                    Un prim criteriu de selectare a unui producător de accesorii tâmplărie poate fi experiența acestuia
                    și vechimea pe piața de producție.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 lg:row-auto gap-1">
                {accessoriesData.map((e, i) => (
                    <div className={e.colClass} key={i}>
                        {/* <Link href="/accesorii" passHref> */}
                        {/* <a> */}
                        <div className={`relative h-96 ${e.cardHeight} w-full overflow-hidden shadow`}>
                            <Image
                                src={e.src}
                                alt="Accesorii Tamplarie"
                                layout="fill"
                                objectFit="cover"
                                className="hover:scale-110 duration-200 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 h-[50%] w-full bg-gradient-to-t from-[rgba(0,0,0,0.5)] via-transparent to-transparent pointer-events-none z-10" />
                            <h4 className="absolute bottom-2 left-2 text-white z-10">{e.name}</h4>
                        </div>
                        {/* </a> */}
                        {/* </Link> */}
                    </div>
                ))}
            </div>

            {/* <Link href="/accesorii" passhref>
                <a className="theme-button1-outlined flex items-center space-x-2 w-fit mx-auto">
                    <span>Vezi mai mult</span>
                    <span className="material-symbols-outlined">trending_flat</span>
                </a>
            </Link> */}
        </div>
    );
}
