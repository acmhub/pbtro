import React from 'react';
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
            <div className="container-padding space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-11 gap-8">
                    <div className="col-span-1 lg:col-span-4 relative">
                        <img
                            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAwOC1zaW1vbmVoLTc0LmpwZw.jpg"
                            alt=""
                            className="h-[400px] w-fit object-contain mx-auto"
                        />
                    </div>

                    <div className="col-span-1 lg:col-span-3 text-center">
                        <h1 className="h-48 grid place-content-center text-[12rem] font-bold">16</h1>
                        <div className="space-y-4 my-auto">
                            <h4 className="text-4xl uppercase">ani de experienta</h4>
                            <p>
                                Promotion Business Team este o companie la baza căreia se află o echipă tânără și
                                dinamică, formată din specialiști în tâmplăria PVC și cea din aluminiu.
                            </p>
                            <button className="theme-button1 block mx-auto">Vezi mai mult</button>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-4 hidden lg:block">
                        <img
                            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAwOC1zaW1vbmVoLTc0LmpwZw.jpg"
                            alt=""
                            className="h-[400px] w-fit object-contain mx-auto"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 xl:grid-cols-4 divide-x">
                    {statsData.map((e, i) => (
                        <div className="text-center p-2" key={i}>
                            <h3>{e.count}</h3>
                            <h5 className="uppercase">{e.name}</h5>
                        </div>
                    ))}
                </div>
            </div>

            <Suppliers />
        </div>
    );
}
