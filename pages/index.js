import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/General/Layout';
import {
    Landing,
    Products,
    About,
    WindowDoor,
    Services,
    Portfolio,
    CallToAction,
    Accessories,
    Testimonials,
    Contact
} from '../components/HomeComponents';

export default function Home() {
    const { t } = useTranslation('home');

    return (
        <Layout pageID="home" description={t('landing.description')}>
            <Landing t={t} />
            <div className="py-10" />
            <Products t={t} />
            <div className="section-spacing" />
            <About t={t} />
            <div className="section-spacing" />
            <WindowDoor t={t} />
            <div className="section-spacing" />
            <Services t={t} />
            <div className="section-spacing" />
            <Portfolio t={t} />
            <div className="section-spacing" />
            <CallToAction t={t} />
            <div className="section-spacing" />
            <Accessories t={t} />
            <div className="section-spacing" />
            <Testimonials t={t} />
            <div className="section-spacing" />
            <Contact t={t} />
            <div className="section-spacing" />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home']))
        }
    };
}
