import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../utils/createEmotionCache';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const styledComponentsSheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        const cache = createEmotionCache();
        const { extractCriticalToChunks } = createEmotionServer(cache);

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        styledComponentsSheet.collectStyles(<App emotionCache={cache} {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);
            const emotionStyles = extractCriticalToChunks(initialProps.html);
            const emotionStyleTags = emotionStyles.styles.map((style) => (
                <style
                    data-emotion={`${style.key} ${style.ids.join(' ')}`}
                    key={style.key}
                    dangerouslySetInnerHTML={{ __html: style.css }}
                />
            ));

            return {
                ...initialProps,
                styles: (
                    <React.Fragment>
                        {initialProps.styles}
                        {styledComponentsSheet.getStyleElement()}
                        {emotionStyleTags}
                    </React.Fragment>
                )
            };
        } finally {
            styledComponentsSheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>Promotion Business Team - Producător Tâmplărie PVC și Aluminiu</title>
                    {/* Meta */}
                    <meta name="robots" content="index, follow" />
                    <meta
                        property="og:title"
                        content="Promotion Business Team - Producător Tâmplărie PVC și Aluminiu"
                    />
                    <meta
                        property="og:description"
                        content="Produsele noastre constituie o investitie pe termen lung sigura, fara costuri suplimentare de intretinere, reparatii , reconditionare etc. Montajul este executat de catre specialistii echipei noastre, la care se adauga si servicii de consultanta disponibile oricand pentru clientii nostri."
                    />
                    <meta property="og:image" content="/images/logos/logo.svg" />

                    {this.props.emotionStyleTags}

                    {/* Google Font */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap"
                        rel="stylesheet"
                    />

                    {/* Material Icons */}
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
                        rel="stylesheet"
                    />

                    {/* Font Awesome */}
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
                        integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
                        crossOrigin="anonymous"
                        referrerPolicy="no-referrer"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
