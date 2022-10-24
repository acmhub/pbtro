import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../../components/General/Layout';
import ProductLanding from '../../../components/Products/ProductLanding';
import Profiles from '../../../components/Products/Profiles';
import Atypics from '../../../components/Products/Atypics';
import Colors from '../../../components/Products/Colors';
import ProductCTA from '../../../components/Products/ProductCTA';

const landingData = {
    src: '/images/products/tamplarie-pvc/highlight.webp',
    product: 'common:product.tamplariepvc',
    description: [
        'Siguranța și aspectul plăcut determină calitatea și confortul spațiului dumneavoastră. Profilele din PVC sunt cele mai frecvent utilizate în realizarea feroneriei ferestrelor și a ușilor. Izolația termică și costul accesibil tuturor sunt doar câteva dintre beneficiile acestui material.'
    ]
};

const profilesData = [
    {
        manufacturer: 'Klass',
        manufacturerLogo: '/images/suppliers/klass.webp',
        model: 'K-600',
        profile: '/images/products/tamplarie-pvc/k600.webp',
        href: '/produse/tamplarie-pvc/klass600',
        image: '/images/products/tamplarie-pvc/highlight.webp',
        tehnicalDetails: [
            {
                label: 'Adancime Constructiva',
                value: '70mm'
            },
            {
                label: 'Structura Camerala',
                value: '6'
            },
            {
                label: 'Izolare Termica',
                value: '1.33 W/m2k'
            },
            {
                label: 'Vitrare',
                value: '24mm / 34mm'
            },
            {
                label: 'Clasa Profil',
                value: 'A / B'
            }
        ]
    },
    {
        manufacturer: 'Salamander',
        manufacturerLogo: '/images/suppliers/salamander.webp',
        model: 'Streamline 76',
        profile: '/images/products/tamplarie-pvc/sl76.webp',
        href: '/produse/tamplarie-pvc/streamline76',
        image: '/images/products/tamplarie-pvc/highlight.webp',
        tehnicalDetails: [
            {
                label: 'Adancime Constructiva',
                value: '76mm'
            },
            {
                label: 'Structura Camerala',
                value: '5 / 7'
            },
            {
                label: 'Izolare Termica',
                value: '1.3 W/m2k'
            },
            {
                label: 'Vitrare',
                value: '24mm / 40mm'
            },
            {
                label: 'Clasa Profil',
                value: 'A'
            }
        ]
    },
    {
        manufacturer: 'Salamander',
        manufacturerLogo: '/images/suppliers/salamander.webp',
        model: 'bluEvolution 82',
        profile: '/images/products/tamplarie-pvc/bluevo82.webp',
        href: '/produse/tamplarie-pvc/bluevolution82',
        image: '/images/products/tamplarie-pvc/highlight.webp',
        tehnicalDetails: [
            {
                label: 'Adancime Constructiva',
                value: '82mm'
            },
            {
                label: 'Structura Camerala',
                value: '6'
            },
            {
                label: 'Izolare Termica',
                value: '0.98 W/m2k'
            },
            {
                label: 'Vitrare',
                value: '24mm / 48mm'
            },
            {
                label: 'Clasa Profil',
                value: 'A'
            }
        ]
    },
    {
        manufacturer: 'Salamander',
        manufacturerLogo: '/images/suppliers/salamander.webp',
        model: 'bluEvolution 92',
        profile: '/images/products/tamplarie-pvc/bluevo92.webp',
        href: '/produse/tamplarie-pvc/bluevolution92',
        image: '/images/products/tamplarie-pvc/highlight.webp',
        tehnicalDetails: [
            {
                label: 'Adancime Constructiva',
                value: '92mm'
            },
            {
                label: 'Structura Camerala',
                value: '6'
            },
            {
                label: 'Izolare Termica',
                value: '0.92 W/m2k'
            },
            {
                label: 'Vitrare',
                value: '52mm'
            },
            {
                label: 'Clasa Profil',
                value: 'A'
            }
        ]
    }
];

const ctaData = [
    '/images/products/tamplarie-pvc/highlight.webp',
    '/images/products/tamplarie-pvc/highlight.webp',
    '/images/products/tamplarie-pvc/highlight.webp',
    '/images/products/tamplarie-pvc/highlight.webp',
    '/images/products/tamplarie-pvc/highlight.webp'
];

export default function TamplariePVC() {
    const { t } = useTranslation('tamplariepvc');
    return (
        <Layout title={t('common:product.tamplariepvc')} description="">
            <div className="container-padding">
                <div className="section-spacing" />
                <section id="landing">
                    <ProductLanding data={landingData} t={t} />
                </section>

                <div className="section-spacing" />

                <section id="profiles">
                    <h3 className="text-center mb-10">{t('common:fereastrapbt')}</h3>
                    <Profiles data={profilesData} />
                </section>
            </div>

            <div className="section-spacing" />

            <section id="atypics">
                <Atypics t={t} />
            </section>

            <div className="section-spacing" />

            <div className="container-padding">
                <Colors t={t} />

                <div className="section-spacing" />

                <ProductCTA t={t} data={ctaData} />
            </div>

            <div className="section-spacing" />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'tamplariepvc']))
        }
    };
}
