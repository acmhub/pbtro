import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/General/Layout';
import { productsData } from '../components/Products';

export default function GetQuote() {
    const { t } = useTranslation('getquote');
    const [activeProduct, setActiveProduct] = useState('');
    return (
        <Layout
            pageID="about"
            title={t('common:getquote')}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ex quidem perspiciatis architecto? Quam, voluptas aliquid laboriosam officiis corrupti esse."
        >
            <div className="section-spacing-lg" />

            <div className="container-padding">
                <h1 className="text-center mb-20">{t('common:getquote')}</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="col-span-1 lg:col-span-3">
                        <div className="card divide-y p-0">
                            {productsData.map((e, i) => (
                                <div
                                    className={`
                                    ${activeProduct === e.name && 'bg-theme1 text-white'}
                                    hover:bg-theme1 hover:text-white duration-200 ease-in-out cursor-pointer p-2`}
                                    onClick={() => setActiveProduct(e.name)}
                                    key={i}
                                >
                                    {t(`common:${e.name}`)}
                                </div>
                            ))}
                            <div
                                className={`
                                    ${activeProduct === 'accesorii' && 'bg-theme1 text-white'}
                                    hover:bg-theme1 hover:text-white duration-200 ease-in-out cursor-pointer p-2`}
                                onClick={() => setActiveProduct('accesorii')}
                            >
                                {t('common:accessories')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-spacing" />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'getquote']))
        }
    };
}
