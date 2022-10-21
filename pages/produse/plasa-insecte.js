import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/General/Layout';
import ProductLanding from '../../components/Products/ProductLanding';
import ProductVariants from '../../components/Products/ProductVariants';
import Colors from '../../components/Products/Colors';
import ProductCTA from '../../components/Products/ProductCTA';

const landingData = {
    src: '/images/products/plasa-insecte/highlight.webp',
    product: 'common:product.plasainsecte',
    description: [
        'Plasele de insecte reprezintă un accesoriu esențial în special în timpul anotimpului cald. Acestea au rolul de a proteja locuințele de diferite insecte principalul inamic fiind tânțarul. De aceea noi vă oferim soluția perfectă, prezentate în diferite moduri sau culori.'
    ]
};

const variantsData = [
    {
        src: '/images/products/plasa-insecte/highlight.webp',
        name: 'Plasa contra Insectelor tip Plisse',
        description: [
            'Plasele tip plisse sunt create în așa fel încât să se potrivească în orice spațiu, existând disponibilitate de montare atât pentru ferestre, cât și pentru uși, inclusiv pentru cele cu deschidere foarte mare.',
            'Datorită protecției deosebite pe care o conferă, dar și designului modern și elegant, plasele anti insecte tip plisse sunt varianta ideală pentru spațiile destinate clienților, mai ales în cazul industriei ospitalității, precum restaurante, unități de preparare a alimentelor sau hoteluri.'
        ]
    },
    {
        src: '/images/products/plasa-insecte/highlight.webp',
        name: 'Plasa contra Insectelor tip Rulou',
        description: [
            'Plasele tip rulou sunt o variantă modernă și sigură, fiind foarte ușor de manevrat și amplificând comoditatea utilizatorilor prin faptul că poate fi folosită pe toată perioada verii și nu este necesară demontarea acesteia la apariția anotimpului rece, deoarece plasa se poate strânge foarte ușor în interiorul casetei.'
        ]
    },
    {
        src: '/images/products/plasa-insecte/highlight.webp',
        name: 'Plasa contra Insectelor cu Balamale',
        description: [
            'Cele mai întâlnite plase anti-insecte sunt cele cu balamale. Ele sunt compuse dintr-o ramă de aluminiu, pe care sunt montate de obicei 2 balamale pentru deschiderea plasei către exterior. Inchiderea plasei este realizata cu clips magnetic. '
        ]
    }
];

const ctaData = [
    '/images/products/plasa-insecte/highlight.webp',
    '/images/products/plasa-insecte/highlight.webp',
    '/images/products/plasa-insecte/highlight.webp',
    '/images/products/plasa-insecte/highlight.webp',
    '/images/products/plasa-insecte/highlight.webp'
];

export default function PlasaInsecte() {
    const { t } = useTranslation('plasainsecte');
    return (
        <Layout title={t('common:product.plasainsecte')} description="">
            <div className="section-spacing" />

            <div className="container-padding">
                <ProductLanding data={landingData} t={t} />

                <div className="section-spacing" />

                <ProductVariants data={variantsData} t={t} />

                <div className="section-spacing" />

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
            ...(await serverSideTranslations(locale, ['common', 'plasainsecte']))
        }
    };
}
