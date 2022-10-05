import React from 'react';
import Head from 'next/head';

import Navigation from './navigation';
import Footer from './footer';

export default function Layout({ title, description, pageID, children }) {
    return (
        <React.Fragment>
            <Head>
                <title>
                    {title ? `${title} | PBT` : 'Promotion Business Team - Producator Tamplarie PVC si Aluminiu'}
                </title>
                {description && <meta name="description" content={description} />}
            </Head>

            <div className={`${pageID}-page`}>
                <Navigation />
                <React.Fragment>{children}</React.Fragment>
                <Footer />
            </div>
        </React.Fragment>
    );
}
