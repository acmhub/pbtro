import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/General/Layout';
import ProductLanding from '../../components/Products/ProductLanding';
import ProductVariants from '../../components/Products/ProductVariants';
import ProductCTA from '../../components/Products/ProductCTA';

const landingData = {
    src: '/images/products/copertina/highlight.webp',
    product: 'common:product.copertina',
    description: [
        'Ideale pentru acoperirea spațiilor comerciale și a celor private, precum terasele, balcoanele și casele, sistemele de copertine cu brațe retractabile țin departe căldura și aduc un plus estetic oricărui imobil.'
    ]
};

const variantsData = [
    {
        src: '/images/products/copertina/ares.webp',
        name: 'Copertina Ares',
        description: [
            'Copertină Ares este o copertină foarte rezistentă dar în același timp relativ ușoară având brațele retractabile. Acest model de copertină este una dintre cele mai bine vândute produse din gama noastră, datorită utilității sale și al prețului accesibil. Structura acestei copertine este întotdeauna de culoarea albă.',
            'Copertină retractabilă Ares are cel mai mic preț dintre toate modele de copertine retractabile. Materialele textile pot fi personalizate conform cerințelor dumneavoastră. Garanția oferită sistemului complet, serviciului de montaj, motoarelor și accesoriilor Somfy este de 3 ani. Furnizorul nostru pentru materialele textile este Sauleda Fabrics.'
        ]
    },
    {
        src: '/images/products/copertina/hera.webp',
        name: 'Copertina Hera',
        description: [
            'Copertină Hera este o copertină cu brațe retractabile fiind construită din aluminiu extrudat. Față de copertinele Ares, copertină retractabila Hera are brațe mai robuste și un profil frontal mai rezistent. Aceast model de copertină este recomandată în special pentru spații comercială(terase, restaurante) deoarece ele fac față unei utilizări zilnice intensive.',
            'Garanția oferită sistemului complet, serviciului de montaj, motoarelor și accesoriilor Somfy este de 3 ani. Furnizorul nostru pentru materialele textile este Sauleda Fabrics.'
        ]
    },
    {
        src: '/images/products/copertina/artemis.webp',
        name: 'Copertina Retractabilă Artemis',
        description: [
            'Copertină Artemis este copertină cu brațe retractabile numită Hera cu mențiunea că Artemis este prevăzută cu o casetă din aluminiu ce acoperă materialul atunci când copertină este închisă(trasă la perete). Brațele retractabile ale copertine rămân în exteriorul casetei. Această semi casetă din aluminiu protejează materialul în zilele când copertină nu este folosită, cu precădere în sezonul rece.',
            'Garanția oferită sistemului complet, serviciului de montaj, motoarelor și accesoriilor Somfy este de 3 ani. Furnizorul nostru pentru materialele textile este Sauleda Fabrics.'
        ]
    },
    {
        src: '/images/products/copertina/pallas.webp',
        name: 'Copertina Retractabilă Pallas',
        description: [
            'Copertină Pallas este o copertină cu brațe retractabile complet casetată. Brațele retractabile se retrag într-o casetă din aluminiu. Are un aspect foarte elegant fiind recomandată pentru umbrirea teraselor construite luxos sau a restaurentelor premium. Casetă din aluminiu este complet închisă atunci când copertină este strânsă, astfel că materialul, brațele dar și restul componentelor sunt protejate perfect împotriva intemperiilor atmosferice. Acest model de copertină este cel mai scump din punct de vedere al prețului.',
            'Garanția oferită sistemului complet, serviciului de montaj, motoarelor și accesoriilor Somfy este de 3 ani. Furnizorul nostru pentru materialele textile este Sauleda Fabrics.'
        ]
    },
    {
        src: '/images/products/copertina/metis.webp',
        name: 'Copertina Retractabilă Metis',
        description: [
            'Sistemele de copertine cu brațe retractabile tip umbrar sunt copertine retractabile duble, de sine stătătoare, destinate umbririi sezoniere a suprafețelor mari, teraselor de restaurant sau cafenelelor. Avantajul acestui tip de copertină retractabilă îl reprezintă faptul că nu trebuie fixat în perete, ci poate fi utilizat acolo unde este necesar.',
            'Pentru o mai bună stabilitate a copertinei, picioarele de sprijin se pot fixă în beton cu bare filetate și piulițe expandabile sau ancore chimice. Dimensiunile maxime ale copertinei sunt date de tipul copertinei retractabile (Ares, Hera, Artemis, Pallas) montată pe structura metalică.',
            'Garanția oferită sistemului complet, serviciului de montaj, motoarelor și accesoriilor Somfy este de 3 ani. Furnizorul nostru pentru materialele textile este Sauleda Fabrics.'
        ]
    },
    {
        src: '/images/products/copertina/bora.webp',
        name: 'Copertina Retractabilă Laterală Bora',
        description: [
            'Copertină laterală Bora este o copertină ce poate fi montată în plan vertical. Are un aspect elegant fiind recomandate pentru umbrirea laterală a teraselor, atunci când din diverse motive copertina clasică nu poate umbri suficient zona sau este nevoie de un surplus de intimitate.',
            'Caseta din aluminiu este complet închisă atunci când copertină este strânsă, astfel că materialul și restul componentelor sunt protejate perfect împotriva deteriorării sau intemperiilor atmosferice. Acționarea copertinei laterale se face prin tragere, mânerul mobil blocându-se în suportul de închidere.'
        ]
    },
    {
        src: '/images/products/copertina/articulate.webp',
        name: 'Copertina Retractabilă Brațe Articulate',
        description: [
            'Copertina cu braț articulat este un model foarte simplu și fiabil folosită la umbrirea balcoanelor, ferestrelor, teraselor sau a verandelor mici, acolo unde copertinele retractabile nu pot fi montate. Acest model de copertină este prevăzut cu două brațe articulate ce asigură întinderea perfectă a stofei.'
        ]
    },
    {
        src: '/images/products/copertina/carlige.webp',
        name: 'Copertina Retractabilă de Balcon cu Carlige',
        description: [
            'Copertinele cu cârlig sunt modele foarte simple și fiabile de copertine retractabile folosite la umbrirea balcoanelor, ferestrelor, teraselor sau a verandelor mici. Acest model de copertină este prevăzut cu cârlige și brațe ce pot fi prinse în balustradă balconului. Brațele pot avea o lungime de 50 cm sau 70 cm. Modelul de copertină cu brațe de 50 cm este cel mai bine vândut produs pentru umbrirea balcoanelor mici.'
        ]
    },
    {
        src: '/images/products/copertina/marchize.webp',
        name: 'Copertina Retractabilă Tip Marchize',
        description: [
            'Copertinele tip marchiza sunt construite pe o structură ușoară de aluminiu, fiind acționate cu ajutorul unui șnur textil. Aceste copertine pot avea 3 forme: rotunde, dreptunghiulare sau ovale. Acest tip de copertine tip capotine sunt special concepute pentru instalarea lor la ferestrele locuințelor dar mai ales deasupra intrărilor în magazine sau restaurante.'
        ]
    }
];

const ctaData = [
    '/images/products/copertina/ares.webp',
    '/images/products/copertina/artemis.webp',
    '/images/products/copertina/articulate.webp',
    '/images/products/copertina/bora.webp',
    '/images/products/copertina/carlige.webp',
    '/images/products/copertina/hera.webp',
    '/images/products/copertina/marchize.webp',
    '/images/products/copertina/metis.webp',
    '/images/products/copertina/pallas.webp'
];

export default function Copertina() {
    const { t } = useTranslation('copertina');
    return (
        <Layout title={t('common:product.copertina')} description="">
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
            ...(await serverSideTranslations(locale, ['common', 'copertina']))
        }
    };
}
