import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/General/Layout';

export default function Produse() {
    const { t } = useTranslation('products');
    return (
        <Layout title={t('common:products')} description="">
            <div className="section-spacing" />

            <div className="container-padding"></div>

            <div className="section-spacing" />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'produse']))
        }
    };
}
