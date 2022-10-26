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
    description: ['description']
};

const variantsData = [
    {
        src: '/images/products/perete-antivant/rulou-casetat.webp',
        name: 'variants.casetat',
        description: ['variants.casetatdesc'],
        stats: [
            { icon: 'settings_remote', label: 'variants.actionare', value: 'variants.elecmanual' },
            { icon: 'straighten', label: 'variants.dimensiuni', value: '3m x 2.5m' },
            { icon: 'thermostat', label: 'variants.rezistenta', value: '-22°C/+66°C' }
        ]
    },
    {
        src: '/images/products/perete-antivant/rulou-necasetat.webp',
        name: 'variants.necasetat',
        description: ['variants.necasetatdesc'],
        stats: [
            { icon: 'settings_remote', label: 'variants.actionare', value: 'variants.elecmanual' },
            { icon: 'straighten', label: 'variants.dimensiuni', value: '6m x 3m' },
            { icon: 'thermostat', label: 'variants.rezistenta', value: '-22°C/+66°C' }
        ]
    },
    {
        src: '/images/products/perete-antivant/rulou-capse.webp',
        name: 'variants.capse',
        description: ['variants.capsedesc'],
        stats: [
            { icon: 'settings_remote', label: 'variants.actionare', value: 'Manual' },
            { icon: 'straighten', label: 'variants.dimensiuni', value: '4.5m x 3m' },
            { icon: 'thermostat', label: 'variants.rezistenta', value: '-22°C/+66°C' }
        ]
    }
];

const ctaData = [
    '/images/products/perete-antivant/rulou-casetat.webp',
    '/images/products/perete-antivant/rulou-necasetat.webp',
    '/images/products/perete-antivant/rulou-capse.webp',
    '/images/products/perete-antivant/highlight.webp'
];

export default function PereteAntivant() {
    const { t } = useTranslation('pereteantivant');

    return (
        <Layout title={t('common:product.pereteantivant')} description={t('description')}>
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
