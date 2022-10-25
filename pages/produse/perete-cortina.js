import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../../components/General/Layout';
import ProductLanding from '../../components/Products/ProductLanding';
import Profiles from '../../components/Products/Profiles';
import ProductVariants from '../../components/Products/ProductVariants';
import ProductCTA from '../../components/Products/ProductCTA';

const landingData = {
    src: '/images/products/perete-cortina/highlight.webp',
    product: 'common:product.peretecortina',
    description: [
        'Pereţii cortină reprezintă cea mai elegantă, sigură şi accesibilă fațadă ce poate îmbrăca orice tip de construcţie. Se remarcă prin proprietăţile excepţionale de izolare termică şi fonică, prin posibilităţi infinite de design ce se adaptează oricărei viziuni arhitecturale, timp de execuţie şi montaj scurt şi o întreţinere uşoară.'
    ]
};

const profileData = [
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR50 Semi-Structural',
        profile: '/images/products/perete-cortina/pr-semi.webp',
        image: '/images/products/perete-cortina/semi-wall.webp',
        tehnicalDetails: [
            {
                label: '',
                value: ''
            }
        ]
    },
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR50 Standard',
        profile: '/images/products/perete-cortina/pr-standard.webp',
        image: '/images/products/perete-cortina/standard-wall.webp',
        tehnicalDetails: [
            {
                label: '',
                value: ''
            }
        ]
    },
    {
        manufacturer: 'Profilco',
        manufacturerLogo: '/images/suppliers/profilco.webp',
        model: 'PR50 Structural',
        profile: '/images/products/perete-cortina/pr-struct.webp',
        image: '/images/products/perete-cortina/structural-wall.webp',
        tehnicalDetails: [
            {
                label: '',
                value: ''
            }
        ]
    }
];

const variantsData = [
    {
        src: '/images/products/perete-cortina/highlight.webp',
        name: 'Pereți Cortină Standard',
        description: [
            'Sunt denumiți pereți cortină clasici datorită caracteristicii sistemului prin care geamul termoizolant este fixat de cadrul din aluminiu cu ajutorul capacelor presoare, fixate, la rândul lor, de cadrul din aluminiu cu șuruburi. Capacele presoare pot fi de diverse forme, dimensiuni și nuanțe.',
            'Sistemul de perete cortină standard permite montarea de geamuri termoizolante cu grosimi diferite, din 2 sau 3 foi de sticlă. Profilele, vizibile din exterior, pot fi adaptate oricărui tip de construcție. Peretele cortină standard reprezintă o soluție modernă de fațadă de sticlă cu o construcție articulată și este proiectat să facă față cutremurelor și vibrațiilor de intensitatea normală, dar și a dilatărilor sau contractărilor ale profilelor de aluminiu fără însă a-și pierde din rezistența la vânt sau la permeabilitatea apei.',
            'Pot fi realizați pereți cortină cu dimensiuni mari, de complexitate ridicată din punct de vedere al materialelor utilizate. Profilele sunt înguste și sunt o soluție mai ieftină datorită sistemului clasic de pereți cortină.'
        ]
    },
    {
        src: '/images/products/perete-cortina/highlight.webp',
        name: 'Pereți Cortină Semistructurali',
        description: [
            'Sunt denumiți pereți cortină semistructurali datorită caracteristicii sistemului prin care geamul termoizolant este fixat de cadrul din aluminiu cu ajutorul capacelor presoare doar pe o dimensiune, verticală sau orizontală. Capacele presoare pot fi de diverse forme, dimensiuni și nuanțe.',
            'Sistemul de perete cortină semistructural permite montarea de geamuri termoizolante cu grosimi diferite, din 2 sau 3 foi de sticlă. Profilele, vizibile din exterior, pot fi adaptate oricărui tip de construcție. Impermeabilitatea este asigurată în cazul sistemului semistructural de trei rânduri de garnituri EPDM și de un sistem de scurgere pentru orice fel de acumulare de apă.',
            'Profilele sunt vizibile din interior, iar din exterior profilul este vizibil doar pe un sens. Pe celălalt sens este vizibilă o linie subțire ceea ce conferă sistemului continuitate. Pot fi realizați pereți cortină cu dimensiuni mari, de complexitate ridicată.'
        ]
    },
    {
        src: '/images/products/perete-cortina/highlight.webp',
        name: 'Pereți Cortină Structurali',
        description: [
            'Pereții cortină structurali sunt realizați cu un sistem special din aluminiu ce oferă, la exterior, aspectul de sticlă continuă. Geamul termoizolant este lipit de rama din aluminiu cu ajutorul unui silicon structural.',
            'Realizarea practică se transpune prin îmbinarea unui caroiaj de montanți verticali cu traverse (rigle) orizontale. Se pot integra cu usurință în astfel de pereți și căi de acces spectaculoase, scări, balustrade, lifturi exterioare, realizate tot din sticlă, ce satisfac dorința arhitecților pentru lumină, spații largi, linii moderne și viziune futuristă.',
            'Sticla structurală poate avea un aspect îmbunătățit prin intermediul aplicării unor desene și forme geometrice sau se pot folosi tonalități coloristice diverse.'
        ]
    }
];

const ctaData = [
    '/images/products/perete-cortina/semi-wall.webp',
    '/images/products/perete-cortina/standard-wall.webp',
    '/images/products/perete-cortina/structural-wall.webp',
    '/images/products/perete-cortina/highlight.webp'
];

export default function PereteCortina() {
    const { t } = useTranslation('peretecortina');
    return (
        <Layout title={t('common:product.peretecortina')} description="">
            <div className="section-spacing" />

            <div className="container-padding">
                <ProductLanding data={landingData} t={t} />

                <div className="section-spacing" />

                <Profiles data={profileData} />

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
            ...(await serverSideTranslations(locale, ['common', 'peretecortina']))
        }
    };
}
