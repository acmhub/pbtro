import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/General/Layout';
import ProductLanding from '../../components/Products/ProductLanding';
import ModelsGallery from '../../components/Products/ModelsGallery';
import ProductCTA from '../../components/Products/ProductCTA';
import { zebraData, roleteData, jaluzeleData } from '../../components/Products/Rolete';

const landingData = {
    src: '/images/products/roleta-textila/highlight.webp',
    product: 'common:product.roletatextila',
    description: ['description']
};

const ctaData = ['/images/products/roleta-textila/highlight.webp'];

export default function RoletaTextila() {
    const { t } = useTranslation('roletatextila');

    return (
        <Layout title={t('common:product.roletatextila')} description={t('description')}>
            <div className="section-spacing" />

            <div className="container-padding">
                <ProductLanding data={landingData} t={t} />

                <div className="section-spacing" />

                <section className="space-y-4" id="rolete">
                    <h3 className="text-center">{t('modelsrolete')}</h3>

                    <ModelsGallery data={roleteData} />
                </section>

                <div className="section-spacing" />

                <section className="space-y-4" id="zebra">
                    <div>
                        <h3 className="text-center">{t('modelszebra')}</h3>
                        <h6 className="text-center">Day & Night</h6>
                    </div>

                    <ModelsGallery data={zebraData} />
                </section>

                <div className="section-spacing" />

                <section className="space-y-4" id="jaluzele">
                    <h3 className="text-center">{t('modelsjaluzele')}</h3>

                    <ModelsGallery data={jaluzeleData} />
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
            ...(await serverSideTranslations(locale, ['common', 'roletatextila']))
        }
    };
}
