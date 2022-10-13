import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/General/Layout';

export default function Accesorii() {
    const { t } = useTranslation('accesorii');

    return (
        <Layout
            pageID="about"
            title={t('common:accessories')}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ex quidem perspiciatis architecto? Quam, voluptas aliquid laboriosam officiis corrupti esse."
        >
            <div className="section-spacing" />
            <div className="container-padding">
                <p>{t('common:title')}</p>
            </div>
            <div className="section-spacing" />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'accesorii']))
        }
    };
}
