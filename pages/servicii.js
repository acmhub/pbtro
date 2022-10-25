import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Layout from '../components/General/Layout';
import Products from '../components/HomeComponents/products';

const servicesData = [
    {
        src: '/images/services/consulting.webp',
        title: 'Consultanta',
        description:
            'Oferim consultanță, astfel ca specialiștii noștri sunt mereu la dispoziția clienților cu recomandări și informații. Ne dorim să faceți o alegere excelentă din punct de vedere al raportului calitate-preț, dar și al aspectului estetic. Astfel, pentru cele mai bune soluții tehnice în materie de uși, ferestre și balcoane, Promotion Business Team este cea mai bună soluție!'
    },
    {
        src: '/images/services/quality.webp',
        title: 'Calitate',
        description:
            'Pentru a concepe planul perfect al locuinței dumneavoastră, trebuie să acordați atenție fiecărui detaliu. Desigur, nu doar arhitectura și stilul amenajării interioare și exterioare contează, ci și materialele utilizate, dar mai ales calitatea acestora. De aceea standardele trebuie să fie ridicate, întrucat aceste componente au funcții importante.'
    },
    {
        src: '/images/services/production.webp',
        title: 'Productie',
        description:
            'Folosim materii prime și accesorii de cea mai bună calitate, cu aparatură mânuită de experți în producția de tâmplărie. Respectăm termenele și întrecem așteptările! Activitatea din fabrică poate fi planificată, executată și monitorizată mult mai ușor cu soluția de management al producției. Sistemul acoperă patru zone principale: producție, materiale, calitate și mentenanță.'
    },
    {
        src: '/images/services/measurements.webp',
        title: 'Masuratori',
        description:
            'Măsuratorile corecte sunt extrem de importante. Noi realizăm această etapă cu cea mai mare atenție, în orice tip de cladire sau încăpere.'
    },
    {
        src: '/images/services/delivery.webp',
        title: 'Livrare',
        description:
            'Pentru a ne ridica mereu la pretențiile clienților acordăm o atenție specială comenzilor, termenelor de livrare, relațiilor de parteneriat și tuturor contractelor bazate pe seriozitate, încredere și respect.'
    },
    {
        src: '/images/services/fitting.webp',
        title: 'Montaj',
        description:
            'Montăm și verificăm după realizare, cu mare atenție. Totul pentru siguranța și confortul clienților noștri!'
    }
];

export default function Services() {
    const { t } = useTranslation('services');

    return (
        <Layout
            pageID="about"
            title={t('common:services')}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ex quidem perspiciatis architecto? Quam, voluptas aliquid laboriosam officiis corrupti esse."
        >
            <div className="section-spacing-lg" />

            <div className="container-padding">
                <h1 className="text-center mb-16">{t('common:services')}</h1>

                <div className="space-y-10">
                    {servicesData.map((e, i) => (
                        <div className="grid card p-0 grid-cols-1 lg:grid-cols-2" key={i}>
                            <div className={i % 2 == 0 ? 'order-first' : 'lg:order-last'}>
                                <div className="relative h-96 w-full">
                                    <Image src={e.src} alt={e.title} layout="fill" objectFit="cover" />
                                </div>
                            </div>
                            <div className="space-y-4 my-auto p-4">
                                <h3>{e.title}</h3>
                                <p>{e.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="section-spacing" />

                <section className="relative lg:p-4 lg:py-10" id="export">
                    <div className="lg:absolute top-0 left-0 h-full w-1/2 bg-theme2 z-0"></div>
                    <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 z-10">
                        <div className="space-y-4 lg:text-white my-auto">
                            <h2>Paletizare Export</h2>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum incidunt aut
                                exercitationem laborum reiciendis, dolorem dignissimos asperiores, expedita praesentium
                                illo consectetur. Quidem enim saepe dolores?
                            </p>
                        </div>

                        <div className="order-first lg:order-last lg:col-span-2">
                            <div className="relative h-96 w-auto shadow-xl">
                                <Image
                                    src="/images/portfolio/8.webp"
                                    alt={t('common:product.tamplarielemn')}
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="section-spacing" />

                <Products t={t} />
            </div>

            <div className="section-spacing" />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'services']))
        }
    };
}
