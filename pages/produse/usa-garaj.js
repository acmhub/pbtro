import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Layout from '../../components/General/Layout';
import ProductLanding from '../../components/Products/ProductLanding';
import ProductVariants from '../../components/Products/ProductVariants';
import ProductAccessories from '../../components/Products/ProductAccessories';
import ProductCTA from '../../components/Products/ProductCTA';

const landingData = {
    src: '/images/products/usa-garaj/highlight.webp',
    product: 'common:product.usagaraj',
    description: [
        'Sistemele de pergole retractabile respectiv pergole bioclimatice sunt un accesoriu important atât în construcțiile rezidențiale, cât și comerciale. Fie că vorbim de terasa unui restaurant sau hotel, ori cea de acasă, ele creează spațiul de relaxare perfect și oferă confort celor care se adăpostesc sub ele.'
    ]
};

const variantsData = [
    {
        src: '/images/products/usa-garaj/highlight.webp',
        name: 'Usa de Garaj Benefit',
        description: [
            'O alegere bună datorită raportului calitate/preț. Sunt uși de garaj ieftine datorită reducerii pierderilor de material, panourile fiind realizate la dimensiuni standard. Sunt dotate cu arcuri de tracțiune ce pot fi montate sub șină pe care culisează ușa sau pe lateralele ei.',
            'Avantajul principal al ușilor cu arcuri de tracțiune consta în faptul că instalarea șinei se poate face și când stâlpii laterali și grindă au dimensiuni reduse. Sunt garantate 15 000 de cicluri.'
        ],
        stats: [
            { icon: 'workspace_premium', label: 'Garantie', value: '5 ani' },
            { icon: 'repeat', label: 'Cicluri de Utilizare', value: '15000' }
        ]
    },
    {
        src: '/images/products/usa-garaj/highlight.webp',
        name: 'Usa de Garaj Benefit XL',
        description: [
            'Ușile sectionale BeneFit XL sunt construite pentru garaje mici, cu lungime maxima de 3.2m și sunt echipate cu arcuri de tracțiune amplasate în stâlpii laterali. ',
            'Datorită acestei soluții, spațiul necesar de grindă este redus până la 65mm, în cazul unei uși de garaj manuale, și 120mm în cazul unei uși de garaj electrice. BeneFit XL sunt garantate 15 000 de cicluri de funcționare.'
        ],
        stats: [
            { icon: 'workspace_premium', label: 'Garantie', value: '5 ani' },
            { icon: 'settings_remote', label: 'Actionare', value: 'Electric sau Manual' },
            { icon: 'repeat', label: 'Cicluri de Utilizare', value: '15000' }
        ]
    },
    {
        src: '/images/products/usa-garaj/highlight.webp',
        name: 'Usa de Garaj Optima',
        description: [
            'Ușile de garaj secționale Optima oferă cele mai flexibile variante constructive. Pot fi realizate la comandă, în orice dimensiune, și sunt dotate cu arcuri de torsiune ce pot fi montate atat pe grindă pe care se aplică ușă, cât și în spatele sinelor. ',
            'Ușile Optima sunt garantate 25 000 de cicluri de funcționare. Dacă vom considera o utilizare medie zilnică de 3 cicluri, vom ajunge la o durată de folosință de peste 20 ani.'
        ],
        stats: [
            { icon: 'workspace_premium', label: 'Garantie', value: '10 ani' },
            { icon: 'repeat', label: 'Cicluri de Utilizare', value: '25000' }
        ]
    },
    {
        src: '/images/products/usa-garaj/highlight.webp',
        name: 'Usa de Garaj Vogue',
        description: [
            'La fel ca și Optima, ușa de garaj secțională Vogue se poate realiza pe comandă în orice dimensiune. În schimb, îți oferă posibilitatea personalizării cu inserții de inox. Sunt garantate 25 000 de cicluri de funcționare și o durată de folosință de peste 20 ani.'
        ],
        stats: [
            { icon: 'workspace_premium', label: 'Garantie', value: '15 ani' },
            { icon: 'repeat', label: 'Cicluri de Utilizare', value: '25000' }
        ]
    }
];

const accessoriesData = [
    {
        tab: 'Vitrare',
        items: [
            {
                src: '/images/products/usa-garaj/vitrare-dreptunghi-640x340.webp',
                name: 'Ferestre Dreptunghiulare 640x340'
            },
            {
                src: '/images/products/usa-garaj/vitrare-dreptunghi-610x140.webp',
                name: 'Ferestre Dreptunghiulare 610x140'
            }
        ]
    },
    {
        tab: 'Usa Pietonala',
        items: [
            {
                src: '/images/products/usa-garaj/usa-linii.webp',
                name: 'Model Linii'
            },
            {
                src: '/images/products/usa-garaj/usa-bloc.webp',
                name: 'Usa de Acces in Cladire'
            }
        ]
    },
    {
        tab: 'Accesorii',
        items: [
            {
                src: '/images/products/usa-garaj/buton-perete.webp',
                name: 'Buton Perete'
            },
            {
                src: '/images/products/usa-garaj/fotocelule.webp',
                name: 'Sistem de Fotocelule'
            },
            {
                src: '/images/products/usa-garaj/maner.webp',
                name: 'Maner Simplu'
            },
            {
                src: '/images/products/usa-garaj/yala-blocare.webp',
                name: 'Yala Blocare'
            },
            {
                src: '/images/products/usa-garaj/yala-motor.webp',
                name: 'Yala Deblocare Motor'
            },
            {
                src: '/images/products/usa-garaj/sistem-blocare.webp',
                name: 'Sistem Suplimentar Blocare'
            },
            {
                src: '/images/products/usa-garaj/bolt.webp',
                name: 'Bolt'
            },
            {
                src: '/images/products/usa-garaj/telecomanda.webp',
                name: 'Telecomanda 4 Canale'
            }
        ]
    }
];

const ctaData = [
    '/images/products/usa-garaj/highlight.webp',
    '/images/products/usa-garaj/highlight.webp',
    '/images/products/usa-garaj/highlight.webp',
    '/images/products/usa-garaj/highlight.webp',
    '/images/products/usa-garaj/highlight.webp'
];

export default function UsaGaraj() {
    const { t } = useTranslation('usagaraj');
    return (
        <Layout title={t('common:product.usagaraj')} description="">
            <div className="section-spacing" />

            <div className="container-padding">
                <ProductLanding data={landingData} t={t} />

                <div className="section-spacing" />

                <ProductVariants data={variantsData} t={t} />

                <div className="section-spacing" />

                <section className="relative lg:p-4 lg:py-10" id="carina">
                    <div className="lg:absolute top-0 left-0 h-full w-1/2 bg-theme2 z-0"></div>
                    <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 z-10">
                        <div className="space-y-8 lg:text-white my-auto">
                            <div>
                                <h3>Usa de Garaj Sectionala</h3>
                                <h5>Cote Standard</h5>
                            </div>

                            <div className="space-y-2">
                                <p className="text-justify">
                                    Construite după proiecte germane, cu norme de calitate riguroase, ușile Carina sunt
                                    gândite să reziste la peste 20 000 de cicluri de acționare. Încercați să calculați
                                    numărul de ani de utilizare plecând de la această valoare, 20 000 de cicluri.
                                </p>
                                <p className="text-justify">
                                    Ușile de garaj Carina sunt fabricate pe dimensiuni standard și se livrează din stoc.
                                    Stocul de tablă vopsită poate influența disponibilitatea temporară a produselor
                                    finite.
                                </p>
                            </div>
                        </div>

                        <div className="order-first lg:order-2">
                            <div className="relative h-96 w-auto">
                                <Image
                                    src="/images/products/usa-garaj/carina.webp"
                                    alt={t('common:product.usagaraj')}
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="order-last my-auto">
                            <h4 className="text-center mb-4">Culori disponibile</h4>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                                {[
                                    '/images/products/usa-garaj/ral9016.webp',
                                    '/images/products/usa-garaj/ral8017.webp',
                                    '/images/products/usa-garaj/ral7016.webp'
                                ].map((e, i) => (
                                    <div className="space-y-2" key={i}>
                                        <div className="relative h-28 w-auto">
                                            <Image src={e} alt="Culoare RAL" layout="fill" objectFit="cover" />
                                            <span className="material-symbols-outlined text-white">done</span>
                                        </div>
                                        <div className="text-center uppercase">
                                            {e.replace(/^.*[\\\/]/, '').slice(0, -5)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="section-spacing" />

                <ProductAccessories data={accessoriesData} t={t} />

                <div className="section-spacing" />

                <ProductCTA data={ctaData} t={t} />
            </div>

            <div className="section-spacing" />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'usagaraj']))
        }
    };
}
