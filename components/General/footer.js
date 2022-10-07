import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { productsData } from '../Products';

export default function Footer() {
    const { t } = useTranslation('common');

    return (
        <footer className="bg-white pt-10 pb-4">
            <div className="container-padding divide-y">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-5">
                    <div className="col-span-1 lg:col-span-4 space-y-4">
                        <h3>{t('about')}</h3>
                        <p>
                            Suntem o companie la baza căreia se află o echipă tânără și dinamică, formată din
                            specialiști în tâmplăria PVC și cea din aluminiu. Astfel, răspundem cerințelor dumneavoastră
                            prin servicii excelente de fabricare și montare.
                        </p>

                        <div className="space-y-2 pt-4">
                            <h5>Social media</h5>

                            <div className="flex space-x-2">
                                <a
                                    href="https://www.facebook.com/PBT-Romania-404413622991425"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-fw fa-lg fa-facebook-f" />
                                </a>
                                <a href="https://wa.me/+40786422450" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-fw fa-lg fa-whatsapp" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-2 space-y-4">
                        <h3>Navigatie</h3>

                        <div className="flex flex-col space-y-1">
                            <Link href="/" passHref>
                                <a className="w-fit opacity-75 hover:opacity-100">{t('home')}</a>
                            </Link>
                            <Link href="/" passHref>
                                <a className="w-fit opacity-75 hover:opacity-100">{t('about')}</a>
                            </Link>
                            <Link href="/" passHref>
                                <a className="w-fit opacity-75 hover:opacity-100">{t('services')}</a>
                            </Link>
                            <Link href="/" passHref>
                                <a className="w-fit opacity-75 hover:opacity-100">{t('products')}</a>
                            </Link>
                            <Link href="/" passHref>
                                <a className="w-fit opacity-75 hover:opacity-100">{t('portfolio')}</a>
                            </Link>
                            <Link href="/" passHref>
                                <a className="w-fit opacity-75 hover:opacity-100">{t('accessories')}</a>
                            </Link>
                            <Link href="/" passHref>
                                <a className="w-fit opacity-75 hover:opacity-100">{t('contact')}</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-6 space-y-4">
                        <h3>{t('products')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
                            {productsData.map((e, i) => (
                                <Link href={e.href} passHref key={i}>
                                    <a className="w-fit opacity-75 hover:opacity-100">{t(e.name)}</a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-5">
                    <div className="col-span-1 lg:col-span-3 space-y-4">
                        <h3>{t('contact')}</h3>

                        <div className="space-y-2">
                            <a
                                href="tel:+40786422450"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit opacity-75 hover:opacity-100 flex items-center space-x-2"
                            >
                                <span className="material-symbols-outlined text-theme1">phone_in_talk</span>
                                <div>+40 786 422 450</div>
                            </a>
                            <a
                                href="tel:+40723391843"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit opacity-75 hover:opacity-100 flex items-center space-x-2"
                            >
                                <span className="material-symbols-outlined text-theme1">phone_in_talk</span>
                                <div>+40 786 422 450</div>
                            </a>
                            <a
                                href="mailto:pbtromania@gmail"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit opacity-75 hover:opacity-100 flex items-center space-x-2"
                            >
                                <span className="material-symbols-outlined text-theme1">email</span>
                                <div>pbtromania@gmail</div>
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-8">
                        <iframe
                            title="location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.3339008248113!2d25.97047921552232!3d44.40579357910266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b200fc0e10d997%3A0x6ae5655545a9990d!2sDistribuitor%20Ferestre%20si%20Usi%20-%20Promotion%20Business%20Team!5e0!3m2!1sro!2sro!4v1644401679264!5m2!1sro!2sro"
                            className="h-64 lg:h-full w-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:space-y-0 text-gray-400 pt-5">
                    <div className="mt-4 lg:mt-0">
                        &copy; Promotion Business Team România 2006 - {new Date().getFullYear()}
                    </div>
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                            <Link href="/" passhref>
                                <a className="w-fit hover:text-black">Politica de Confidentialitate</a>
                            </Link>
                            <Link href="/" passhref>
                                <a className="w-fit hover:text-black">Politica de Cookies</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}