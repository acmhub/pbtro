import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/General/Layout';
import ProductLanding from '../../components/Products/ProductLanding';
import ProductVariants from '../../components/Products/ProductVariants';
import ProductCTA from '../../components/Products/ProductCTA';

const landingData = {
    src: '/images/products/perete-antivant/highlight.webp',
    product: 'common:product.pereteantivant',
    description: ['']
};

const variantsData = [
    {
        src: '/images/products/perete-antivant/highlight.webp',
        name: 'Rulou de Folie Casetat',
        description: [
            'O alegere bună datorită raportului calitate/preț. Sunt uși de garaj ieftine datorită reducerii pierderilor de material, panourile fiind realizate la dimensiuni standard. Sunt dotate cu arcuri de tracțiune ce pot fi montate sub șină pe care culisează ușa sau pe lateralele ei.'
        ],
        stats: [
            { icon: 'settings_remote', label: 'Actionare', value: 'Electric sau Manual' },
            { icon: 'straighten', label: 'Dimensiuni maxime', value: '3m x 2.5m' },
            { icon: 'thermostat', label: 'Rezistenta', value: '-22°C/+66°C' }
        ]
    },
    {
        src: '/images/products/perete-antivant/highlight.webp',
        name: 'Rulou de Folie Necasetat',
        description: [
            'O alegere bună datorită raportului calitate/preț. Sunt uși de garaj ieftine datorită reducerii pierderilor de material, panourile fiind realizate la dimensiuni standard. Sunt dotate cu arcuri de tracțiune ce pot fi montate sub șină pe care culisează ușa sau pe lateralele ei.'
        ],
        stats: [
            { icon: 'settings_remote', label: 'Actionare', value: 'Electric sau Manual' },
            { icon: 'straighten', label: 'Dimensiuni maxime', value: '6m x 3m' },
            { icon: 'thermostat', label: 'Rezistenta', value: '-22°C/+66°C' }
        ]
    },
    {
        src: '/images/products/perete-antivant/highlight.webp',
        name: 'Capse si Bride',
        description: [
            'O alegere bună datorită raportului calitate/preț. Sunt uși de garaj ieftine datorită reducerii pierderilor de material, panourile fiind realizate la dimensiuni standard. Sunt dotate cu arcuri de tracțiune ce pot fi montate sub șină pe care culisează ușa sau pe lateralele ei.'
        ],
        stats: [
            { icon: 'settings_remote', label: 'Actionare', value: 'Manual' },
            { icon: 'straighten', label: 'Dimensiuni maxime', value: '4.5m x 3m' },
            { icon: 'thermostat', label: 'Rezistenta', value: '-22°C/+66°C' }
        ]
    }
];

const ctaData = [
    '/images/products/perete-antivant/highlight.webp',
    '/images/products/perete-antivant/highlight.webp',
    '/images/products/perete-antivant/highlight.webp',
    '/images/products/perete-antivant/highlight.webp',
    '/images/products/perete-antivant/highlight.webp'
];

export default function PereteAntivant() {
    const { t } = useTranslation('pereteantivant');

    return (
        <Layout title={t('common:product.pereteantivant')} description="">
            <div className="section-spacing" />

            <div className="container-padding">
                <ProductLanding data={landingData} t={t} />

                <div className="section-spacing" />

                <ProductVariants data={variantsData} t={t} />

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
            ...(await serverSideTranslations(locale, ['common', 'pereteantivant']))
        }
    };
}
