import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/General/Layout';
import ProductLanding from '../../components/Products/ProductLanding';
import ProductVariants from '../../components/Products/ProductVariants';
import ProductCTA from '../../components/Products/ProductCTA';

const landingData = {
    src: '/images/products/pergola/highlight.webp',
    product: 'common:product.pergola',
    description: [
        'Sistemele de pergole retractabile respectiv pergole bioclimatice sunt un accesoriu important atât în construcțiile rezidențiale, cât și comerciale. Fie că vorbim de terasa unui restaurant sau hotel, ori cea de acasă, ele creează spațiul de relaxare perfect și oferă confort celor care se adăpostesc sub ele.'
    ]
};

const variantsData = [
    {
        src: '/images/products/pergola/4season.webp',
        name: 'Pergolă Retractabilă 4Seasons',
        description: [
            'Sistemele de pergole cu acoperiș retractabil 4Seasons sunt sisteme de pergole din aluminiu care se deschid – închid protejând spațiul care îi este destinat să îl acopere în toate cele patru anotimpuri. Profilele ce formează stâlpii de susținere sunt proiectate astfel încât apa provenită din precipitații și acumulată pe acoperișul retractabil să fie dirijată cu ușurință.',
            'Acestea pot fi montate în combinație cu sisteme de închidere din plastic transparent sau sticlă securizată, închizând terasa în totalitate pe timp de iarna. Acest tip de pergolă garantează buna funcționare și rezistența în condiții meteorologice dificile.',
            'Membrana din PVC impermeabil 100% provine de la renumitul producător Sioen. Curelele de distributie ELA-flex SD™ au o rezistență ridicată la uzură, abraziune sau rupere. Motoarele instalate pentru acționarea pergolelor comercializate și montate de noi sunt marca Somfy, cele mai fiabile pentru astfel de sisteme. Garanția oferită motoarelor și accesoriilor Somfy este de 5 ani. De asemenea, produsul este pretabil pentru închiderea laterală sau frontală utilizând sisteme de închidere cu folie transparentă sau sticlă securizată tip armonică sau tip ghilotină.'
        ]
    },
    {
        src: '/images/products/pergola/bioclimatica.webp',
        name: 'Pergolă Bioclimatică Retractabilă',
        description: [
            'Sistemele de pergole bioclimatice sunt pergole din aluminiu care se deschid – închid protejând spațiul care îi este destinat sa îl acopere în toate cele patru anotimpuri. Spre deosebire de pergola retractabilă 4Seasons, lamelele ce formează acoperișul pergolei bioclimatice pot fi reglabile astfel încât lumina pătrunsă în interior să fie perfect gestionată. Sistemele de pergole bioclimatice sunt proiectate să reziste la căderi masive de zăpadă.',
            'Acest tip de pergolă retractabilă bioclimatică garantează buna funcționare și rezistență în condiții meteorologice dificile. Folosindu-se mai multe pergole bioclimatice atașate una langă alta, se pot acoperi suprafețe cu lațimi infinite. Putem diviza acest tip de pergolă în 2 sisteme diferite: pergole bioclimatice cu lamele orientabile și pergole bioclimatice cu lamele total retractabile. Lamelele din aluminiu extrudat, umplute cu spumă poliuretanică asigură o respingere totală a razelor solare.',
            'Tipul acesta de acoperiș retractabil are o durabilitate de funcționare ridicată, oferindu-se o garanție de minim 10 ani. Motoarele instalate pentru acționarea pergolelor comercializate și montate de noi sunt marca Somfy, cele mai fiabile pentru astfel de sisteme. Garanția oferită motoarelor și accesoriilor Somfy este de 5 ani. Pergola SkyFree e prevazută cu acoperiș retractabil total iar pergola SkyCloud e prevazută cu acoperiș cu lamele înclinabile. De asemenea, produsul este pretabil pentru închiderea laterală sau frontală utilizând sisteme de închidere cu folie transparentă sau sticlă securizată tip armonică sau tip ghilotină.'
        ]
    },
    {
        src: '/images/products/pergola/wintergarden.webp',
        name: 'Pergola Fixă Winter Garden',
        description: [
            'Sistemele de pergole fixe winter garden (gradină de iarnă) sunt pergole cu acoperiș fix din sticlă securizată protejând spațiul care îi este destinat să-l acopere în toate cele patru anotimpuri. Spre deosebire de pergola retractabilă 4Seasons, acoperișul acestui sistem este total transparent. Sticla ce formează acoperișul are o grosime de 32 mm, pachetul fiind format din sticlă laminată și sticlă securizată. În funcție de cerințe, această sticlă poate fi sablată / mată. Sistemele de pergole winter garden fixe sunt proiectate să reziste la căderi masive de zăpadă.',
            'Aceste pergole winter garden garantează buna funcționare și rezistența în condiții meteorologice dificile. Folosindu-se mai multe pergole winter garden atașate una lângă alta, se pot acoperi suprafețe cu lățimi infinite.',
            'Ulterior se pot instala copertine orizontale atașate deasupra sau sub acoperișul pergolei winter garden. Cu ajutorul acestor copertine retractabile orizontale, se menține o temperatură confortabilă în interiorul pergolei. De asemenea, produsul este pretabil pentru închiderea laterală sau frontală utilizând sisteme de închidere cu folie transparentă sau sticlă securizată tip armonică sau tip ghilotină.'
        ]
    }
];

const ctaData = [
    '/images/products/pergola/4season.webp',
    '/images/products/pergola/bioclimatica.webp',
    '/images/products/pergola/wintergarden.webp',
    '/images/products/pergola/highlight.webp'
];

export default function Pergola() {
    const { t } = useTranslation('pergola');
    return (
        <Layout title={t('common:product.pergola')} description="">
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
            ...(await serverSideTranslations(locale, ['common', 'pergola']))
        }
    };
}
