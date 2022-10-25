import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/General/Layout';
import ProductLanding from '../../components/Products/ProductLanding';
import ProductVariants from '../../components/Products/ProductVariants';
import ProductAccessories from '../../components/Products/ProductAccessories';
import Colors from '../../components/Products/Colors';
import ProductCTA from '../../components/Products/ProductCTA';

const landingData = {
    src: '/images/products/rulou-exterior/highlight.webp',
    product: 'common:product.rulouexterior',
    description: [
        'Pereţii cortină reprezintă cea mai elegantă, sigură şi accesibilă fațadă ce poate îmbrăca orice tip de construcţie. Se remarcă prin proprietăţile excepţionale de izolare termică şi fonică, prin posibilităţi infinite de design ce se adaptează oricărei viziuni arhitecturale, timp de execuţie şi montaj scurt şi o întreţinere uşoară.'
    ]
};

const variantsData = [
    {
        src: '/images/products/rulou-exterior/highlight.webp',
        name: 'Rulou Aplicat',
        description: [
            'Sunt recomandate pentru construcții finalizate cu ferestre deja existente. Instalarea acestora, în funcție de tipul clădirii, se poate face atât pe zidărie cât și pe tâmplărie.'
        ]
    },
    {
        src: '/images/products/rulou-exterior/highlight.webp',
        name: 'Rulou Suprapus',
        description: [
            'Sunt destinate locuințelor noi sau atunci când se dorește schimbarea tâmplăriei în totalitate deoarece se montează împreună cu tâmplăria din PVC sau aluminiu. Caseta de protecție se montează împreună cu tâmplăria în golul ferestrei, fixându-se deasupra acesteia.'
        ]
    }
];

const accessoriesData = [
    {
        tab: 'Actionare',
        items: [
            {
                src: '/images/products/rulou-exterior/actionare_pamblica.webp',
                name: 'Pamblica'
            },
            {
                src: '/images/products/rulou-exterior/actionare_manivela.webp',
                name: 'Manivela'
            },
            {
                src: '/images/products/rulou-exterior/actionare_cu_buton.webp',
                name: 'Buton'
            },
            {
                src: '/images/products/rulou-exterior/actionare_cu_telecomanda.webp',
                name: 'Telecomanda'
            }
        ]
    },
    {
        tab: 'Caseta',
        items: [
            {
                src: '/images/products/rulou-exterior/caseta1.webp',
                name: 'Casetă Tesita 45°'
            },
            {
                src: '/images/products/rulou-exterior/caseta2.webp',
                name: 'Casetă Tesita Semirotunda'
            },
            {
                src: '/images/products/rulou-exterior/caseta3.webp',
                name: 'Casetă Tesita 90°'
            }
        ]
    },
    {
        tab: 'Accesorii',
        items: [
            {
                src: '/images/products/rulou-exterior/plasa-integrata.webp',
                name: 'Plasa contra Insectelor'
            },
            {
                src: '/images/products/rulou-exterior/lamela.webp',
                name: 'Lamela (39mm, 43mm sau 55mm)'
            },
            {
                src: '/images/products/rulou-exterior/yala.webp',
                name: 'Yala'
            },
            {
                src: '/images/products/rulou-exterior/anti-efractie.webp',
                name: 'Cleme Anti-efractie'
            }
        ]
    }
];

const ctaData = [
    '/images/products/rulou-exterior/highlight.webp',
    '/images/products/rulou-exterior/highlight.webp',
    '/images/products/rulou-exterior/highlight.webp',
    '/images/products/rulou-exterior/highlight.webp',
    '/images/products/rulou-exterior/highlight.webp'
];

export default function RulouExterior() {
    const { t } = useTranslation('rulouexterior');
    return (
        <Layout title={t('common:product.rulouexterior')} description="">
            <div className="section-spacing" />

            <div className="container-padding">
                <ProductLanding data={landingData} t={t} />

                <div className="section-spacing" />

                <ProductVariants data={variantsData} t={t} />

                <div className="section-spacing" />

                <ProductAccessories data={accessoriesData} t={t} />

                <div className="section-spacing" />

                <Colors t={t} />

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
            ...(await serverSideTranslations(locale, ['common', 'rulouexterior']))
        }
    };
}
