import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/General/Layout';
import Suppliers from '../components/General/Suppliers';

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

const servicesData = [
    {
        icon: 'support_agent',
        title: 'Consultanta',
        description: 'Specialiștii noștri sunt mereu la dispoziția clienților cu recomandări și informații.'
    },
    {
        icon: 'verified',
        title: 'Calitate',
        description:
            'Nu doar arhitectura și stilul amenajării interioare și exterioare contează, ci și materialele utilizate, dar mai ales calitatea acestora.'
    },
    {
        icon: 'precision_manufacturing',
        title: 'Productie',
        description:
            'Folosim materii prime și accesorii de cea mai bună calitate, cu aparatură mânuită de experți în producția de tâmplărie.'
    },
    {
        icon: 'square_foot',
        title: 'Masuratori',
        description:
            'Măsuratorile corecte sunt extrem de importante. Noi realizăm această etapă cu cea mai mare atenție, în orice tip de clădire sau încăpere.'
    },
    {
        icon: 'local_shipping',
        title: 'Livrare',
        description: 'Grație flotei noastre proprii, putem programa și transporta orice tip de tâmplarie sau sticlă.'
    },
    {
        icon: 'tools_power_drill',
        title: 'Montaj',
        description:
            'Montăm și verificăm după realizare, cu mare atenție. Totul pentru siguranța și confortul clienților noștri!'
    }
];

const timelineData = [
    {
        year: '2006',
        card: [
            {
                month: null,
                content: [
                    'În 2006 s-au pus bazele fabricii de ferestre Promotion Business Team, care avea un singur obiectiv: să ofere o alternativă calitativă de tâmplărie în contextul creșterii numărului de comercianți orientați doar către profit.',
                    'De-a lungul timpului, fabrica a evoluat, echipa s-a mărit, tehnologiile s-au îmbunătățit dar focusul este același: să îmbunătățim calitatea vieții clienților noștri prin cele mai bune produse și servicii de tâmplărie.',
                    'De la înființarea companiei până în 2010, ne-am ocupat cu distribuția de tâmplărie PVC și aluminiu, dar și cu accesorii pentru acestea.'
                ]
            }
        ]
    },
    {
        year: '2010',
        card: [
            {
                month: null,
                content: [
                    'Am lărgit spectrul de activitate, începând să producem și să comercializăm tâmplăria PVC și cea de aluminiu.'
                ]
            }
        ]
    },
    {
        year: '2020',
        card: [
            {
                month: 'Ianuarie',
                content: [
                    'Pentru a putea satisface volumul de cereri ne-am mutat la o nouă locație aflată pe Șoseaua Tudor Vladimirescu 393, Domnești Business Park, Ilfov.',
                    'Noua hală de producție având o suprafață de 1500m2, față de cei 600m2 din locul anterior.'
                ]
            }
        ]
    },
    {
        year: '2021',
        card: [
            {
                month: 'Ianuarie',
                content: [
                    'Am achiziționat o nouă linie de producție pentru tamplaria PVC si cea din aluminiu, compusă din mai multe echipamente moderne. Cu ajutorul acestor echipamente, am putut reduce consumul de curent electric și, concomitent, crește producția.',
                    'De asemenea calitatea produselor a crescut, prin eliminarea erorilor umane, contribuind, de asemenea, la competitivitatea companiei Promotion Business Team pe piața în care activează. Mai mult, producția a devenit mai eficientă. Putem produce acum o cantitate dublă de produse și putem astfel susține mai bine cererea pe care o înregistrăm, aflată în continuă creștere.'
                ]
            },
            {
                month: 'Iunie',
                content: [
                    'Am implementat un management inteligent al activităților de producție.',
                    'Astfel activitatea din fabrică poate fi planificată, executată și monitorizată mult mai ușor cu soluția de management al producției. Sistemul acoperă patru zone principale: producție, materiale, calitate și mentenanță.'
                ]
            },
            {
                month: 'Septembrie',
                content: [
                    'Am investit într-o linie de producţie de sticlă modernă, toată producţia fiind optimizată și operată cu ajutorul celor mai performante softuri și utilaje.'
                ]
            }
        ]
    },
    {
        year: 'Prezent',
        card: [
            {
                month: null,
                content: [
                    'Experiența acumulată în confecționarea tâmplăriei, precum și buna calitate a montajului dobândită în timp, ne recomandă ca fiind o firmă eficientă și întotdeauna o alegere inspirată pentru clienții noștrii, datorită seriozității de care dăm dovadă și a prețurilor practicate.',
                    'Suntem recunoscători să avem alături peste 40 de angajați care împărtășesc viziunea PBT: crearea celor mai bune produse din tâmplărie PVC și aluminiu. Specialiștii companiei noastre sunt mereu dornici să lucreze cu cele mai noi materiale și tehnici inovatoare pentru a satisface dorințele clienților.'
                ]
            }
        ]
    }
];

export default function About() {
    const { t } = useTranslation('about');

    return (
        <Layout
            pageID="about"
            title={t('common:about')}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ex quidem perspiciatis architecto? Quam, voluptas aliquid laboriosam officiis corrupti esse."
        >
            <div className="section-spacing-lg" />

            <div className="container-padding">
                <h1 className="text-center lg:mb-20">{t('common:about')}</h1>

                <section className="relative space-y-10 lg:p-4" id="description">
                    <div className="lg:absolute top-0 left-0 h-full w-1/2 bg-theme2 z-0"></div>

                    <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 z-10">
                        <div className="space-y-4 lg:text-white my-auto">
                            <h2>Producem pentru confort</h2>
                            <p className="text-justify">
                                Promotion Business Team este o companie la baza căreia se află o echipă tânără și
                                dinamică, formată din specialiști în tâmplăria PVC și cea din aluminiu. Astfel,
                                răspundem cerințelor dumneavoastră prin servicii excelente de fabricare și montare a
                                sistemelor de tâmplărie cu geam termopan sau tripan, indiferent de tipul acestora.
                            </p>
                        </div>

                        <div className="order-first lg:order-2">
                            <div className="relative h-96 w-auto shadow-xl">
                                <Image
                                    src="/images/fillers/atelier.webp"
                                    alt="Atelier tamplarie pvc, lemn si aluminiu"
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="order-last my-auto">
                            <div className="grid grid-cols-2 z-10">
                                {statsData.map((e, i) => (
                                    <div className="text-center p-2" key={i}>
                                        <h4>{e.count}</h4>
                                        <p className="uppercase">{e.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <Suppliers />
                    </div>
                </section>

                <div className="section-spacing" />

                <section className="relative space-y-10" id="services">
                    <div>
                        <h2 className="text-center">Serviciile oferite de noi</h2>
                        <p className="text-center lg:mx-auto lg:w-1/2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dicta perspiciatis quas
                            velit porro pariatur veritatis, tempora aspernatur quasi nesciunt?
                        </p>
                    </div>

                    <div className="py-1" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-y-10 lg:gap-x-4">
                        {servicesData.map((e, i) => (
                            <div className="relative bg-white shadow flex flex-col items-center pt-4" key={i}>
                                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-10 flex items-center bg-theme1 text-white rounded-full w-fit p-2">
                                    <span className="material-symbols-outlined m-icon-36">{e.icon}</span>
                                </div>
                                <div className="p-4">
                                    <h4>{e.title}</h4>
                                    <p>{e.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link href="/servicii" passhref>
                        <a className="theme-button1 flex items-center space-x-2 w-fit mx-auto">
                            <span>Mai multe informatii</span>
                            <span className="material-symbols-outlined">trending_flat</span>
                        </a>
                    </Link>
                </section>

                <div className="section-spacing" />

                <section id="evolution">
                    <h3 className="text-center">Evolutia Noastra</h3>

                    <div className="relative mt-5 md:w-2/3 md:mx-auto">
                        {timelineData.map((e, i) => (
                            <div className="relative flex items-center" key={i}>
                                <h5 className="hidden md:block w-[10%] mb-auto">{e.year}</h5>

                                <div className="border-r-2 border-theme1 absolute h-full left-1 md:left-20 top-2 z-10">
                                    <i className="fas fa-circle -top-1 -ml-2 absolute text-theme2"></i>
                                </div>

                                <div className="basis-[80%] ml-10 md:ml-16 lg:ml-10 xl:ml-5">
                                    <div className="mb-4 mt-2 md:hidden">
                                        <div className="font-bold">{e.year}</div>
                                    </div>

                                    {e.card.map((card, index) => (
                                        <div key={index}>
                                            <div className="mb-5">
                                                {card.content.map((pgh, idx) => (
                                                    <p key={idx}>{pgh}</p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="section-spacing" />

                <section id="cta">
                    <div className="relative bg-gradient-to-tr from-[#bb9031] to-[#f4b632] shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="space-y-10 px-8 py-8 lg:py-4 text-white my-auto">
                                <div className="space-y-4">
                                    <h2>Lorem ipsum dolor sit amet.</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui omnis, error
                                        quasi ea molestias? Earum, possimus vero. Eveniet, libero.
                                    </p>
                                </div>

                                <div className="flex space-x-4">
                                    <button className="theme-button1">{t('common:getquote')}</button>
                                </div>
                            </div>
                            <div className="flex items-end justify-end">
                                <img
                                    src="/images/fillers/landing-image.webp"
                                    alt=""
                                    className="h-96 w-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="section-spacing" />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'about']))
        }
    };
}
