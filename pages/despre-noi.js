import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/General/Layout';

const timelineData = [
    {
        year: '2006',
        card: [
            {
                month: null,
                content: [
                    'În 2006 s-au pus bazele fabricii de ferestre Promotion Business Team, care avea un singur obiectiv: să ofere o alternativă calitativă de tâmplărie în contextul creșterii numărului de comercianți orientați doar către profit.',
                    'De-a lungul timpului, fabrica a evoluat, echipa s-a mărit, tehnologiile s-au îmbunătățit dar focusul este același: să îmbunătățim calitatea vieții clienților noștri prin cele mai bune produse și servicii de tâmplărie.'
                ]
            }
        ]
    },
    {
        year: '2006 - 2010',
        card: [
            {
                month: null,
                content: [
                    'De la înființarea companiei până în 2010, ne-am ocupat cu distribuția de tâmplărie PVC și aluminiu, dar și cu accesorii pentru acestea.'
                ]
            }
        ]
    },
    {
        year: '2010',
        card: [
            {
                month: null,
                content: [
                    'Am lărgit spectrul de activitate, începând să producem și să comercializăm tâmplăria PVC și cea de aluminiu.'
                ]
            }
        ]
    },
    {
        year: '2020',
        card: [
            {
                month: 'Ianuarie',
                content: [
                    'Pentru a putea satisface volumul de cereri ne-am mutat la o nouă locație aflată pe Șoseaua Tudor Vladimirescu 393, Domnești Business Park, Ilfov.',
                    'Noua hală de producție având o suprafață de 1500m2, față de cei 600m2 din locul anterior.'
                ]
            }
        ]
    },
    {
        year: '2021',
        card: [
            {
                month: 'Ianuarie',
                content: [
                    'Am achiziționat o nouă linie de producție pentru tamplaria PVC si cea din aluminiu, compusă din mai multe echipamente moderne. Cu ajutorul acestor echipamente, am putut reduce consumul de curent electric și, concomitent, crește producția.',
                    'De asemenea calitatea produselor a crescut, prin eliminarea erorilor umane, contribuind, de asemenea, la competitivitatea companiei Promotion Business Team pe piața în care activează. Mai mult, producția a devenit mai eficientă. Putem produce acum o cantitate dublă de produse și putem astfel susține mai bine cererea pe care o înregistrăm, aflată în continuă creștere.'
                ]
            },
            {
                month: 'Iunie',
                content: [
                    'Am implementat un management inteligent al activităților de producție.',
                    'Astfel activitatea din fabrică poate fi planificată, executată și monitorizată mult mai ușor cu soluția de management al producției. Sistemul acoperă patru zone principale: producție, materiale, calitate și mentenanță.'
                ]
            },
            {
                month: 'Septembrie',
                content: [
                    'Am investit într-o linie de producţie de sticlă modernă, toată producţia fiind optimizată și operată cu ajutorul celor mai performante softuri și utilaje.'
                ]
            }
        ]
    },
    {
        year: 'Prezent',
        card: [
            {
                month: null,
                content: [
                    'Experiența acumulată în confecționarea tâmplăriei, precum și buna calitate a montajului dobândită în timp, ne recomandă ca fiind o firmă eficientă și întotdeauna o alegere inspirată pentru clienții noștrii, datorită seriozității de care dăm dovadă și a prețurilor practicate.',
                    'Suntem recunoscători să avem alături peste 40 de angajați care împărtășesc viziunea PBT: crearea celor mai bune produse din tâmplărie PVC și aluminiu. Specialiștii companiei noastre sunt mereu dornici să lucreze cu cele mai noi materiale și tehnici inovatoare pentru a satisface dorințele clienților.'
                ]
            }
        ]
    }
];

export default function About() {
    const { t } = useTranslation('about');

    return (
        <Layout
            pageID="about"
            title={t('common:about')}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ex quidem perspiciatis architecto? Quam, voluptas aliquid laboriosam officiis corrupti esse."
        >
            <div className="section-spacing-lg" />

            <div className="container-padding">
                <h1 className="text-center mb-20">{t('common:about')}</h1>

                <section className="space-y-10">
                    <h3 className="text-center">Evolutia Noastra</h3>
                </section>
            </div>

            <div className="section-spacing" />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'about']))
        }
    };
}
