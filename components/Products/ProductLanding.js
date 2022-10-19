import React from 'react';
import Image from 'next/image';

export default function ProductLanding({ t, data }) {
    return (
        <div className="relative h-96 flex items-end p-4 shadow-xl">
            <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
                <Image src={data.src} alt={t(data.product)} layout="fill" objectFit="cover" />
            </div>
            <div className="absolute bottom-0 left-0 h-[75%] lg:h-[50%] w-full bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent pointer-events-none z-10" />

            <div className="relative text-white space-y-2 z-20">
                <h1 className="text-3xl lg:text-5xl">{t(data.product)}</h1>
                <div className="space-y-1">
                    {data.description.map((e, i) => (
                        <p className="lg:w-3/4" key={i}>
                            {e}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
