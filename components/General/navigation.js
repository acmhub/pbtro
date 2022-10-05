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
                        <Link href="/">
                            <a className="nav-link space-x-1">
                                <span className="material-symbols-outlined text-theme1">phone_in_talk</span>
                                <p className="hidden lg:inline">+40 786 422 450</p>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="nav-link space-x-1">
                                <span className="material-symbols-outlined text-theme1">phone_in_talk</span>
                                <p className="hidden lg:inline">+40 723 391 843</p>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="nav-link space-x-1">
                                <span className="material-symbols-outlined text-theme1">drafts</span>
                                <p className="hidden lg:inline">pbtromania@gmail.com</p>
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="nav-link space-x-1">
                                <span className="material-symbols-outlined text-theme1">location_on</span>
                                <p className="hidden lg:inline">Domnesti, IF</p>
                            </a>
                        </Link>
                    </div>

                    <div className="flex items-center social-links">
                        <Link href="/">
                            <a target="_blank" rel="noopener noreferrer" className="nav-link space-x-1 facebook-icon">
                                <i className="fa-brands fa-facebook-f" />
                            </a>
                        </Link>
                        <Link href="/">
                            <a target="_blank" rel="noopener noreferrer" className="nav-link space-x-1 whatsapp-icon">
                                <i className="fa-brands fa-whatsapp" />
                            </a>
                        </Link>

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
                        <a className="relative my-2 navbar-brand h-12 w-24">
                            <Image
                                src="/images/logos/logo.webp"
                                alt="Promotion Business Team"
                                layout="fill"
                                objectFit="contain"
                            />
                        </a>
                    </Link>

                    <div
                        className={
                            toggle
                                ? 'nav-toggle active flex items-center cursor-pointer lg:hidden'
                                : 'nav-toggle flex items-center cursor-pointer lg:hidden'
                        }
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? (
                            <span className="material-symbols-outlined">close</span>
                        ) : (
                            <span className="material-symbols-outlined">menu</span>
                        )}
                    </div>

                    <div
                        className={
                            toggle
                                ? 'route-links hidden lg:flex items-center lg:space-x-4 visible'
                                : 'route-links hidden lg:flex items-center lg:space-x-4'
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

                        <div className="lg:px-2" />

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
