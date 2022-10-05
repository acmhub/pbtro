import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/General/Layout';

export default function Contact() {
    const { t } = useTranslation('contact');

    return (
        <Layout
            pageID="about"
            title={t('common:nav.contact')}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ex quidem perspiciatis architecto? Quam, voluptas aliquid laboriosam officiis corrupti esse."
        >
            <div className="container-padding">
                <p>{t('common:title')}</p>
            </div>
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'contact']))
        }
    };
}
