import React, { useEffect, useState } from 'react';

export default function BackToTop() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 500) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', changeBackground);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className={`
                fixed bottom-5 right-5 h-8 w-8 bg-theme2 text-white flex items-center justify-center
                translate-y-5 cursor-pointer z-[900] duration-200 ease-in-out
                ${scrolled ? 'pointer-events-auto translate-y-0' : 'pointer-events-none opacity-0'}
            `}
            onClick={scrollToTop}
        >
            <span className="material-symbols-outlined">arrow_upward</span>
        </div>
    );
}
