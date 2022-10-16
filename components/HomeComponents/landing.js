import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const LandingStyles = styled.div`
    padding: 120px 0 80px;
    position: relative;

    .background {
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-grow: 1;
        mask-image: linear-gradient(to bottom, white, transparent);
    }

    .background #color {
        position: absolute;
        border-radius: 100%;
        height: 0;
        filter: blur(8vw);
        opacity: 1;
    }

    .background #color:nth-child(1) {
        background: linear-gradient(132deg, lightseagreen 0%, lightseagreen 100%);
        width: 50%;
        padding-top: 50%;
        left: 10%;
        top: 75%;
        transform: translateX(-50%) translateY(-50%);
    }

    .background #color:nth-child(2) {
        background: linear-gradient(132deg, goldenrod 0%, goldenrod 100%);
        width: 50%;
        padding-top: 50%;
        left: 90%;
        top: 80%;
        transform: translateX(-50%) translateY(-50%);
    }
`;

export default function Landing({ t }) {
    return (
        <LandingStyles>
            <div className="background">
                <div id="color"></div>
                <div id="color"></div>
            </div>

            <div className="container-padding">
                <div className="relative bg-gradient-to-tr from-[#1A62A5] to-[#5BA2D7] shadow-xl">
                    <div className="h-full grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
                        <div className="space-y-10 px-8 py-8 lg:py-4 text-white my-auto">
                            <div className="space-y-4">
                                <h6 className="uppercase text-sm">{t('landing.subtitle')}</h6>
                                <div>
                                    <h4 className="capitalize">{t('landing.title')}</h4>
                                    <h1>Tamplarie PVC</h1>
                                </div>
                            </div>

                            <p>{t('landing.description')}</p>

                            <div className="flex space-x-4">
                                <button className="theme-button1">{t('common:getquote')}</button>
                                <button className="theme-button1-outlined text-white">{t('common:services')}</button>
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
        </LandingStyles>
    );
}
