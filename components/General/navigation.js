import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Select from '@mui/material/Select';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import { productsData } from '../Products';

const NavStyles = styled.div`
    #contact-details-nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: var(--navbar-index);

        height: 40px;

        .nav-link {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 39px;
            padding: 0 10px;
            transition: 0.1s ease-in-out;

            i {
                width: 30px;
            }

            &:hover {
                background: rgba(200, 200, 200, 0.3);
            }
        }
    }

    #routes-nav {
        position: absolute;
        top: 40px;
        left: 0;
        height: 70px;
        width: 100%;
        display: flex;
        align-items: center;
        transition: 0.1s ease-in-out;
        z-index: var(--navbar-index);

        &.navbar-fixed {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.33) !important;
            transition: box-shadow 0.1s ease-out;
        }

        &.navbar-fixed.navbar-toggled {
            background: white;
            box-shadow: 0 0 0 transparent !important;
            transition: 0.1s ease-in-out, box-shadow 0s ease;
        }
    }

    .nav-toggle {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;

        svg {
            height: 40px;
            width: 40px;
        }

        .line {
            fill: none;
            stroke: #191919;
            stroke-width: 6;
            transition: stroke-dasharray 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                stroke-dashoffset 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line1 {
            stroke-dasharray: 60 207;
            stroke-width: 6;
        }

        .line2 {
            stroke-dasharray: 60 60;
            stroke-width: 6;
        }

        .line3 {
            stroke-dasharray: 60 207;
            stroke-width: 6;
        }

        &.opened .line1 {
            stroke-dasharray: 90 207;
            stroke-dashoffset: -134;
            stroke-width: 6;
        }

        &.opened .line2 {
            stroke-dasharray: 1 60;
            stroke-dashoffset: -30;
            stroke-width: 6;
        }

        &.opened .line3 {
            stroke-dasharray: 90 207;
            stroke-dashoffset: -134;
            stroke-width: 6;
        }
    }

    @media only screen and (max-width: 1024px) {
        #routes-nav {
            .nav-links {
                position: absolute;
                top: 70px;
                right: 0;
                height: calc(100vh - 70px);
                overflow-y: scroll;
                width: 100%;
                padding: 20px;
                background: white;
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                pointer-events: none;
                transform: translateY(200px);
                opacity: 0;
                transition: 0.2s ease-in-out;

                &.active {
                    transform: translateY(0px);
                    opacity: 1;
                    pointer-events: all;
                }

                & > *.nav-link,
                #products-dropdown-button {
                    margin: 5px 0;
                    padding: 5px 0;
                    border-bottom: 1px solid silver;
                    width: 100%;
                    text-align: left;

                    &:nth-last-child(1) {
                        border-bottom: none;
                        margin: 0 auto;
                        margin-top: 40px;
                        width: fit-content;
                    }
                }
            }
        }
    }
`;

const locales = [
    {
        icon: '/images/icons/flags/ro-flag.svg',
        value: 'ro'
    },
    {
        icon: '/images/icons/flags/uk-flag.svg',
        value: 'en'
    },
    {
        icon: '/images/icons/flags/es-flag.svg',
        value: 'es'
    },
    {
        icon: '/images/icons/flags/it-flag.svg',
        value: 'it'
    },
    {
        icon: '/images/icons/flags/fr-flag.svg',
        value: 'fr'
    },
    {
        icon: '/images/icons/flags/de-flag.svg',
        value: 'de'
    }
];

export default function Navigation() {
    const router = useRouter();
    const currentRoute = router.pathname;
    const { t } = useTranslation('common');
    const [navbar, setNavbar] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleLocaleChange = (event) => {
        const value = event.target.value;

        router.push(router.route, router.asPath, {
            locale: value
        });
    };

    useEffect(() => {
        toggle ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');

        const handleScroll = () => {
            if (window.scrollY >= 125) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navbar, toggle]);

    return (
        <NavStyles>
            <nav id="contact-details-nav">
                <div className="container-padding border-b flex items-center justify-between">
                    <div className="flex items-center">
                        <a
                            href="tel:+40786422450"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link space-x-1"
                        >
                            <span className="material-symbols-outlined text-theme1">phone_in_talk</span>
                            <p className="hidden lg:inline">+40 786 422 450</p>
                        </a>
                        <a
                            href="tel:+40723391843"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link space-x-1"
                        >
                            <span className="material-symbols-outlined text-theme1">phone_in_talk</span>
                            <p className="hidden lg:inline">+40 723 391 843</p>
                        </a>
                        <a
                            href="mailto:pbtromania@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link space-x-1"
                        >
                            <span className="material-symbols-outlined text-theme1">drafts</span>
                            <p className="hidden lg:inline">pbtromania@gmail.com</p>
                        </a>
                        <a
                            href="https://goo.gl/maps/MsJhkRS4S4CgE8zNA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link space-x-1"
                        >
                            <span className="material-symbols-outlined text-theme1">location_on</span>
                            <p className="hidden lg:inline">Domnesti, IF</p>
                        </a>
                    </div>

                    <div className="flex items-center social-links">
                        <a
                            href="https://www.facebook.com/PBT-Romania-404413622991425"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link facebook-icon"
                        >
                            <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a
                            href="https://wa.me/+40786422450"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link whatsapp-icon"
                        >
                            <i className="fa-brands fa-whatsapp" />
                        </a>

                        <div className="nav-link">
                            <Select
                                value={router.locale}
                                onChange={handleLocaleChange}
                                disableUnderline={true}
                                MenuProps={{ disableScrollLock: true }}
                                inputProps={{
                                    sx: {
                                        padding: '0 5px !important',
                                        '&:focus': { backgroundColor: 'transparent' }
                                    }
                                }}
                                IconComponent={() => null}
                                variant="standard"
                                className="h-8 pr-0"
                            >
                                {locales.map((e, i) => (
                                    <MenuItem
                                        className={`flex items-center justify-center py-1 ${
                                            e.value === router.locale && 'hidden'
                                        }`}
                                        value={e.value}
                                        key={i}
                                        disableGutters
                                    >
                                        <img src={e.icon} alt={e.value} className="h-8 w-8" />
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
            </nav>

            <nav
                className={navbar || toggle ? `navbar-fixed bg-white ${toggle && 'navbar-toggled'}` : 'navbar-static'}
                id="routes-nav"
            >
                <div className="container-padding flex items-center justify-between">
                    <Link href="/" passHref>
                        <a className="relative h-12 w-24">
                            <Image
                                src="/images/logos/logo.svg"
                                alt="Promotion Business Team"
                                layout="fill"
                                objectFit="contain"
                            />
                        </a>
                    </Link>

                    <div
                        className={toggle ? 'nav-toggle opened lg:hidden' : 'nav-toggle lg:hidden'}
                        onClick={() => setToggle(!toggle)}
                    >
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <path
                                className="line line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                            />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path
                                className="line line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                            />
                        </svg>
                    </div>

                    <div
                        className={
                            toggle
                                ? 'nav-links active lg:flex lg:items-center lg:space-x-4'
                                : 'nav-links hidden lg:flex lg:items-center lg:space-x-4'
                        }
                    >
                        <Link href="/" passHref>
                            <a
                                className={currentRoute == '/' ? 'nav-link active' : 'nav-link'}
                                onClick={() => setToggle(false)}
                            >
                                {t('home')}
                            </a>
                        </Link>
                        <Link href="/despre-noi" passHref>
                            <a
                                className={currentRoute == '/despre-noi' ? 'nav-link active' : 'nav-link'}
                                onClick={() => setToggle(false)}
                            >
                                {t('about')}
                            </a>
                        </Link>

                        <Link href="/servicii" passHref>
                            <a
                                className={currentRoute == '/servicii' ? 'nav-link active' : 'nav-link'}
                                onClick={() => setToggle(false)}
                            >
                                {t('services')}
                            </a>
                        </Link>

                        <button
                            id="products-dropdown-button"
                            aria-controls={open ? 'products-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={(e) => setAnchorEl(e.currentTarget)}
                        >
                            {t('products')}
                        </button>
                        <Menu
                            id="products-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={() => setAnchorEl(null)}
                            MenuListProps={{
                                'aria-labelledby': 'products-dropdown-button'
                            }}
                            disableScrollLock={true}
                        >
                            {productsData.map((e, i) => (
                                <MenuItem onClick={() => setAnchorEl(null)} key={i}>
                                    <Link href={e.href} as={e.href} passHref>
                                        <a className="dropdown-link lg:text-gray-600 whitespace-nowrap lg:hover:text-black">
                                            {t(e.name)}
                                        </a>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>

                        <Link href="/accesorii" passHref>
                            <a
                                className={currentRoute == '/accesorii' ? 'nav-link active' : 'nav-link'}
                                onClick={() => setToggle(false)}
                            >
                                {t('accessories')}
                            </a>
                        </Link>

                        <Link href="/portofoliu" passHref>
                            <a
                                className={currentRoute == '/servicii' ? 'nav-link active' : 'nav-link'}
                                onClick={() => setToggle(false)}
                            >
                                {t('portfolio')}
                            </a>
                        </Link>

                        <Link href="/contact" passHref>
                            <a
                                className={currentRoute == '/contact' ? 'nav-link active' : 'nav-link'}
                                onClick={() => setToggle(false)}
                            >
                                {t('contact')}
                            </a>
                        </Link>

                        <div className="hidden lg:block lg:px-2" />

                        <Link href="/solicita-oferta" passHref>
                            <a className="nav-link" onClick={() => setToggle(false)}>
                                <button className="theme-button1">{t('getquote')}</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </NavStyles>
    );
}
