import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/General/Layout';
import ProductLanding from '../../components/Products/ProductLanding';
import ProductVariants from '../../components/Products/ProductVariants';
import ProductCTA from '../../components/Products/ProductCTA';

const landingData = {
    src: '/images/products/balustrada/highlight.webp',
    product: 'common:product.balustrada',
    description: [
        'Balustradele din aluminiu și sticlă, reprezintă un element arhitectural util și necesar, cu dublu scop, de protecție și estetic, care dau o notă de eleganță oricărei clădiri.'
    ]
};

const variantsData = [
    {
        src: '/images/products/balustrada/highlight.webp',
        name: 'Balustradă din Sticlă',
        description: [
            'Nu există nici o îndoială că o balustradă de sticlă adaugă eleganță oricărei locuințe sau proprietăți comerciale și se îmbină cu orice design de interior. Oferim diferite forme de balustrade și accesorii.',
            'În tendințele moderne de design interior, sticla a luat locul celui mai versatil material, care arată la fel de coerent cu multe stiluri arhitecturale. Opțiunea de a personaliza balustrada este deosebit de atractivă pentru cei care doresc să aducă la viață ceva original și unic. Oferim o mare varietate de feronerie cu diverse finisaje, de la inox la opțiuni din lemn cu sau fără mână curentă.'
        ]
    },
    {
        src: '/images/products/balustrada/highlight.webp',
        name: 'Balustradă din Aluminiu Eloxat',
        description: [
            'Balustradele din aluminiu eloxat se remarcă prin tehnicitate și facilitatea instalării. Printr-o adaptare constantă a design-ului la evoluția pieței, modelele diferite de balustrade din aluminiu permit numeroase configurații.'
        ]
    },
    {
        src: '/images/products/balustrada/highlight.webp',
        name: 'Balustradă Traforată',
        description: [
            'Fie că vorbim despre terase sau balcon, balustrada traforată este răspunsul când vine vorba de un stil modern și design impresionant. Deși acestea impresionează prin eleganță și rafinamentul finisajului, punctul forte al balustradelor traforate este reprezentat de durabilitatea în timp și rezistența contra intemperiilor. Datorită vopsirii în câmp electrostatic acestea câștigă un grad ridicat de rezistență contra zgârieturilor și abraziunii.'
        ]
    }
];

const ctaData = [
    '/images/products/balustrada/highlight.webp',
    '/images/products/balustrada/highlight.webp',
    '/images/products/balustrada/highlight.webp',
    '/images/products/balustrada/highlight.webp',
    '/images/products/balustrada/highlight.webp'
];

export default function Balustrada() {
    const { t } = useTranslation('balustrada');
    return (
        <Layout title={t('common:product.balustrada')} description="">
            <div className="section-spacing" />

            <div className="container-padding">
                <ProductLanding data={landingData} t={t} />

                <div className="section-spacing" />

                <ProductVariants data={variantsData} t={t} />

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
            ...(await serverSideTranslations(locale, ['common', 'usaantifoc']))
        }
    };
}
