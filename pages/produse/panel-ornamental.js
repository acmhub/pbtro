import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Layout from '../../components/General/Layout';
import Modal from '@mui/material/Modal';
import ProductLanding from '../../components/Products/ProductLanding';
import Colors from '../../components/Products/Colors';
import ProductCTA from '../../components/Products/ProductCTA';
import { aluminiuData, inoxData } from '../../components/Products/PanelOrnamental';

const landingData = {
    src: '/images/products/panel-ornamental/highlight.webp',
    product: 'common:product.panelornamental',
    description: [
        'Primul lucru pe care îl vedeți dumneavoastră și oaspeții este ușa de la intrare, iar aceasta ar trebui să fie primitoare și reprezentativă. Ușa de la intrare determină semnificativ impresia generală a unei case și dezvăluie multe despre gustul personal. Vă oferim o gamă largă de sisteme de uși frontale în culori și modele diferite. Lasă-te surprins de numeroasele posibilități.'
    ]
};

const ctaData = [
    '/images/products/panel-ornamental/highlight.webp',
    '/images/products/panel-ornamental/highlight.webp',
    '/images/products/panel-ornamental/highlight.webp',
    '/images/products/panel-ornamental/highlight.webp',
    '/images/products/panel-ornamental/highlight.webp'
];

export default function PanelOrnamental() {
    const { t } = useTranslation('panelornamental');

    const [modalState, setModalState] = useState({ state: false, index: null });

    return (
        <Layout title={t('common:product.panelornamental')} description="">
            <div className="section-spacing" />

            <div className="container-padding">
                <ProductLanding data={landingData} t={t} />

                <div className="section-spacing" />

                <section className="space-y-4" id="aluminiu">
                    <h3 className="text-center">Modele Panel Ornamnental Aluminiu</h3>

                    <div className="h-96 w-full overflow-y-scroll">
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-1">
                            {aluminiuData.map((e, i) => (
                                <div key={i}>
                                    <div
                                        className="cursor-zoom-in"
                                        onClick={() => setModalState({ state: true, index: i })}
                                    >
                                        <div className="relative h-40 w-auto">
                                            <Image src={e.source} alt={e.name} layout="fill" objectFit="contain" />
                                        </div>
                                        <h6 className="text-center">{e.name}</h6>
                                    </div>
                                    <Modal
                                        open={modalState.index === i ? true : false}
                                        onClose={() => setModalState({ state: false, index: null })}
                                        aria-labelledby="aluminium-model"
                                        aria-describedby="aluminium-model-details"
                                        sx={{ paper: { outline: 'none' } }}
                                    >
                                        <div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-96 lg:w-[600px] bg-white shadow space-y-2 p-2">
                                            <div
                                                className="absolute top-1 right-1 cursor-pointer z-10"
                                                onClick={() => setModalState({ state: false, index: null })}
                                            >
                                                <span className="material-symbols-outlined">close</span>
                                            </div>
                                            <div className="relative h-[80vh] w-full">
                                                <Image src={e.source} alt={e.name} layout="fill" objectFit="contain" />
                                            </div>
                                            <h5>{e.name}</h5>
                                        </div>
                                    </Modal>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="section-spacing" />

                <section className="space-y-4" id="inox">
                    <h3 className="text-center">Cu Insertie de Inox</h3>

                    <div className="h-96 w-full overflow-y-scroll">
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-1">
                            {inoxData.map((e, i) => (
                                <div key={i}>
                                    <div
                                        className="cursor-zoom-in"
                                        onClick={() => setModalState({ state: true, index: i })}
                                    >
                                        <div className="relative h-40 w-auto">
                                            <Image src={e.source} alt={e.name} layout="fill" objectFit="contain" />
                                        </div>
                                        <h6 className="text-center">{e.name}</h6>
                                    </div>
                                    <Modal
                                        open={modalState.index === i ? true : false}
                                        onClose={() => setModalState({ state: false, index: null })}
                                        aria-labelledby="aluminium-model"
                                        aria-describedby="aluminium-model-details"
                                        sx={{ paper: { outline: 'none' } }}
                                    >
                                        <div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-96 lg:w-[600px] bg-white shadow space-y-2 p-2">
                                            <div
                                                className="absolute top-1 right-1 cursor-pointer z-10"
                                                onClick={() => setModalState({ state: false, index: null })}
                                            >
                                                <span className="material-symbols-outlined">close</span>
                                            </div>
                                            <div className="relative h-[80vh] w-full">
                                                <Image src={e.source} alt={e.name} layout="fill" objectFit="contain" />
                                            </div>
                                            <h5>{e.name}</h5>
                                        </div>
                                    </Modal>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

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
            ...(await serverSideTranslations(locale, ['common', 'panelornamental']))
        }
    };
}
