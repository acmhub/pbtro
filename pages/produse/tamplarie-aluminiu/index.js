import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Layout from '../../../components/General/Layout';
import Profiles from '../../../components/Dynamic/Profiles';
import Atypics from '../../../components/Products/Atypics';
import Colors from '../../../components/Products/Colors';
import ProductCTA from '../../../components/Products/ProductCTA';
import ProductLanding from '../../../components/Products/ProductLanding';

const landingData = {
    src: '/images/products/tamplarie-aluminiu/highlight.webp',
    product: 'common:product.tamplariealuminiu',
    description: [
        'Tâmplaria de aluminiu aduce un grad ridicat de stabilitate, eficiență energetică, valoare crescută, cadru îngust și modern, funcționare bună, întreținere minimă și durată lungă de viață.'
    ]
};

const profilesData = [
    {
        manufacturer: 'Cortizo',
        manufacturerLogo: '/images/suppliers/cortizo.webp',
        model: 'COR60',
        profile: '/images/products/tamplarie-aluminiu/cor60.png',
        href: '/produse/tamplarie-aluminiu/cor60',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: [
            {
                label: 'Toc',
                value: '60mm'
            },
            {
                label: 'Cercevea',
                value: '70mm'
            },
            {
                label: 'Dimensiune Vitrare',
                value: '48mm'
            },
            {
                label: 'Izolare Termica',
                value: 'Pana la 0.9 W/m2k'
            },
            {
                label: 'Varianta Constructiva',
                value: 'Cu Rupere Termica'
            }
        ]
    },
    {
        manufacturer: 'Cortizo',
        manufacturerLogo: '/images/suppliers/cortizo.webp',
        model: 'COR80',
        profile: '/images/products/tamplarie-aluminiu/cor80.png',
        href: '/produse/tamplarie-aluminiu/cor80',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: [
            {
                label: 'Toc',
                value: '80mm'
            },
            {
                label: 'Cercevea',
                value: '88mm'
            },
            {
                label: 'Dimensiune Vitrare',
                value: 'max 65mm'
            },
            {
                label: 'Izolare Termica',
                value: 'Pana la 0.8 W/m2k'
            },
            {
                label: 'Varianta Constructiva',
                value: 'Cu Rupere Termica'
            }
        ]
    },
    {
        manufacturer: 'Altest',
        manufacturerLogo: '/images/suppliers/altest.webp',
        model: 'Eskimos',
        profile: '/images/products/tamplarie-aluminiu/eskimos.png',
        href: '/produse/tamplarie-aluminiu/eskimos',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: [
            {
                label: 'Toc',
                value: '53mm'
            },
            {
                label: 'Izolare Termica',
                value: '3.33 W/m2k'
            },
            {
                label: 'Dimensiune Vitrare',
                value: '18mm / 38mm'
            },
            {
                label: 'Izolare Fonica',
                value: 'Pana la 48dB'
            }
        ]
    },
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR26',
        profile: '/images/products/tamplarie-aluminiu/pr26.png',
        href: '/produse/tamplarie-aluminiu/pr26',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: [
            {
                label: 'Latime Toc Glisare Dubla',
                value: '52mm'
            },
            {
                label: 'Latime Canat',
                value: '28mm'
            },
            {
                label: 'Dimensiune Vitrare',
                value: '26mm'
            },
            {
                label: 'Varianta Constructiva',
                value: 'Fara Rupere Termica'
            }
        ]
    },
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR50',
        profile: '/images/products/tamplarie-aluminiu/pr50.png',
        href: '/produse/tamplarie-aluminiu/pr50',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: [
            {
                label: 'Latime Montant',
                value: '50mm'
            },
            {
                label: 'Dimensiune Vitrare',
                value: '24mm / 40mm'
            },
            {
                label: 'Varianta Constructiva',
                value: 'Cu Bariera Termica'
            }
        ]
    },
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR52',
        profile: '/images/products/tamplarie-aluminiu/pr52.png',
        href: '/produse/tamplarie-aluminiu/pr52',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: [
            {
                label: 'Latime Minima Toc',
                value: '44.8mm'
            },
            {
                label: 'Latime Canat',
                value: '52mm'
            },
            {
                label: 'Dimensiune Vitrare',
                value: '32mm'
            },
            {
                label: 'Varianta Constructiva',
                value: 'Fara Rupere Termica'
            }
        ]
    },
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR52',
        profile: '/images/products/tamplarie-aluminiu/pr52.png',
        href: '/produse/tamplarie-aluminiu/pr52',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: [
            {
                label: 'Latime Minima Toc',
                value: '44.8mm'
            },
            {
                label: 'Latime Canat',
                value: '52mm'
            },
            {
                label: 'Dimensiune Vitrare',
                value: '32mm'
            },
            {
                label: 'Varianta Constructiva',
                value: 'Fara Rupere Termica'
            }
        ]
    },
    {
        manufacturer: 'Altest',
        manufacturerLogo: '/images/suppliers/altest.webp',
        model: 'Sliding',
        profile: '/images/products/tamplarie-aluminiu/sliding.png',
        href: '/produse/tamplarie-aluminiu/sliding',
        image: '/images/products/tamplarie-aluminiu/highlight.webp',
        tehnicalDetails: [
            {
                label: 'Toc',
                value: '45mm'
            },
            {
                label: 'Izolare Termica',
                value: '9.3 W/m2k'
            },
            {
                label: 'Dimensiune Vitrare',
                value: '22mm'
            },
            {
                label: 'Varianta Constructiva',
                value: 'Fara Rupere Termica'
            }
        ]
    }
];

const ctaData = [
    '/images/products/tamplarie-aluminiu/highlight.webp',
    '/images/products/tamplarie-aluminiu/highlight.webp',
    '/images/products/tamplarie-aluminiu/highlight.webp',
    '/images/products/tamplarie-aluminiu/highlight.webp',
    '/images/products/tamplarie-aluminiu/highlight.webp'
];

export default function TamplarieAluminiu() {
    const { t } = useTranslation('tamplariealuminiu');
    return (
        <Layout title={t('common:product.tamplariealuminiu')} description="">
            <div className="container-padding">
                <div className="section-spacing" />
                <ProductLanding data={landingData} t={t} />

                <div className="section-spacing" />

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
            ...(await serverSideTranslations(locale, ['common', 'tamplariealuminiu']))
        }
    };
}
