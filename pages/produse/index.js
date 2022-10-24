import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/General/Layout';
import { productsData } from '../../components/Products';

export default function Produse() {
    const { t } = useTranslation('products');
    return (
        <Layout title={t('common:products')} description="">
            <div className="section-spacing-lg" />

            <div className="container-padding">
                <h1 className="text-center mb-20">{t('common:products')}</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                    {productsData.map((e, i) => (
                        <div key={i} itemType="https://schema.org/Product" itemScope>
                            <Link href={e.href} passHref>
                                <a>
                                    <div className="relative h-[550px] w-full overflow-hidden">
                                        <Image
                                            src={e.src}
                                            alt={t(e.name)}
                                            layout="fill"
                                            objectFit="cover"
                                            className="hover:scale-110 duration-200 ease-in-out"
                                            itemProp="image"
                                            priority
                                        />
                                        <div className="absolute bottom-0 left-0 h-[50%] w-full bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-transparent pointer-events-none z-10" />

                                        <div className="absolute bottom-2 left-2 space-y-2 z-20">
                                            {(e.name === 'product.tamplariepvc' ||
                                                e.name === 'product.tamplariealuminiu' ||
                                                e.name === 'product.tamplarielemn') && (
                                                <div className="text-theme1 uppercase tracking-widest">
                                                    {t('common:fereastrapbt')}
                                                </div>
                                            )}
                                            <div className="product-name text-white text-2xl" itemProp="name">
                                                {t(`common:${e.name}`)}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section-spacing" />
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'produse']))
        }
    };
}
