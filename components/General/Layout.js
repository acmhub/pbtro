import React from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import Navigation from './navigation';
import Footer from './footer';
import BackToTop from './BackToTop';

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

                <BackToTop />
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    pauseOnHover={false}
                    pauseOnFocusLoss={false}
                    rtl={false}
                    limit={4}
                    closeOnClick
                    draggable
                />
            </div>
        </React.Fragment>
    );
}
