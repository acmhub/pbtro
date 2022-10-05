import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/General/Layout';
import { Landing, Products, WindowDoor } from '../components/HomeComponents';

export default function Home() {
    const { t } = useTranslation('home');

    return (
        <Layout pageID="home">
            <div className="navbar-spacing" />
            <Landing t={t} />
            <div className="py-10" />
            <Products t={t} />
            <div className="section-spacing" />
            <WindowDoor t={t} />
            <div className="py-16" />
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
