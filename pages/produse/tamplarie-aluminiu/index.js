import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../../components/General/Layout';
import Profiles from '../../../components/Dynamic/Profiles';
import Atypics from '../../../components/Products/Atypics';

const profilesData = [
    {
        manufacturer: 'Cortizo',
        manufacturerLogo: '/images/suppliers/cortizo.webp',
        model: 'COR60',
        profile: '/images/fillers/aluprofile.jpg',
        href: '/produse/tamplarie-aluminiu/cor60',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: []
    },
    {
        manufacturer: 'Cortizo',
        manufacturerLogo: '/images/suppliers/cortizo.webp',
        model: 'COR80',
        profile: '/images/fillers/aluprofile.jpg',
        href: '/produse/tamplarie-aluminiu/cor80',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: []
    },
    {
        manufacturer: 'Altest',
        manufacturerLogo: '/images/suppliers/altest.webp',
        model: 'Eskimos',
        profile: '/images/fillers/aluprofile.jpg',
        href: '/produse/tamplarie-aluminiu/eskimos',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: []
    },
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR26',
        profile: '/images/fillers/aluprofile.jpg',
        href: '/produse/tamplarie-aluminiu/pr26',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: []
    },
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR50',
        profile: '/images/fillers/aluprofile.jpg',
        href: '/produse/tamplarie-aluminiu/pr50',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: []
    },
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR52',
        profile: '/images/fillers/aluprofile.jpg',
        href: '/produse/tamplarie-aluminiu/pr52',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: []
    },
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR52',
        profile: '/images/fillers/aluprofile.jpg',
        href: '/produse/tamplarie-aluminiu/pr52',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: []
    },
    {
        manufacturer: 'Altest',
        manufacturerLogo: '/images/suppliers/altest.webp',
        model: 'Sliding',
        profile: '/images/fillers/aluprofile.jpg',
        href: '/produse/tamplarie-aluminiu/sliding',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: []
    }
];

export default function TamplarieAluminiu() {
    const { t } = useTranslation('tamplariepvc');
    return (
        <Layout>
            <div className="section-spacing-lg" />

            <div className="container-padding">
                <h1 className="text-center mb-20">Tamplarie Aluminiu</h1>

                <section id="profiles">
                    <h3 className="text-center mb-10">Fereastra PBT</h3>
                    <Profiles data={profilesData} />
                </section>
            </div>

            <div className="section-spacing" />

            <section id="atypics">
                <Atypics t={t} />
            </section>

            <div className="section-spacing" />

            <div className="container-padding"></div>

            <div className="section-spacing" />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'tamplariealuminiu']))
        }
    };
}
