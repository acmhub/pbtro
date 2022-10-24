import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Layout from '../../components/General/Layout';
import ProductCTA from '../../components/Products/ProductCTA';
import ProductLanding from '../../components/Products/ProductLanding';
import Atypics from '../../components/Products/Atypics';

const landingData = {
    src: '/images/products/tamplarie-lemn/highlight.webp',
    product: 'common:product.tamplarielemn',
    description: [
        'Tâmplăria din lemn stratificat nu doar că arată elegant, ci oferă și o remarcabilă fiabilitate. De punctat că este și o soluție prietenoasă cu mediul. Lemnul procesat este selectat atent și bine uscat, nu prezintă noduri, iar adezivul este rezistent la apă. Rezultatul obținut este un profil uniform, rigid și cu o portanță excelentă.'
    ]
};

const ctaData = [
    '/images/products/tamplarie-lemn/highlight.webp',
    '/images/products/tamplarie-lemn/highlight.webp',
    '/images/products/tamplarie-lemn/highlight.webp',
    '/images/products/tamplarie-lemn/highlight.webp',
    '/images/products/tamplarie-lemn/highlight.webp'
];

export default function TamplarieLemn() {
    const { t } = useTranslation('tamplarielemn');
    return (
        <Layout title={t('common:product.tamplarielemn')} description="">
            <div className="section-spacing" />

            <div className="container-padding">
                <ProductLanding data={landingData} t={t} />

                <div className="section-spacing" />

                <section className="relative lg:p-4 lg:py-10" id="plating">
                    <div className="lg:absolute top-0 left-0 h-full w-1/2 bg-theme2 z-0"></div>
                    <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 z-10">
                        <div className="space-y-4 lg:text-white my-auto">
                            <h3>
                                Tâmplărie Lemn <br />
                                Placată cu Aluminiu
                            </h3>
                            <p className="text-justify">
                                Aluminiul la exterior nu necesită întreținere și asigură etanșarea optimă pentru
                                intemperii, oferind de asemenea proiectantului posibilitatea de a se exprima prin forme
                                și culori inedite
                            </p>
                        </div>

                        <div className="order-first lg:order-2">
                            <div className="relative h-96 w-auto">
                                <Image
                                    src="/images/products/tamplarie-lemn/wood-plating.webp"
                                    alt={t('common:product.tamplarielemn')}
                                    layout="fill"
                                    objectFit="contain"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="order-last my-auto">
                            <div className="space-y-8 w-fit mx-auto lg:w-full">
                                {['Durabilitate Ecologica', 'Izolatie Termica', 'Izolatie Fonica', 'Estetica'].map(
                                    (e, i) => (
                                        <div className="flex items-center space-x-2" key={i}>
                                            <div className="bg-theme1 rounded-full h-8 w-8 grid place-content-center p-0.5">
                                                <span className="material-symbols-outlined text-white">done</span>
                                            </div>
                                            <span>{e}</span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="section-spacing" />

            <Atypics t={t} />

            <div className="section-spacing" />

            <div className="container-padding">
                <section className="space-y-10" id="colors">
                    <h2 className="text-center">Culori disponibile</h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                        {[
                            '/images/products/tamplarie-lemn/colors/c12.webp',
                            '/images/products/tamplarie-lemn/colors/c13.webp',
                            '/images/products/tamplarie-lemn/colors/c14.webp',
                            '/images/products/tamplarie-lemn/colors/c15.webp',
                            '/images/products/tamplarie-lemn/colors/c16.webp',
                            '/images/products/tamplarie-lemn/colors/c17.webp',
                            '/images/products/tamplarie-lemn/colors/c18.webp',
                            '/images/products/tamplarie-lemn/colors/c19.webp',
                            '/images/products/tamplarie-lemn/colors/c20.webp',
                            '/images/products/tamplarie-lemn/colors/c21.webp',
                            '/images/products/tamplarie-lemn/colors/c23.webp',
                            '/images/products/tamplarie-lemn/colors/c33.webp'
                        ].map((e, i) => (
                            <div key={i}>
                                <div className="relative h-52 w-auto">
                                    <Image src={e} alt="Culoare" layout="fill" objectFit="cover" />
                                </div>
                                <h6 className="text-center">{e.replace(/^.*[\\\/]/, '').slice(0, -5)}</h6>
                            </div>
                        ))}
                    </div>
                </section>

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
            ...(await serverSideTranslations(locale, ['common', 'tamplarielemn']))
        }
    };
}
