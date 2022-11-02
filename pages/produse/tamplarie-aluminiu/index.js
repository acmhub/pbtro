import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../../components/General/Layout';
import ProductLanding from '../../../components/Products/ProductLanding';
import ConstructiveOptions from '../../../components/Products/ConstructiveOptions';
import Profiles from '../../../components/Products/Profiles';
import Atypics from '../../../components/Products/Atypics';
import Colors from '../../../components/Products/Colors';
import ProductCTA from '../../../components/Products/ProductCTA';

const landingData = {
    src: '/images/products/tamplarie-aluminiu/highlight.webp',
    product: 'common:product.tamplariealuminiu',
    description: ['description']
};

const constructiveData = [
    {
        source: '/images/products/tamplarie-aluminiu/fereastra.webp',
        title: 'constructive.fereastra',
        description: ['constructive.fereastradesc1', 'constructive.fereastradesc2']
    },
    {
        source: '/images/products/tamplarie-aluminiu/usa.webp',
        title: 'constructive.usa',
        description: ['constructive.usadesc1', 'constructive.usadesc2']
    },
    {
        source: '/images/products/tamplarie-aluminiu/glisanta.webp',
        title: 'constructive.glisanta',
        description: ['constructive.glisantadesc']
    },
    {
        source: '/images/products/tamplarie-aluminiu/obloane.webp',
        title: 'constructive.obloane',
        description: ['constructive.obloanedesc1', 'constructive.obloanedesc2']
    }
];

const profilesData = [
    {
        manufacturer: 'Cortizo',
        manufacturerLogo: '/images/suppliers/cortizo.webp',
        model: 'COR60',
        profile: '/images/products/tamplarie-aluminiu/cor60.png',
        href: '/produse/tamplarie-aluminiu/cor60',
        image: '/images/products/tamplarie-aluminiu/cor60_demo.webp',
        tehnicalDetails: [
            {
                label: 'common:profilespecs.toc',
                value: '60mm'
            },
            {
                label: 'common:profilespecs.cercevea',
                value: '70mm'
            },
            {
                label: 'common:profilespecs.vitrare',
                value: '48mm'
            },
            {
                label: 'common:profilespecs.izolare',
                value: '0.9 W/m2k'
            },
            {
                label: 'common:profilespecs.variantaconstructiva',
                value: 'common:profilespecs.cubariera'
            }
        ]
    },
    {
        manufacturer: 'Cortizo',
        manufacturerLogo: '/images/suppliers/cortizo.webp',
        model: 'COR80',
        profile: '/images/products/tamplarie-aluminiu/cor80.png',
        href: '/produse/tamplarie-aluminiu/cor80',
        image: '/images/products/tamplarie-aluminiu/cor80_demo.webp',
        tehnicalDetails: [
            {
                label: 'common:profilespecs.toc',
                value: '80mm'
            },
            {
                label: 'common:profilespecs.cercevea',
                value: '88mm'
            },
            {
                label: 'common:profilespecs.vitrare',
                value: 'max 65mm'
            },
            {
                label: 'common:profilespecs.izolare',
                value: '0.8 W/m2k'
            },
            {
                label: 'common:profilespecs.variantaconstructiva',
                value: 'common:profilespecs.cubariera'
            }
        ]
    },
    {
        manufacturer: 'Altest',
        manufacturerLogo: '/images/suppliers/altest.webp',
        model: 'Eskimos',
        profile: '/images/products/tamplarie-aluminiu/eskimos.png',
        href: '/produse/tamplarie-aluminiu/eskimos',
        image: '/images/products/tamplarie-aluminiu/eskimos_demo.webp',
        tehnicalDetails: [
            {
                label: 'common:profilespecs.toc',
                value: '53mm'
            },
            {
                label: 'common:profilespecs.izolare',
                value: '1.15 W/m2k'
            },
            {
                label: 'common:profilespecs.vitrare',
                value: '18mm / 38mm'
            },
            {
                label: 'common:profilespecs.fonica',
                value: '48dB'
            }
        ]
    },
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR26',
        profile: '/images/products/tamplarie-aluminiu/pr26.png',
        href: '/produse/tamplarie-aluminiu/pr26',
        image: '/images/products/tamplarie-aluminiu/pr26_demo.webp',
        tehnicalDetails: [
            {
                label: 'common:profilespecs.tocdublu',
                value: '52mm'
            },
            {
                label: 'common:profilespecs.canat',
                value: '28mm'
            },
            {
                label: 'common:profilespecs.vitrare',
                value: '26mm'
            },
            {
                label: 'common:profilespecs.variantaconstructiva',
                value: 'common:profilespecs.farabariera'
            }
        ]
    },
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR50',
        profile: '/images/products/tamplarie-aluminiu/pr50.png',
        href: '/produse/tamplarie-aluminiu/pr50',
        image: '/images/products/tamplarie-aluminiu/pr50_demo.webp',
        tehnicalDetails: [
            {
                label: 'common:profilespecs.montant',
                value: '50mm'
            },
            {
                label: 'common:profilespecs.vitrare',
                value: '24mm / 40mm'
            },
            {
                label: 'common:profilespecs.variantaconstructiva',
                value: 'common:profilespecs.cubariera'
            }
        ]
    },
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR52',
        profile: '/images/products/tamplarie-aluminiu/pr52.png',
        href: '/produse/tamplarie-aluminiu/pr52',
        image: '/images/products/tamplarie-aluminiu/pr52_demo.webp',
        tehnicalDetails: [
            {
                label: 'common:profilespecs.latimetoc',
                value: '44.8mm'
            },
            {
                label: 'common:profilespecs.canat',
                value: '52mm'
            },
            {
                label: 'common:profilespecs.vitrare',
                value: '32mm'
            },
            {
                label: 'common:profilespecs.variantaconstructiva',
                value: 'common:profilespecs.farabariera'
            }
        ]
    },
    {
        manufacturer: 'Altest',
        manufacturerLogo: '/images/suppliers/altest.webp',
        model: 'Sliding',
        profile: '/images/products/tamplarie-aluminiu/sliding.png',
        href: '/produse/tamplarie-aluminiu/sliding',
        image: '/images/products/tamplarie-aluminiu/sliding_demo.webp',
        tehnicalDetails: [
            {
                label: 'common:profilespecs.toc',
                value: '45mm'
            },
            {
                label: 'common:profilespecs.izolare',
                value: '9.3 W/m2k'
            },
            {
                label: 'common:profilespecs.vitrare',
                value: '18mm'
            },
            {
                label: 'common:profilespecs.variantaconstructiva',
                value: 'common:profilespecs.farabariera'
            }
        ]
    }
];

const ctaData = [
    '/images/products/tamplarie-aluminiu/cor60_demo.webp',
    '/images/products/tamplarie-aluminiu/cor80_demo.webp',
    '/images/products/tamplarie-aluminiu/eskimos_demo.webp',
    '/images/products/tamplarie-aluminiu/pr26_demo.webp',
    '/images/products/tamplarie-aluminiu/pr50_demo.webp',
    '/images/products/tamplarie-aluminiu/pr52_demo.webp',
    '/images/products/tamplarie-aluminiu/sliding_demo.webp'
];

export default function TamplarieAluminiu() {
    const { t } = useTranslation('tamplariealuminiu');
    return (
        <Layout title={t('common:product.tamplariealuminiu')} description={t('description')}>
            <div className="container-padding">
                <div className="section-spacing" />
                <ProductLanding data={landingData} t={t} />

                <div className="section-spacing" />

                <section id="constructive">
                    <ConstructiveOptions data={constructiveData} t={t} />
                </section>

                <div className="section-spacing" />

                <section id="profiles">
                    <h2 className="text-center mb-10">{t('common:fereastrapbt')}</h2>
                    <Profiles data={profilesData} t={t} />
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

                <ProductCTA data={ctaData} t={t} />
            </div>

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
