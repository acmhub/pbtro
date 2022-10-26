import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Layout from '../../components/General/Layout';
import Modal from '@mui/material/Modal';
import ProductLanding from '../../components/Products/ProductLanding';
import ProductCTA from '../../components/Products/ProductCTA';
import { zebraData, roleteData, jaluzeleData } from '../../components/Products/Rolete';

const landingData = {
    src: '/images/products/roleta-textila/highlight.webp',
    product: 'common:product.roletatextila',
    description: ['description']
};

const ctaData = ['/images/products/roleta-textila/highlight.webp'];

export default function RoletaTextila() {
    const { t } = useTranslation('roletatextila');
    const [modalState, setModalState] = useState({ state: false, index: null });

    return (
        <Layout title={t('common:product.roletatextila')} description={t('description')}>
            <div className="section-spacing" />

            <div className="container-padding">
                <ProductLanding data={landingData} t={t} />

                <div className="section-spacing" />

                <section className="space-y-4" id="rolete">
                    <h3 className="text-center">{t('modelsrolete')}</h3>

                    <div className="h-96 w-full overflow-y-scroll">
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-1">
                            {roleteData.map((e, i) => (
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
                                        aria-labelledby="rolete-model"
                                        aria-describedby="rolete-model-details"
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

                <section className="space-y-4" id="zebra">
                    <div>
                        <h3 className="text-center">{t('modelszebra')}</h3>
                        <h6 className="text-center">Day & Night</h6>
                    </div>

                    <div className="h-96 w-full overflow-y-scroll">
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-1">
                            {zebraData.map((e, i) => (
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
                                        aria-labelledby="zebra-model"
                                        aria-describedby="zebra-model-details"
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

                <section className="space-y-4" id="jaluzele">
                    <h3 className="text-center">{t('modelsjaluzele')}</h3>

                    <div className="h-96 w-full overflow-y-scroll">
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-1">
                            {jaluzeleData.map((e, i) => (
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
                                        aria-labelledby="jaluzele-model"
                                        aria-describedby="jaluzele-model-details"
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

                <ProductCTA data={ctaData} t={t} />
            </div>

            <div className="section-spacing" />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'roletatextila']))
        }
    };
}
