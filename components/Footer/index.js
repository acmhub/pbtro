import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { productsData } from '../Products';
import Image from 'next/image';
import styled from 'styled-components';

const ImageWrapper = styled.div`
    position: relative;

    &:before {
        position: absolute;
        content: '';
        top: -40px;
        left: 0;
        right: 0;
        width: auto;
        height: 50px;
        background: white;
        margin: 0 25%;
    }

    .wrapper {
        position: absolute;
        top: -40px;
        left: 0;
        right: 0;
        background: transparent;
        padding-top: 20px;
        margin: 0 25%;

        &:before {
            position: absolute;
            content: '';
            left: -50px;
            top: 0px;

            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 0 50px 50px;
            border-color: transparent transparent white transparent;
        }

        &:after {
            position: absolute;
            content: '';
            right: -50px;
            top: 0px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 50px 0 0 50px;
            border-color: transparent transparent transparent white;
        }
    }
`;

export default function Footer() {
    const { t } = useTranslation('common');

    return (
        <footer className="bg-white mt-10 pb-4">
            <ImageWrapper>
                <div className="wrapper">
                    <div className="relative h-20 mx-auto mb-12">
                        <Image
                            src="/images/logos/logo.svg"
                            alt="Promotion Business Team"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </ImageWrapper>

            <div className="container-padding divide-y pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-5">
                    <div className="col-span-1 lg:col-span-4 space-y-4">
                        <h3>{t('about')}</h3>
                        <p>{t('footer.about')}</p>

                        <div className="space-y-2 pt-4">
                            <h5>Social media</h5>

                            <div className="flex space-x-2">
                                <a
                                    href="https://www.facebook.com/PBT-Romania-404413622991425"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa-brands fa-fw fa-facebook-f facebook-icon" />
                                </a>
                                <a href="https://wa.me/+40786422450" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-fw fa-whatsapp whatsapp-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-2 space-y-4">
                        <h3>{t('footer.navigation')}</h3>

                        <div className="flex flex-col space-y-1">
                            <Link href="/" passHref>
                                <a className="w-fit opacity-75 hover:opacity-100">{t('home')}</a>
                            </Link>
                            <Link href="/despre-noi" passHref>
                                <a className="w-fit opacity-75 hover:opacity-100">{t('about')}</a>
                            </Link>
                            <Link href="/services" passHref>
                                <a className="w-fit opacity-75 hover:opacity-100">{t('services')}</a>
                            </Link>
                            <Link href="/produse" passHref>
                                <a className="w-fit opacity-75 hover:opacity-100">{t('products')}</a>
                            </Link>
                            <Link href="/portofoliu" passHref>
                                <a className="w-fit opacity-75 hover:opacity-100">{t('portfolio')}</a>
                            </Link>
                            <Link href="/accesorii" passHref>
                                <a className="w-fit opacity-75 hover:opacity-100">{t('accessories')}</a>
                            </Link>
                            <Link href="/contact" passHref>
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
                    <div className="col-span-1 lg:col-span-4 space-y-4">
                        <h3>{t('contact')}</h3>

                        <div className="space-y-2" itemType="https://schema.org/Organization" itemScope>
                            <a
                                href="tel:+40786422450"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit opacity-75 hover:opacity-100 flex items-center space-x-2"
                            >
                                <span className="material-symbols-outlined text-theme1">phone_in_talk</span>
                                <div itemProp="telephone">+40 786 422 450</div>
                            </a>
                            <a
                                href="tel:+40723391843"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit opacity-75 hover:opacity-100 flex items-center space-x-2"
                            >
                                <span className="material-symbols-outlined text-theme1">phone_in_talk</span>
                                <div itemProp="telephone">+40 786 422 450</div>
                            </a>
                            <a
                                href="mailto:pbtromania@gmail"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit opacity-75 hover:opacity-100 flex items-center space-x-2"
                            >
                                <span className="material-symbols-outlined text-theme1">email</span>
                                <div itemProp="email">pbtromania@gmail.com</div>
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-8">
                        <iframe
                            title="location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.3339008248113!2d25.97047921552232!3d44.40579357910266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b200fc0e10d997%3A0x6ae5655545a9990d!2sDistribuitor%20Ferestre%20si%20Usi%20-%20Promotion%20Business%20Team!5e0!3m2!1sro!2sro!4v1644401679264!5m2!1sro!2sro"
                            className="h-64 lg:h-full w-full block"
                            itemProp="location"
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
                                <a className="w-fit hover:text-black">{t('privacypolicy')}</a>
                            </Link>
                            <Link href="/" passhref>
                                <a className="w-fit hover:text-black">{t('cookiespolicy')}</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
