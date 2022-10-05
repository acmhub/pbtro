import React from 'react';
import Image from 'next/image';

export default function WindowDoor({ t }) {
    return (
        <div className="space-y-10">
            <div className="container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">
                    <div className="col-span-1 lg:col-span-4 space-y-10 my-auto">
                        <div className="space-y-2">
                            <h6 className="text-gray-400 uppercase">alegerea potrivită</h6>
                            <h2>Ferestre si Usi</h2>
                        </div>

                        <div className="text-justify space-y-2">
                            <p>
                                Vă punem la dispoziție o gamă variată de ferestre și uși, caracterizate de profile de
                                clasă superioară și design unic pentru toate gusturile, ideale pentru amenajarea
                                oricărui tip de spațiu.
                            </p>
                            <p>
                                Tâmplăria noastră vă garantează o viață lipsita de griji deoarece folosim doar materiale
                                de ultima generație, care nu necesita întreținere speciala.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-5">
                        <div className="relative h-[400px] w-full">
                            <Image
                                src="/images/fillers/windowplant.webp"
                                alt="Fereastra"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-3 space-y-8 my-auto">
                        {[
                            'Productie Proprie',
                            'Echipa Profesionista',
                            'Materiale de Calitate',
                            'Masuratori Gratuite'
                        ].map((e, i) => (
                            <div className="flex items-center space-x-2" key={i}>
                                <div className="bg-theme1 p-1 rounded-full">
                                    <span className="material-icons block text-white">done</span>
                                </div>
                                <div>{t(e)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-theme2 p-3"></div>
        </div>
    );
}
