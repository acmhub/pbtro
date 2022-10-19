import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/General/Layout';
import ProductLanding from '../../components/Products/ProductLanding';
import ProductVariants from '../../components/Products/ProductVariants';
import ProductCTA from '../../components/Products/ProductCTA';

const landingData = {
    src: '/images/products/sticla/highlight.webp',
    product: 'common:product.sticla',
    description: [
        'Calitatea, prețul și gradul de protecție al unei ferestre nu sunt date doar de profilul utilizat, deși adesea acesta este cel mai discutat aspect. Sticla are un rol extrem de important, oferind protecție fonică și termica.'
    ]
};

const variantsData = [
    {
        src: '/images/products/sticla/highlight.webp',
        name: 'Sticla Clară',
        description: [
            'Sticla float este fabricat prin flotarea unei benzi continue de sticlă pe o baie metalică (prin tehnologia „float”). Este fabricat din sticlă calcosodică, de înalta calitate, având fete plan paralele, suprafață naturală și transparență nedistorsionata.'
        ]
    },
    {
        src: '/images/products/sticla/highlight.webp',
        name: 'Sticla Low-E',
        description: [
            'Sticla low-e se referă la sticlă cu emisivitate redusă. Este proiectată să reflecte căldură înapoi în clădire pentru a îmbunătăți coeficientul de transfer termic Uf. Sticlă Low-E este neutră în aparență așa că se poate folosi atât pentru clădiri rezidențiale cât și pentru cele comerciale. Sticlă low-e se obține printrun procedeu numit pulverizare magnetronica, când se aplică pe una din suprafețe un amestec de metale invizibile.'
        ]
    },
    {
        src: '/images/products/sticla/highlight.webp',
        name: 'Sticla Colorată în Masă',
        description: [
            'Sticla colorată se obține prin adăugarea unor oxizi metalici în timpul topirii sticlei. Geamul colorat în masă absoarbe o mare cantitate de energie solară, împiedicând astfel pătrunderea ei excesivă în interior. Gama de culori include bronz, gri, verde, albastru, în diferite intensități ce depind de grosimea sticlei.'
        ]
    },
    {
        src: '/images/products/sticla/highlight.webp',
        name: 'Sticla Decorativă',
        description: [
            'Sticla colorată sau vopsită este asemănătoare celei printate (tipărite) doar că această se realizează pe o singură culoare. Pentru a putea oferi o gamă largă de nuanțe folosim paletarul RAL, totul pentru a satisface dorințele dumneavoastră.'
        ]
    },
    {
        src: '/images/products/sticla/highlight.webp',
        name: 'Sticla Emailată',
        description: [
            'Acest procedeu constă în aplicarea uniformă (de regulă cu ajutorul unor echipamente specifice) a unei vopsele ceramice speciale, urmată imediat de procesul de securizare al sticlei. Astfel, stratul de vopsea aplicat devine mult mai rezistent și are un aspect uniform. De asemenea, prin procesul de securizare sticlă se conferă rezistență mecanică sporită în caz de spargere și se asigură stabilitate garantată culorii.'
        ]
    },
    {
        src: '/images/products/sticla/highlight.webp',
        name: 'Sticla cu Print Ceramic',
        description: [
            'Tehnologia de ultimă ora pentru prelucrarea sticlei este cea de printare pe sticlă cu cerneală ceramică. Printarea cu cerneală ceramică se face în mediu controlat de temperatură și umiditate. După printare, sticla se introduce la o temperatură de 650 – 700 de grade ( în funcție de grosimea sticlei suport ). Odată cu securizarea sticlei, cerneală ceramică practic fuzionează cu sticlă iar imaginea printată rămâne la aceeași calitate pentru cel puțîn 15 ani, nealterată de factorii externi. Culorile sunt rezistente la radiația razelor ultraviolete iar suprafața printată ceramic este foarte rezistentă la zgârieturi.'
        ]
    },
    {
        src: '/images/products/sticla/highlight.webp',
        name: 'Sticla Laminata',
        description: [
            'Este formată din două sau mai multe foi de sticla lipite printr-un strat de rășină transparentă. Avantajele acetui tip de sticla sunt: creșterea gradului de siguranță contra efracției, izolație fonică superioară, reducerea riscului de accidente (nu permite desprinderea cioburilor în cazul spargerii) în plus această sticlă oferă cea mai bună izolație fonică comparativ cu celelalte tipuri de sticlă.'
        ]
    },
    {
        src: '/images/products/sticla/highlight.webp',
        name: 'Sticla Sablată',
        description: [
            'Este o suprafață mată, obținută dintr-un geam transparent sau colorat, peste care se suflă un jet de nisip fin cu ajutorul aerului comprimat. Sticla sablată cu model se realizează folosind un șablon cu un desen așezat pe geamul transparent care se sablează.'
        ]
    },
    {
        src: '/images/products/sticla/highlight.webp',
        name: 'Sticla Ornamentală',
        description: [
            'Sticla ornamentală este folosită îndeosebi ca ornament sau pentru păstrarea intimității. Are un factor bun de transmisie luminoasă și permite o iluminare mai bună a încăperii decât în cazul utilizării sticlei reflexive.'
        ]
    },
    {
        src: '/images/products/sticla/highlight.webp',
        name: 'Sticla Reflexivă',
        description: [
            'Este geamul monolitic reflectorizant, parasolar cu o peliculă de oxizi metalici, depusă prin procedeul pirolitic. Pelicula se depune pe sticla clară sau colorată în masă, aceasta fiind foarte rezistentă, îndeosebi la condițiile extreme de mediu. Orientarea peliculei influențează valoarea reflexiei, precum și nuanța definitivă a culorii geamului.'
        ]
    },
    {
        src: '/images/products/sticla/highlight.webp',
        name: 'Sticla Securizată',
        description: [
            'Are o rezistență de 3-4 ori mai mare la stresul mecanic și termic decât sticla netratată. În caz de spargere, se descompune în bucăți foarte mici anulând riscul unor accidentări. Sticla colorată în masă datorită proprietăților sale filtrante, în funcție de culoare și grosime, geamul colorat în masă reduce solicitarea ochiului la lumina solară puternică.'
        ]
    }
];

const ctaData = [
    '/images/products/sticla/highlight.webp',
    '/images/products/sticla/highlight.webp',
    '/images/products/sticla/highlight.webp',
    '/images/products/sticla/highlight.webp',
    '/images/products/sticla/highlight.webp'
];

export default function Sticla() {
    const { t } = useTranslation('sticla');
    return (
        <Layout title={t('common:product.sticla')} description="">
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
            ...(await serverSideTranslations(locale, ['common', 'sticla']))
        }
    };
}
