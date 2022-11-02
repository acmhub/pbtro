import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Landing({ t }) {
    const [wordIndex, setWordIndex] = useState(0);
    const textOptions = [
        'common:product.tamplariepvc',
        'common:product.tamplariealuminiu',
        'common:product.tamplarielemn',
        'common:product.panelornamental',
        'common:product.usaantifoc',
        'common:product.balustrada',
        'common:product.peretecortina',
        'common:product.sticla',
        'common:product.rulouexterior',
        'common:product.roletatextila',
        'common:product.pergola',
        'common:product.copertina',
        'common:product.usagaraj',
        'common:product.pereteantivant',
        'common:product.plasainsecte'
    ];
    useEffect(() => {
        const handleText = () => {
            let index = wordIndex > textOptions.length ? 0 : wordIndex + 1;
            setWordIndex(index);

            if (index === 4) {
                setWordIndex(0);
            }
        };

        const interval = setInterval(() => handleText(), 4000);
        return () => clearInterval(interval);
    }, [wordIndex]);

    return (
        <div className="relative">
            <div className="section-spacing" />
            <div className="container-padding">
                <div className="relative bg-gradient-to-tr from-[#1A62A5] to-[#5BA2D7] shadow-xl">
                    <div className="h-full grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
                        <div className="space-y-10 px-8 py-8 lg:py-4 text-white my-auto">
                            <div className="space-y-4">
                                <div>
                                    <h6 className="uppercase text-sm">{t('landing.subtitle')}</h6>
                                    <h4 className="capitalize">{t('landing.title')}</h4>
                                </div>
                                <div className="relative h-8">
                                    <AnimatePresence>
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: -20,
                                                filter: 'blur(10px)'
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                filter: 'blur(0px)'
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: 20,
                                                filter: 'blur(10px)'
                                            }}
                                            transition={{ duration: 0.75 }}
                                            key={wordIndex}
                                        >
                                            <h2 className="absolute">{t(textOptions[wordIndex])}</h2>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            <p>{t('landing.description')}</p>

                            <div className="flex space-x-4">
                                <Link href="/solicita-oferta" passHref>
                                    <a>
                                        <button className="theme-button1">{t('common:getquote')}</button>
                                    </a>
                                </Link>
                                <Link href="/servicii" passHref>
                                    <a>
                                        <button className="theme-button1-outlined text-white">
                                            {t('common:services')}
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-end justify-end">
                            <img
                                src="/images/fillers/landing-image.webp"
                                alt=""
                                className="h-auto w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
